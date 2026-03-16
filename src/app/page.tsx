import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Green Yield Consulting — Driving Progress Through Smart Connections",
  description:
    "Green Yield connects capital, projects, and people across energy and sustainability. We align key stakeholders to accelerate investable solutions.",
};
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
