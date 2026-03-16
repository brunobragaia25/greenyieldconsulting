"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutMission() {
  return (
    <section className="pt-[180px] pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#26a9b3] mb-5 leading-snug">
              When the right people come together, transformation follows
            </h2>

            <p className="text-[#343b44]/60 text-sm leading-relaxed mb-8">
              Green Yield connects capital, projects, and people across energy and
              sustainability. We align key stakeholders to accelerate investable
              solutions—delivering yield that drives both profit and impact.
            </p>

            <div className="flex flex-col gap-6">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.15 }}
                className="flex gap-3"
              >
                <Icon
                  icon="solar:leaf-bold-duotone"
                  className="text-[#26a9b3] shrink-0 mt-0.5"
                  width={22}
                />
                <p className="text-sm text-[#343b44]/70 leading-relaxed text-pretty">
                  <span className="font-semibold text-[#26a9b3]">Our Mission </span>
                  is to power the energy transition by aligning trusted partnerships and high-impact opportunities with the efficient allocation and deployment of capital — creating long-term value.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.25 }}
                className="flex gap-3"
              >
                <Icon
                  icon="solar:leaf-bold-duotone"
                  className="text-[#26a9b3] shrink-0 mt-0.5"
                  width={22}
                />
                <p className="text-sm text-[#343b44]/70 leading-relaxed text-pretty">
                  <span className="font-semibold text-[#26a9b3]">Our Vision </span>
                  is a sustainable future powered by green energy that drives progress for all.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="hidden lg:flex items-center justify-center"
          >
            {/* Decorative SVG — replace with actual watercolor image */}
            <div className="relative w-full max-w-md aspect-[4/3] rounded-[20px] bg-gradient-to-br from-[#e8faf8] to-[#f0fdf9] flex items-center justify-center overflow-hidden">
              {/* Background circles */}
              <div className="absolute w-64 h-64 rounded-full bg-[#26a9b3]/5 -bottom-10 -right-10" />
              <div className="absolute w-40 h-40 rounded-full bg-[#26a9b3]/8 top-4 left-4" />

              <div className="relative flex flex-col items-center gap-3 z-10">
                <div className="flex gap-4 items-end">
                  {/* Solar panel */}
                  <Icon icon="solar:sun-2-bold-duotone" className="text-[#26a9b3]/40" width={56} />
                  {/* Wind turbine */}
                  <Icon icon="solar:wind-bold-duotone" className="text-[#26a9b3]/30" width={72} />
                  {/* Building */}
                  <Icon icon="solar:buildings-bold-duotone" className="text-[#26a9b3]/25" width={48} />
                </div>
                <Icon icon="solar:leaf-bold-duotone" className="text-[#26a9b3]/20" width={36} />
                <p className="text-xs text-[#26a9b3]/40 font-medium">Add illustration here</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
