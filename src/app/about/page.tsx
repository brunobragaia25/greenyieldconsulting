import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "About Us — Green Yield Consulting",
  description:
    "Meet the GreenYield team — a multidisciplinary group with deep expertise in renewable energy, project finance, and sustainable infrastructure.",
};
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutTeam from "@/components/sections/about/AboutTeam";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutMission />
        <AboutTeam />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
