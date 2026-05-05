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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[72px]">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      {/* Content overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
        }}
      />
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left — text */}
        <div>
          {/* Headline */}
          <motion.h1
            {...fadeUpProps(0.1)}
            className="text-[48px] font-bold leading-[1.08] tracking-tight mb-6"
          >
            <span className="text-white">Driving Progress</span>
            <br />
            <span className="text-[#26a9b3]">Through Smart</span>
            <br />
            <span className="text-[#26a9b3]">Connections.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUpProps(0.25)}
            className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-4"
          >
            We connect capital, projects, and partners across the energy and
            sustainability value chain — structuring transactions that convert
            pipelines into de-risked, investable assets with durable returns
            and measurable impact.
          </motion.p>

          <motion.p
            {...fadeUpProps(0.32)}
            className="text-sm text-white/50 leading-relaxed max-w-lg mb-10"
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

      </div>
    </section>
  );
}
