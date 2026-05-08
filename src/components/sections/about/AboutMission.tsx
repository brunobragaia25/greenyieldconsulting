"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

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
              Who We Are
            </h2>

            <p className="text-[#343b44]/60 text-sm leading-relaxed mb-4">
              Green Yield is a strategic advisory firm focused on renewable energy, infrastructure, and sustainability markets across Latin America, Africa, and global capital corridors.
            </p>

            <p className="text-[#343b44]/60 text-sm leading-relaxed mb-4">
              We align developers, EPCs, investors, and off-takers to structure bankable transactions across development, financing, commercialization, and energy transition strategies.
            </p>

            <p className="text-[#343b44]/60 text-sm leading-relaxed mb-8">
              With over 90 years of combined experience, our team has led clean energy and finance initiatives managing more than $750M in funding across multiple markets.
            </p>

            {/* Mission & Vision */}
            <div className="flex flex-col gap-6 mt-10">
              {/* Mission */}
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.15 }}
                className="text-sm text-[#343b44]/70 leading-relaxed"
              >
                <span className="font-semibold text-[#26a9b3]">Our Mission </span>
                To power the energy transition by aligning trusted partnerships and high-impact opportunities with the efficient allocation and deployment of capital — creating long-term value.
              </motion.p>

              {/* Vision */}
              <motion.p
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: 0.25 }}
                className="text-sm text-[#343b44]/70 leading-relaxed"
              >
                <span className="font-semibold text-[#26a9b3]">Our Vision </span>
                A sustainable future powered by green energy that drives progress for all.
              </motion.p>
            </div>
          </motion.div>

          {/* Right — Photo Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="hidden lg:block rounded-[20px] overflow-hidden relative w-full h-full min-h-[400px]"
          >
            <img
              src="/photo-map.png"
              alt="World map"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
