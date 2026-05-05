"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icon } from "@iconify/react";

const services = [
  {
    label: "Project Owner",
    href: "/services/project-owner",
    icon: "solar:sun-2-bold-duotone",
    tagline: "Structure and finance your renewable energy pipeline",
  },
  {
    label: "EPC",
    href: "/services/epc",
    icon: "solar:sledgehammer-bold-duotone",
    tagline: "Connect your capabilities to the right projects",
  },
  {
    label: "Off-Taker",
    href: "/services/off-taker",
    icon: "solar:buildings-bold-duotone",
    tagline: "Source clean energy with confidence and structure",
  },
  {
    label: "Financiers & Investors",
    href: "/services/carbon-credits",
    icon: "solar:wallet-bold-duotone",
    tagline: "Unlock the value of your sustainability commitments",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={() => setDropdownOpen(false)}
      className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1280px] bg-white/60 backdrop-blur-xl rounded-full shadow-[0_8px_32px_#00000014] border border-white/80"
          : "top-0 left-0 right-0 bg-white border-b border-[#f5f5f5]"
      }`}
    >
      <div className={`max-w-[1280px] mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-[20px]" : "h-[72px]"}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Icon icon="solar:leaf-bold-duotone" className="text-[#26a9b3]" width={30} height={30} />
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[#343b44] text-[17px] tracking-tight">
              Green<span className="text-[#26a9b3]">Yield</span>
            </span>
            <span className="text-[8.5px] font-semibold text-[#343b44]/45 tracking-[0.2em] uppercase mt-0.5">
              Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-[#343b44]/70 hover:text-[#343b44] transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-sm text-[#343b44]/70 hover:text-[#343b44] transition-colors duration-200">
            About Us
          </Link>

          {/* Services trigger */}
          <button
            onMouseEnter={() => setDropdownOpen(true)}
            className="flex items-center gap-1 text-sm text-[#343b44]/70 hover:text-[#343b44] transition-colors duration-200 cursor-pointer"
          >
            Services
            <Icon
              icon="solar:alt-arrow-down-bold"
              width={14}
              className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="text-sm px-6 py-3 rounded-full bg-[#22595d] text-white hover:bg-[#26a9b3] transition-colors duration-200 font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-[#343b44]" />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-0.5 bg-[#343b44]" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-5 h-0.5 bg-[#343b44]" />
        </button>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute top-full left-0 right-0 bg-white border-t border-[#f0f0f0] shadow-[0_16px_48px_#00000014] rounded-[20px] mt-2"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-[220px_1fr] gap-10">

              {/* Left — intro panel */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#26a9b3] uppercase tracking-widest mb-5">
                    Our Services
                  </p>
                  <p className="text-sm text-[#343b44]/60 leading-relaxed">
                    We connect capital, projects, and partners across the energy and sustainability value chain.
                  </p>
                </div>
              </div>

              {/* Right — service cards grid */}
              <div className="grid grid-cols-2 gap-3">
                {services.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="group flex items-start gap-4 p-4 rounded-[14px] hover:bg-[#f5fdfc] border border-transparent hover:border-[#26a9b3]/15 transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-[10px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0 group-hover:bg-[#26a9b3]/20 transition-colors">
                        <Icon icon={item.icon} className="text-[#26a9b3]" width={22} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#343b44] group-hover:text-[#26a9b3] transition-colors mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-xs text-[#343b44]/50 leading-snug">{item.tagline}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#f5f5f5] overflow-hidden"
          >
            <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-[#343b44]/70 py-2">Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-[#343b44]/70 py-2">About Us</Link>
              <div className="text-xs font-semibold text-[#343b44]/30 uppercase tracking-widest mt-2 mb-1">Services</div>
              {services.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-[#343b44]/70"
                >
                  <div className="w-7 h-7 rounded-[6px] bg-[#26a9b3]/10 flex items-center justify-center shrink-0">
                    <Icon icon={s.icon} className="text-[#26a9b3]" width={16} />
                  </div>
                  {s.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm px-6 py-3 rounded-full bg-[#22595d] text-white text-center font-semibold mt-3"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
