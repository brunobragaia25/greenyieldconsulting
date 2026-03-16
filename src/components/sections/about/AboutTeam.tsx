"use client";

import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/lib/team";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const managingPartners = team
  .filter((m) => m.group === "managing_partner")
  .map((m) => ({ name: m.name, role: m.role, image: m.image, href: `/about/team/${m.slug}` }));

const experts = team
  .filter((m) => m.group === "expert")
  .map((m) => ({ name: m.name, role: m.role, image: m.image, href: `/about/team/${m.slug}` }));

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function MemberCard({
  name,
  role,
  image,
  href,
}: {
  name: string;
  role: string;
  image: string | null;
  href: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-white rounded-[16px] p-6 shadow-[0_2px_20px_#0000000a] border border-[#f0f0f0] flex flex-col gap-4"
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-[#f0f9fb] flex items-center justify-center shrink-0">
        {image ? (
          <Image src={image} alt={name} width={64} height={64} className="w-full h-full object-cover" />
        ) : (
          <Icon icon="solar:user-circle-bold-duotone" className="text-[#26a9b3]/40" width={44} />
        )}
      </div>

      <div>
        <h3 className="text-base font-semibold text-[#343b44]">{name}</h3>
        <p className="text-[11px] font-semibold text-[#343b44]/45 uppercase tracking-wider mt-0.5">
          {role}
        </p>
      </div>

      <Link
        href={href}
        className="text-sm font-medium text-[#26a9b3] hover:text-[#22595d] transition-colors w-fit"
      >
        View more
      </Link>
    </motion.div>
  );
}

export default function AboutTeam() {
  return (
    <>
      {/* Our Team — description */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#26a9b3] mb-6">Our Team</h2>
            <p className="text-[#343b44]/70 text-sm leading-relaxed mb-5">
              The GreenYield team brings together a multidisciplinary group of professionals with{" "}
              <strong className="font-semibold text-[#343b44]">
                deep expertise in renewable energy, project finance, and sustainable infrastructure.
              </strong>{" "}
              With{" "}
              <strong className="font-semibold text-[#343b44]">
                over 70 years of combined experience and more than $450 million in funding managed
              </strong>
              , our diverse backgrounds include corporate strategy, investment banking, and
              development consulting.
            </p>
            <p className="text-[#343b44]/70 text-sm leading-relaxed">
              Our work spans globally, with a particular focus on emerging markets, advising on
              clean energy, carbon markets, and financial compliance. This unique blend of
              technical, strategic, and financial acumen allows us to deliver tailored, high-impact
              solutions across the energy transition landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managing Partners */}
      <section className="py-16 bg-[#f5f6f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-2xl font-semibold text-[#26a9b3] mb-8"
          >
            Managing Partners
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {managingPartners.map((p) => (
              <MemberCard key={p.name} {...p} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-16 bg-[#f5f6f8]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-2xl font-semibold text-[#26a9b3] mb-8"
          >
            Meet our Experts
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {experts.map((e) => (
              <MemberCard key={e.name} {...e} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
