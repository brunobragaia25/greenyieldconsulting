"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

function fadeUpProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      <div className="max-w-[1280px] mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left — text */}
        <div>
          {/* Headline */}
          <motion.h1
            {...fadeUpProps(0.1)}
            className="text-[48px] md:text-[56px] lg:text-[60px] font-bold leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-[#343b44]">Driving Progress</span>
            <br />
            <span className="text-[#26a9b3]">Through Smart</span>
            <br />
            <span className="text-[#26a9b3]">Connections.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUpProps(0.25)}
            className="text-lg text-[#343b44]/65 leading-relaxed max-w-lg mb-4"
          >
            We connect capital, projects, and partners across the energy and
            sustainability value chain — structuring transactions that convert
            pipelines into de-risked, investable assets with durable returns
            and measurable impact.
          </motion.p>

          <motion.p
            {...fadeUpProps(0.32)}
            className="text-sm text-[#343b44]/50 leading-relaxed max-w-lg mb-10"
          >
            Bridging de-risked projects with multi-layered global capital sources.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUpProps(0.4)}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="#services"
              className="px-8 py-4 rounded-full bg-[#22595d] text-white text-sm font-semibold hover:bg-[#26a9b3] transition-colors duration-200"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#26a9b3] text-white text-sm font-semibold hover:bg-[#22595d] transition-colors duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Right — placeholder for image/visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="hidden lg:flex items-stretch self-stretch"
        >
          {/* Wind turbine illustration placeholder — replace with actual image */}
          <div className="relative w-full min-h-[400px] rounded-[17px] overflow-hidden bg-[#f0fafa]">
            <div className="absolute inset-0 flex items-center justify-center text-[#26a9b3]/20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="58" stroke="#26a9b3" strokeWidth="1.5" />
                <path
                  d="M60 20v80M20 60h80"
                  stroke="#26a9b3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="60" r="8" fill="#26a9b3" fillOpacity="0.3" />
              </svg>
            </div>
            <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-[#26a9b3]/40 font-medium">
              Add hero image here
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
