"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fire exit right as fireball finishes building (1.3s animation + 100ms hold)
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          // Overlay fades slowly — site appears through it as fireball blasts
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          {/* Fireball — blasts outward on exit */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 22,
              opacity: 0,
              transition: { duration: 0.6, ease: [0.4, 0, 1, 1] },
            }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outermost glow — slow pulse */}
            <motion.div
              className="absolute rounded-full"
              animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "clamp(240px, 45vw, 380px)",
                height: "clamp(240px, 45vw, 380px)",
                background:
                  "radial-gradient(circle, rgba(248,120,0,0.28) 0%, rgba(200,40,0,0.12) 60%, transparent 80%)",
                filter: "blur(28px)",
              }}
            />

            {/* Mid glow ring — offset pulse */}
            <motion.div
              className="absolute rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.25,
              }}
              style={{
                width: "clamp(155px, 28vw, 245px)",
                height: "clamp(155px, 28vw, 245px)",
                background:
                  "radial-gradient(circle, rgba(255,148,28,0.65) 0%, rgba(240,76,0,0.38) 55%, transparent 80%)",
                filter: "blur(10px)",
              }}
            />

            {/* Core fireball ball */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(88px, 15vw, 148px)",
                height: "clamp(88px, 15vw, 148px)",
                background:
                  "radial-gradient(circle, #ffaa22 0%, #f87800 40%, #cc3300 72%, #660000 100%)",
                filter: "blur(1.5px)",
                boxShadow:
                  "0 0 28px 10px rgba(248,120,0,0.82), 0 0 65px 26px rgba(248,76,0,0.46), 0 0 110px 48px rgba(200,28,0,0.22)",
              }}
            />

            {/* Dark backdrop so logo is always legible on the bright core */}
            <div
              className="absolute rounded-full"
              style={{
                width: "clamp(58px, 9vw, 88px)",
                height: "clamp(58px, 9vw, 88px)",
                background: "rgba(0,0,0,0.45)",
                filter: "blur(5px)",
              }}
            />

            {/* SQ icon mark — square icon only, not the horizontal logo */}
            <div className="relative z-10">
              <Image
                src="/images/sq-icon.png"
                alt="SQ"
                width={72}
                height={72}
                priority
                style={{
                  width: "clamp(48px, 7.5vw, 72px)",
                  height: "clamp(48px, 7.5vw, 72px)",
                  objectFit: "contain",
                  filter: "invert(1) drop-shadow(0 0 4px rgba(0,0,0,0.7))",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
