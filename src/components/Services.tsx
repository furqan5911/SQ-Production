"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { SERVICES } from "@/lib/constants";

function ArrowCircleDown({ fill }: { fill: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={{ fill, width: "100%", height: "100%", display: "block", transition: "fill 0.3s ease" }}
    >
      <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z" />
    </svg>
  );
}

function ServiceCard({
  service,
  index,
  isExpanded,
  onExpand,
  onCollapse,
}: {
  service: typeof SERVICES[0];
  index: number;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const [hovered, setHovered]       = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const gradientX  = useMotionValue(0);
  const springX    = useSpring(gradientX, { stiffness: 80, damping: 20 });
  const background = useTransform(
    springX,
    (x) => `radial-gradient(50% 50% at ${x}% 0%, rgba(255,255,255,0.15) 2.21%, transparent 100%)`
  );

  const imgId = `svc-img-${index}`;

  function expand() {
    onExpand();
    setHovered(false);
    setBtnHovered(false);
    gradientX.set(50);
  }
  function collapse() {
    onCollapse();
    setBtnHovered(false);
    gradientX.set(0);
  }

  const arrowRotate = isExpanded ? 180 : (hovered || btnHovered) ? 0 : -90;
  const arrowFill   = isExpanded || hovered || btnHovered ? "rgb(255,171,66)" : "rgba(255,255,255,0.8)";

  const titleStyle: React.CSSProperties = {
    backgroundImage: "linear-gradient(98deg, rgb(255,255,255) 0%, rgba(255,255,255,0.77) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const btnStyle: React.CSSProperties = {
    background: "rgb(13,13,13)",
    borderRadius: 27,
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "0.5px solid rgba(255,255,255,0.3)",
    padding: "5px 3px 5px 20px",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
      className="relative pt-10"
      onMouseEnter={() => { if (!isExpanded) { setHovered(true); gradientX.set(50); } }}
      onMouseLeave={() => { if (!isExpanded) { setHovered(false); setBtnHovered(false); gradientX.set(0); } }}
    >
      {/* Floating image — hovers above card; flies to left column on click */}
      <AnimatePresence>
        {!isExpanded && hovered && (
          <motion.div
            key="float"
            className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
            onClick={expand}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6, transition: { duration: 0.15 } }}
          >
            <motion.img
              layoutId={imgId}
              src={service.image}
              alt={service.title}
              style={{ rotate: -6, borderRadius: 16, objectFit: "cover" }}
              className="w-56 h-52 shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glass card — real site renders 0px border at rest and on hover,
          confirmed via computed style; only the gradient tint is visible. */}
      <motion.div
        style={{ background }}
        className="relative rounded-[30px] p-6 sm:p-8 md:p-10 cursor-pointer"
        onClick={() => { if (!isExpanded) expand(); }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-5" style={titleStyle}>
          {service.title}
        </h3>

        {/* Description — always shown; collapses when expanded to make room for bullets */}
        <AnimatePresence initial={false}>
          {!isExpanded && (
            <motion.div
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }}
              className="overflow-hidden"
            >
              <p className="text-[rgba(255,255,255,0.8)] text-sm leading-relaxed max-w-lg mb-5">
                {service.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded content — description + bullet list (image is in left column, not here) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", transition: { duration: 0.35, ease: "easeOut" } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.2, ease: "easeIn" } }}
              className="overflow-hidden mb-5"
            >
              <p className="text-[rgba(255,255,255,0.8)] text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 24 }}
                className="flex flex-col gap-2.5"
              >
                {service.details.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[rgba(255,255,255,0.85)] text-[11px] font-bold tracking-[0.14em] uppercase"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f87800] shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={isExpanded ? collapse : expand}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
          className="inline-flex items-center gap-3 w-fit cursor-pointer"
          style={btnStyle}
        >
          <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
            {isExpanded ? "Hide Details" : "Learn More"}
          </span>
          <motion.div
            animate={{ rotate: arrowRotate }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            style={{ width: 30, height: 30 }}
          >
            <ArrowCircleDown fill={arrowFill} />
          </motion.div>
        </button>
      </motion.div>
    </motion.div>
  );
}

function ExploreBtn() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href="/services"
      className="shrink-0 inline-flex items-center overflow-hidden"
      style={{
        height: 60,
        padding: 5,
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        background: "linear-gradient(112deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.11) 100%)",
        borderRadius: 40,
        borderTop: "2px solid rgba(255,255,255,0.5)",
        borderLeft: "2px solid rgba(255,255,255,0.5)",
        borderBottom: "2px solid transparent",
        borderRight: "2px solid transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden flex items-center h-full"
        style={{
          paddingTop: 17,
          paddingRight: 33,
          paddingBottom: 17,
          paddingLeft: hovered ? 20 : 0,
          transition: "padding-left 0.35s ease-out",
          backdropFilter: "blur(13px)",
          WebkitBackdropFilter: "blur(13px)",
          backgroundColor: "rgba(0,0,0,0.55)",
          borderRadius: 30,
        }}
      >
        {/* Orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            background: "radial-gradient(127.9% 258% at -40.3% 0%, rgb(255,171,66) 51.7%, rgb(201,145,109) 75.4%, rgb(255,99,111) 100%)",
            borderRadius: 103,
            zIndex: 0,
            transition: "all 0.35s ease-out",
            ...(hovered
              ? { width: "9px", height: "8px", top: "21px", left: "34px" }
              : { width: "100%", height: "100%", top: 0, left: 0 }
            ),
          }}
        />
        {/* Spotlight heartbeat */}
        <div
          className="relative shrink-0 rounded-full overflow-hidden"
          style={{ width: 36, height: 36, zIndex: 1, opacity: hovered ? 1 : 0, transition: "opacity 0.25s ease" }}
        >
          <motion.div
            className="absolute rounded-full"
            animate={hovered ? { scale: [0.5, 1.0, 0.6, 0.85, 0.5] } : { scale: 0.15 }}
            transition={hovered
              ? { duration: 0.9, repeat: Infinity, times: [0, 0.15, 0.35, 0.5, 1.0], ease: "easeInOut" }
              : { duration: 0.3, ease: "easeOut" }
            }
            style={{ width: 18, height: 18, top: "calc(50% - 9px)", left: "calc(50% - 9px)", backgroundColor: "rgb(255,0,13)", mixBlendMode: "screen" }}
          />
        </div>
        <span className="relative text-white text-sm font-bold whitespace-nowrap" style={{ zIndex: 1 }}>
          Explore Services
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  function handleExpand(i: number) {
    setActiveIndices(prev => new Set([...prev, i]));
  }
  function handleCollapse(i: number) {
    setActiveIndices(prev => { const n = new Set(prev); n.delete(i); return n; });
  }

  return (
    <section id="services" className="bg-[#0a0a0a] pt-16 pb-24 md:pt-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-start">

          {/* Left — heading always visible; image expands below it when a card is active */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-6 md:mb-8">
              From Concept To Completion:<br />
              We&apos;ve Got You Covered!
            </h2>

            {/* Stack of active service images — each expands in order, pushes button down */}
            <AnimatePresence initial={false}>
              {SERVICES.map((service, i) =>
                activeIndices.has(i) ? (
                  <motion.div
                    key={`img-panel-${i}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeOut" } }}
                    exit={{ opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn" } }}
                    className="overflow-hidden mb-4"
                  >
                    <motion.img
                      layoutId={`svc-img-${i}`}
                      src={service.image}
                      alt={service.title}
                      style={{ rotate: 0, borderRadius: 24, objectFit: "cover" }}
                      className="w-full h-[320px]"
                    />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Explore Services — glass pill, same effect as Get Started */}
            <ExploreBtn />
          </div>

          {/* Right — glass cards */}
          <div className="flex flex-col gap-2 pt-4 md:pt-0">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                isExpanded={activeIndices.has(i)}
                onExpand={() => handleExpand(i)}
                onCollapse={() => handleCollapse(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
