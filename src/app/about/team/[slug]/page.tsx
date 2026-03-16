import { notFound } from "next/navigation";
import { getMember, getAllSlugs } from "@/lib/team";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamMemberPage from "@/components/sections/about/TeamMemberPage";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.name} — Green Yield Consulting`,
    description: `${member.name}, ${member.role} at Green Yield Consulting.`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return (
    <>
      <Navbar />
      <main>
        <TeamMemberPage member={member} />
      </main>
      <Footer />
    </>
  );
}
