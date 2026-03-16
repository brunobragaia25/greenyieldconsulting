import { notFound } from "next/navigation";
import { getService, getAllServiceSlugs } from "@/lib/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicePage from "@/components/sections/services/ServicePage";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.label} — Green Yield Consulting`,
    description: service.tagline,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />
      <main>
        <ServicePage service={service} />
      </main>
      <Footer />
    </>
  );
}
