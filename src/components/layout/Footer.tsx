"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Project Owner", href: "/services/project-owner" },
  { label: "EPC", href: "/services/epc" },
  { label: "Off Taker", href: "/services/off-taker" },
  { label: "Financiers & Investors", href: "/services/carbon-credits" },
];

export default function Footer() {
  return (
    <footer className="bg-[#343b44]">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 md:gap-8"
        >
          {/* Left — Brand */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <Link href="/" className="flex items-center gap-2.5 w-fit">
                <Image src="/logo-footer.png" alt="GreenYield" width={120} height={32} className="h-auto" />
              </Link>

              <div className="flex flex-col gap-0.5">
                <span className="text-[#26a9b3] font-semibold text-[28px] leading-none">Driving Progress</span>
                <span className="text-[#26a9b3] font-semibold text-[28px] leading-none">Through Smart</span>
                <span className="text-[#26a9b3] font-semibold text-[28px] leading-none">Connections.</span>
              </div>
            </div>

            <p className="text-white/40 text-[12px] leading-relaxed max-w-[300px]">
              We connect capital, projects, and partners across the energy and sustainability value chain — structuring transactions that convert pipelines into de-risked, investable assets with durable returns and measurable impact.
            </p>
          </div>

          {/* Center — Nav */}
          <div className="flex flex-col justify-between">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Navigation</p>
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm py-1 transition-colors duration-200 ${
                    i === 0 ? "text-[#26a9b3] font-medium" : "text-white/50 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Follow Us</p>
            <Link
              href="https://www.linkedin.com/company/greenyieldco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={18} height={18} />
            </Link>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>© {new Date().getFullYear()} Green Yield Consulting. All rights reserved.</span>
          <Link
            href="https://www.devzdesign.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-white/25 text-[10px]">Developed by</span>
            <Image src="/icons/devz-logo.svg" alt="DevzDesign" width={90} height={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
