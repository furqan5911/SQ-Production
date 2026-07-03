"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const hash = window.location.hash;
    if (hash) {
      // Navigate to a hash anchor — wait for page to render then scroll to it
      const id = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -100 });
          // Strip the hash so a refresh lands at the top, not this anchor
          history.replaceState(null, "", window.location.pathname);
        }
      }, 350);
      return () => clearTimeout(id);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

function LenisWakeup() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const wake = () => lenis.start();

    // Tab regains visibility after being hidden
    const onVisibility = () => { if (!document.hidden) { wake(); lenis.resize(); } };
    document.addEventListener("visibilitychange", onVisibility);

    // User scrolls or touches after idle — lenis.start() is a no-op if already running
    window.addEventListener("wheel", wake, { passive: true });
    window.addEventListener("touchstart", wake, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("wheel", wake);
      window.removeEventListener("touchstart", wake);
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Only bounce back to home on an actual page refresh — not on a fresh
    // navigation (new tab, direct URL, target="_blank" links like the
    // service-category EXPLORE links). The Navigation Timing API tells them
    // apart: refresh reports type "reload", everything else "navigate".
    const [navEntry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    const isReload = navEntry?.type === "reload";
    if (isReload && window.location.pathname !== "/") {
      router.replace("/");
    }
  }, [router]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <ScrollToTop />
      <LenisWakeup />
      {children}
    </ReactLenis>
  );
}
