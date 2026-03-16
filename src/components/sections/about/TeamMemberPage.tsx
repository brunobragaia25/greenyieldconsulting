"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/lib/team";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TeamMemberPage({ member }: { member: TeamMember }) {
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
            {/* Avatar */}
            <div className="w-28 h-28 rounded-full overflow-hidden bg-[#e8f9f8] flex items-center justify-center shrink-0 ring-4 ring-white shadow-[0_8px_30px_#0000001a]">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Icon icon="solar:user-circle-bold-duotone" className="text-[#26a9b3]/40" width={64} />
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold text-[#26a9b3] uppercase tracking-widest mb-2">
                {member.group === "managing_partner" ? "Managing Partner" : "Expert"}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-[#343b44] mb-1">{member.name}</h1>
              <p className="text-sm font-semibold text-[#343b44]/45 uppercase tracking-wider mb-4">
                {member.role}
              </p>

              <div className="flex items-center gap-3 mt-2">
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#26a9b3]/10 hover:bg-[#26a9b3]/20 flex items-center justify-center transition-colors"
                >
                  <Icon icon="solar:linkedin-bold" className="text-[#26a9b3]" width={17} />
                </Link>
                {member.email && (
                  <Link
                    href={`mailto:${member.email}`}
                    aria-label="Email"
                    className="w-9 h-9 rounded-full bg-[#26a9b3]/10 hover:bg-[#26a9b3]/20 flex items-center justify-center transition-colors"
                  >
                    <Icon icon="solar:letter-bold-duotone" className="text-[#26a9b3]" width={17} />
                  </Link>
                )}
              </div>
            </div>

            {/* Back */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#343b44]/50 hover:text-[#343b44] border border-[#343b44]/15 hover:border-[#343b44]/30 rounded-full px-4 py-2 transition-all duration-200 shrink-0"
            >
              <Icon icon="solar:alt-arrow-left-bold" width={14} />
              Back to About
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="max-w-2xl"
        >
          <h2 className="text-lg font-semibold text-[#343b44] mb-5">About</h2>
          <div className="flex flex-col gap-4">
            {member.bio.map((paragraph, i) => (
              <p key={i} className="text-[#343b44]/65 text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Team grid — other members */}
        <OtherMembers currentSlug={member.slug} />
      </div>
    </div>
  );
}

// ---- Other team members ----
import { team } from "@/lib/team";

function OtherMembers({ currentSlug }: { currentSlug: string }) {
  const others = team.filter((m) => m.slug !== currentSlug).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay: 0.3 }}
      className="mt-16 pt-12 border-t border-[#f0f0f0]"
    >
      <h2 className="text-lg font-semibold text-[#343b44] mb-8">Meet the rest of the team</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {others.map((m, i) => (
          <motion.div
            key={m.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.35 + i * 0.07 }}
          >
            <Link
              href={`/about/team/${m.slug}`}
              className="group flex flex-col items-center text-center gap-3 p-4 rounded-[14px] border border-[#f0f0f0] hover:border-[#26a9b3]/20 hover:shadow-[0_4px_20px_#0000000a] transition-all duration-200"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-[#f0f9fb] flex items-center justify-center">
                {m.image ? (
                  <Image src={m.image} alt={m.name} width={56} height={56} className="w-full h-full object-cover" />
                ) : (
                  <Icon icon="solar:user-circle-bold-duotone" className="text-[#26a9b3]/35" width={36} />
                )}
              </div>
              <div>
                <p className="text-xs font-semibold text-[#343b44] group-hover:text-[#26a9b3] transition-colors leading-tight">
                  {m.name}
                </p>
                <p className="text-[10px] text-[#343b44]/40 mt-0.5 leading-tight">{m.role}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
