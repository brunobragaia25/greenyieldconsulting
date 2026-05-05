"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const services = [
  { label: "Secure Financing",                icon: "solar:safe-square-bold-duotone" },
  { label: "Project Sales",                   icon: "solar:hand-shake-bold-duotone" },
  { label: "Energy Transition Advisory",      icon: "solar:atom-bold-duotone" },
  { label: "Carbon Credit Commercialization", icon: "solar:leaf-bold-duotone" },
];

const CARD_H = 64;
const GAP = 12;
const TOTAL = services.length;
const DIAGRAM_H = TOTAL * CARD_H + (TOTAL - 1) * GAP;
const cardY = (i: number) => i * (CARD_H + GAP) + CARD_H / 2;
const midY = DIAGRAM_H / 2;

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-20 bg-[#f5f6f8]">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 text-[#343b44]/70 text-base leading-relaxed"
        >
          Sustainable progress doesn't happen in isolation — it is enabled by meaningful connection and effective execution. Well-timed partnerships unlock opportunity, mobilize resources, and accelerate progress. At the core of our work is a simple belief: when the right people come together, transformation follows.
        </motion.p>

        {/* What we do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[32px] font-semibold text-[#26a9b3] mb-5">What we do</h2>
          <p className="text-[#343b44]/60 text-base leading-relaxed">
            We enable the energy and sustainability market by connecting critical
            stakeholders: Project owners, EPCs, off-takers, financiers, and
            investors. We provide tailored services across the value chain to
            align interests, unlock high-impact opportunities, and accelerate
            investable solutions that deliver both profit and long-term impact.
          </p>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[32px] font-semibold text-[#26a9b3] text-center mb-14"
        >
          Our Services
        </motion.h3>

        {/* Desktop diagram */}
        <div ref={ref} className="hidden lg:flex items-center justify-center gap-0 max-w-3xl mx-auto">

          {/* GY Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative shrink-0 w-36 h-36"
          >
            <motion.div
              animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0, 0.25] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#26a9b3]"
            />
            <div className="absolute inset-2 rounded-full bg-white shadow-[0_8px_40px_#26a9b322] flex flex-col items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
                <motion.path
                  d="M 56 8 A 48 48 0 0 1 104 56 A 48 48 0 0 1 56 104"
                  fill="none" stroke="#26a9b3" strokeWidth="5" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                />
                <motion.path
                  d="M 56 104 A 48 48 0 0 1 8 56 A 48 48 0 0 1 56 8"
                  fill="none" stroke="#343b44" strokeWidth="5" strokeLinecap="round" strokeDasharray="7 5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                />
              </svg>
              <Icon icon="solar:leaf-bold-duotone" className="text-[#26a9b3] relative z-10" width={22} />
              <span className="text-[20px] font-bold text-[#343b44] leading-none relative z-10">GY</span>
            </div>
          </motion.div>

          {/* SVG connector lines */}
          <svg width="80" height={DIAGRAM_H} viewBox={`0 0 80 ${DIAGRAM_H}`} className="shrink-0" overflow="visible">
            {services.map((_, i) => {
              const y = cardY(i);
              const d = `M 0 ${midY} L 20 ${midY} Q 40 ${midY} 40 ${y + (y > midY ? -10 : y < midY ? 10 : 0)} L 40 ${y} L 80 ${y}`;
              return (
                <motion.path
                  key={i} d={d} fill="none" stroke="#26a9b3" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.08 }}
                />
              );
            })}
            {services.map((_, i) => (
              <motion.circle
                key={i} cx={78} cy={cardY(i)} r={3.5} fill="#26a9b3"
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.75 + i * 0.08 }}
              />
            ))}
          </svg>

          {/* Service cards */}
          <div className="flex-1 flex flex-col" style={{ gap: GAP }}>
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 + i * 0.08 }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                style={{ height: CARD_H }}
                className="flex items-center gap-3 bg-white rounded-[14px] px-5 shadow-[0_2px_20px_#0000000a] border border-white/80 cursor-default"
              >
                <div className="w-9 h-9 rounded-[8px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0">
                  <Icon icon={s.icon} className="text-[#26a9b3]" width={20} />
                </div>
                <span className="text-sm font-medium text-[#343b44]/75">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full bg-white shadow-[0_8px_30px_#26a9b320] flex flex-col items-center justify-center"
          >
            <Icon icon="solar:leaf-bold-duotone" className="text-[#26a9b3]" width={20} />
            <span className="text-base font-bold text-[#343b44]">GY</span>
          </motion.div>
          <div className="w-px h-6 bg-[#26a9b3]/30" />
          <div className="w-full flex flex-col gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-center gap-3 bg-white rounded-[14px] px-5 py-4 shadow-[0_2px_16px_#0000000a]"
              >
                <div className="w-2 h-2 rounded-full bg-[#26a9b3] shrink-0" />
                <div className="w-9 h-9 rounded-[8px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0">
                  <Icon icon={s.icon} className="text-[#26a9b3]" width={20} />
                </div>
                <span className="text-sm font-medium text-[#343b44]/75">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
