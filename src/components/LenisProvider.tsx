"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ReactLenis } from "lenis/react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  // Runs once per real browser load/reload (this effect does NOT re-run on
  // next/link client-side navigation, since LenisProvider lives in the root
  // layout and stays mounted across route changes).
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.pathname !== "/") {
      router.replace("/");
    } else {
      window.scrollTo(0, 0);
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
      {children}
    </ReactLenis>
  );
}
