"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1] as const;

const points = [
  {
    icon: "solar:users-group-rounded-bold-duotone",
    title: "Deep Stakeholder Network",
    body: "Years of relationship-building across project developers, financiers, EPCs, off-takers, and regulators means we open doors that others can't.",
  },
  {
    icon: "solar:chart-square-bold-duotone",
    title: "Full Value Chain Coverage",
    body: "We don't just advise on financing — we understand the full project lifecycle, from feasibility through to commercial operation.",
  },
  {
    icon: "solar:hand-money-bold-duotone",
    title: "Aligned Incentives",
    body: "We structure our engagements so our success is tied to yours. When your deal closes, we celebrate together.",
  },
  {
    icon: "solar:earth-bold-duotone",
    title: "Emerging Market Expertise",
    body: "We specialize in markets where the energy transition opportunity is largest but where navigating complexity requires real local knowledge.",
  },
];

export default function AboutDifferent() {
  return (
    <section className="py-24 bg-[#f5f6f8]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease }}
          >
            <span className="text-xs font-medium text-[#26a9b3] uppercase tracking-widest mb-3 block">
              Why Green Yield
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#343b44] mb-5 leading-tight">
              What Makes Us Different
            </h2>
            <p className="text-[#343b44]/55 text-sm leading-relaxed max-w-md">
              In a market full of generalist advisors, we go deep. Our team
              brings hands-on experience from both sides of the table —
              building and financing energy projects — so we understand what
              it actually takes to get deals done.
            </p>
          </motion.div>

          {/* Right — points */}
          <div className="flex flex-col gap-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                className="flex gap-4 bg-white rounded-[14px] p-5 shadow-[0_2px_16px_#0000000a] border border-white/80"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon={p.icon} className="text-[#26a9b3]" width={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#343b44] mb-1">{p.title}</h3>
                  <p className="text-xs text-[#343b44]/55 leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
