"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const clients = [
  { label: "Project Owner",      href: "/services/project-owner",        icon: "solar:sun-2-bold-duotone" },
  { label: "EPC",                href: "/services/epc",                  icon: "solar:sledgehammer-bold-duotone" },
  { label: "Off-Taker",          href: "/services/off-taker",            icon: "solar:buildings-bold-duotone" },
  { label: "Financiers & Investors", href: "/services/financiers-investors", icon: "solar:wallet-bold-duotone" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease, delay: 0.1 + i * 0.12 },
  }),
};

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease }}
          className="text-[32px] font-semibold text-[#26a9b3] text-center mb-12"
        >
          Our Clients
        </motion.h2>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.label}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex-1 flex flex-col items-center gap-6 bg-[#f8f9fb] rounded-[20px] px-8 py-10 border border-[#f0f0f0]"
            >
              <div className="w-16 h-16 rounded-[14px] bg-white shadow-[0_4px_20px_#0000000d] flex items-center justify-center">
                <Icon icon={client.icon} className="text-[#26a9b3]" width={36} />
              </div>
              <span className="text-base font-medium text-[#343b44]/70 text-center">{client.label}</span>
              <Link
                href={client.href}
                className="mt-auto px-7 py-2.5 rounded-full bg-[#26a9b3] text-white text-sm font-semibold hover:bg-[#22595d] transition-colors duration-200"
              >
                Discover More
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="text-center text-[#343b44]/60 text-base mt-16 max-w-xl mx-auto leading-relaxed"
        >
          In a fragmented landscape,{" "}
          <strong className="font-semibold text-[#22595d]">
            connection is the catalyst for transformation.
          </strong>
        </motion.p>

      </div>
    </section>
  );
}
