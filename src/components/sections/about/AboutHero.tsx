"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  return (
    <section className="relative pt-[72px] overflow-hidden bg-white">
      {/* Teal gradient top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -5%, #25a9b21a 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#26a9b3]/10 border border-[#26a9b3]/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#26a9b3]" />
          <span className="text-xs font-medium text-[#22595d] tracking-wide uppercase">
            Who We Are
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="text-[40px] md:text-[56px] font-bold text-[#343b44] leading-tight tracking-tight mb-6 max-w-3xl mx-auto"
        >
          Connecting Capital to{" "}
          <span className="text-[#26a9b3]">Lasting Impact</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="text-lg text-[#343b44]/55 leading-relaxed max-w-2xl mx-auto"
        >
          Green Yield Consulting is a specialized advisory firm working at the
          intersection of finance, project development, and sustainability. We
          bridge the gap between ambition and execution in the global energy
          transition.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="w-16 h-0.5 bg-[#26a9b3] mx-auto mt-12"
        />
      </div>
    </section>
  );
}
