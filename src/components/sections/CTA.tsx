"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#343b44] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Unlock Your Opportunities
          </h2>
          <p className="text-white/45 text-sm max-w-md">
            Connect with us to align capital, projects, and people toward lasting impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="shrink-0"
        >
          <Link
            href="#contact"
            className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors duration-200"
          >
            Partner with Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
