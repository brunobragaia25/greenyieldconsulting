import Navbar from "@/components/layout/Navbar";
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
