"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const values = [
  {
    icon: "solar:hand-shake-bold-duotone",
    title: "Trust & Transparency",
    body: "We build relationships on honesty. Every recommendation we make is grounded in rigorous analysis and a genuine alignment of interests.",
  },
  {
    icon: "solar:target-bold-duotone",
    title: "Impact-Driven",
    body: "We measure success not just in financial returns, but in the tangible environmental and social outcomes our work helps create.",
  },
  {
    icon: "solar:lightning-bold-duotone",
    title: "Agility",
    body: "Energy markets move fast. We stay ahead of regulatory shifts, technology trends, and capital flows so our clients always have an edge.",
  },
  {
    icon: "solar:earth-bold-duotone",
    title: "Global Perspective",
    body: "With experience across emerging and developed markets, we bring cross-border insight to every engagement — connecting local projects to global capital.",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Integrity",
    body: "We act with independence and professional rigor. Our clients trust us to give them the full picture — not just what they want to hear.",
  },
  {
    icon: "solar:atom-bold-duotone",
    title: "Innovation",
    body: "From carbon credit structuring to blended finance, we embrace new instruments and models that unlock opportunities others miss.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-[#26a9b3] uppercase tracking-widest mb-3 block">
            What We Stand For
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#343b44]">Our Values</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-[17px] p-7 border border-[#f5f5f5] hover:border-[#26a9b3]/20 hover:shadow-[0_14px_40px_#0000000d] transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[#26a9b3]/10 flex items-center justify-center mb-5 group-hover:bg-[#26a9b3]/15 transition-colors">
                <Icon icon={v.icon} className="text-[#26a9b3]" width={22} />
              </div>
              <h3 className="text-base font-semibold text-[#343b44] mb-2">{v.title}</h3>
              <p className="text-sm text-[#343b44]/55 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
