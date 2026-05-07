"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import type { ServiceItem } from "@/lib/services";
import { services } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicePage({ service }: { service: ServiceItem }) {
  return (
    <div className="pt-[72px] min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#f5f6f8] border-b border-[#efefef]">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {/* Icon */}
            <div className="w-20 h-20 rounded-[18px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0 ring-4 ring-white shadow-[0_8px_30px_#0000001a]">
              <Icon icon={service.icon} className="text-[#26a9b3]" width={40} />
            </div>

            {/* Info */}
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold text-[#26a9b3] uppercase tracking-widest mb-2">
                Our Services
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-[#343b44] mb-2">
                {service.label}
              </h1>
              <p className="text-sm text-[#343b44]/55 leading-relaxed max-w-xl">
                {service.tagline}
              </p>
            </div>

            {/* Back */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-[#343b44]/45 hover:text-[#343b44] transition-colors shrink-0"
            >
              <Icon icon="solar:alt-arrow-left-bold" width={16} />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Left — Description + Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-[#343b44] mb-5">Overview</h2>
            <div className="flex flex-col gap-4 mb-12">
              {service.description.map((p, i) => (
                <p key={i} className="text-[#343b44]/65 text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-[#343b44] mb-6">Our support includes:</h2>
            <div className="flex flex-col gap-5 mb-8">
              {service.offerings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.07 }}
                  className="flex gap-4 p-5 rounded-[14px] border border-[#f0f0f0] bg-[#fafafa] hover:border-[#26a9b3]/20 hover:bg-[#f5fdfc] transition-colors duration-200 items-center"
                >
                  <div className="w-8 h-8 rounded-[8px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#26a9b3]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#343b44]">{item.title}</p>
                    {item.description && (
                      <p className="text-sm text-[#343b44]/60 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {service.slug === "financiers-investors" && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease, delay: 0.3 }}
                className="text-[#343b44]/65 text-sm leading-relaxed"
              >
                We bridge de-risked projects with layered capital structures — equity, project finance, and hybrid models.
              </motion.p>
            )}
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="h-fit"
          >
            <div className="bg-[#f5f6f8] rounded-[24px] p-8 border border-[#efefef]">
              <div className="w-10 h-10 rounded-[10px] bg-[#26a9b3]/10 flex items-center justify-center mb-5">
                <Icon icon="solar:chat-round-call-bold-duotone" className="text-[#26a9b3]" width={22} />
              </div>
              <p className="text-base font-bold text-[#343b44] mb-2 leading-snug">
                Let&apos;s structure what&apos;s next.
              </p>
              <p className="text-sm text-[#343b44]/55 leading-relaxed mb-6">
                Tell us about your project or goals and we&apos;ll connect you with the right people.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#26a9b3] hover:bg-[#22595d] text-white text-sm font-semibold transition-colors duration-200"
              >
                Get in Touch
                <Icon icon="solar:alt-arrow-right-bold" width={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Other Services */}
        <OtherServices currentSlug={service.slug} />
      </div>
    </div>
  );
}

function OtherServices({ currentSlug }: { currentSlug: string }) {
  const others = services.filter((s) => s.slug !== currentSlug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
      className="mt-16 pt-12 border-t border-[#f0f0f0]"
    >
      <h2 className="text-lg font-semibold text-[#343b44] mb-8">Explore Our Other Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {others.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.35 + i * 0.07 }}
            className="h-full"
          >
            <Link
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-4 p-5 rounded-[16px] border border-[#f0f0f0] hover:border-[#26a9b3]/20 hover:shadow-[0_4px_20px_#0000000a] transition-all duration-200 h-full"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#26a9b3]/10 flex items-center justify-center group-hover:bg-[#26a9b3]/15 transition-colors">
                <Icon icon={s.icon} className="text-[#26a9b3]" width={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#343b44] group-hover:text-[#26a9b3] transition-colors">
                  {s.label}
                </p>
                <p className="text-xs text-[#343b44]/45 mt-0.5 leading-snug">{s.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
