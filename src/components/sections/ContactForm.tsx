"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1] as const;

const contacts = [
  {
    name: "Camilo Angarita",
    role: "Strategy & Business Development",
    email: "Camilo.angarita@greenyieldconsulting.com",
  },
  {
    name: "Niousha Roshani",
    role: "Sustainability & Capital Markets",
    email: "Niousha@greenyieldconsulting.com",
  },
  {
    name: "Andrea Toto Brocchi",
    role: "Energy Systems & Project Development",
    email: "Andrea@greenyieldconsulting.com",
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to backend / email service
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  return (
    <section className="min-h-screen bg-[#f5f6f8] px-6 py-24 flex items-start justify-center">
      <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-stretch">

        {/* Left — Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          className="bg-white rounded-[24px] shadow-[0_4px_40px_#0000000d] border border-[#efefef] px-10 py-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#343b44] mb-10 leading-tight">
            Get in touch{" "}
            <span className="text-[#26a9b3]">with us</span>
          </h1>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease }}
              className="flex flex-col items-center gap-4 py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#26a9b3]/10 flex items-center justify-center">
                <Icon icon="solar:check-circle-bold-duotone" className="text-[#26a9b3]" width={36} />
              </div>
              <p className="text-lg font-semibold text-[#343b44]">Message sent!</p>
              <p className="text-sm text-[#343b44]/55">
                Thank you for reaching out. We&apos;ll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#26a9b3]">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-5 py-3.5 rounded-full border border-[#e0e0e0] text-sm text-[#343b44] placeholder:text-[#343b44]/35 outline-none focus:border-[#26a9b3] focus:ring-2 focus:ring-[#26a9b3]/15 transition-all duration-200"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#26a9b3]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    required
                    className="w-full px-5 py-3.5 rounded-full border border-[#e0e0e0] text-sm text-[#343b44] placeholder:text-[#343b44]/35 outline-none focus:border-[#26a9b3] focus:ring-2 focus:ring-[#26a9b3]/15 transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-[#26a9b3]">Phone</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-5 py-3.5 rounded-full border border-[#e0e0e0] text-sm text-[#343b44] placeholder:text-[#343b44]/35 outline-none focus:border-[#26a9b3] focus:ring-2 focus:ring-[#26a9b3]/15 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#26a9b3]">Message</label>
                <textarea
                  placeholder="Put your message here"
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-[18px] border border-[#e0e0e0] text-sm text-[#343b44] placeholder:text-[#343b44]/35 outline-none focus:border-[#26a9b3] focus:ring-2 focus:ring-[#26a9b3]/15 transition-all duration-200 resize-y"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-full bg-[#26a9b3] hover:bg-[#22595d] text-white text-sm font-semibold transition-colors duration-200 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <Icon icon="solar:refresh-bold" className="animate-spin" width={16} />
                    Sending…
                  </>
                ) : (
                  "Send your message"
                )}
              </button>

            </form>
          )}
        </motion.div>

        {/* Right — Direct contacts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.12 }}
          className="flex flex-col gap-4 bg-white rounded-[24px] border border-[#efefef] shadow-[0_4px_40px_#0000000d] px-7 py-10 h-full"
        >
          <div className="mb-1">
            <p className="text-xs font-semibold text-[#26a9b3] uppercase tracking-widest mb-1">
              Direct contact
            </p>
            <p className="text-sm text-[#343b44]/55 leading-relaxed">
              Let&apos;s structure what&apos;s next.
            </p>
          </div>

          {contacts.map((c, i) => (
            <motion.a
              key={c.email}
              href={`mailto:${c.email}`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.2 + i * 0.08 }}
              className="group flex items-center gap-4 bg-white rounded-[18px] border border-[#efefef] p-5 shadow-[0_2px_16px_#0000000a] hover:border-[#26a9b3]/25 hover:shadow-[0_4px_24px_#0000000f] transition-all duration-200 flex-1"
            >
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#26a9b3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#26a9b3]/18 transition-colors">
                <Icon icon="solar:user-circle-bold-duotone" className="text-[#26a9b3]" width={24} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-[#343b44] leading-tight">{c.name}</p>
                <p className="text-[11px] font-semibold text-[#343b44]/40 uppercase tracking-wider mt-0.5 mb-2">
                  {c.role}
                </p>
                <span className="inline-flex items-start gap-1.5 text-xs text-[#26a9b3] group-hover:text-[#22595d] transition-colors">
                  <Icon icon="solar:letter-bold-duotone" width={13} className="shrink-0 mt-[1px]" />
                  <span>
                    {c.email.split("@")[0]}
                    <wbr />@{c.email.split("@")[1]}
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
