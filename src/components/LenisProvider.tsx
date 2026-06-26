"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.pathname !== "/") {
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
      {children}
    </ReactLenis>
  );
}
