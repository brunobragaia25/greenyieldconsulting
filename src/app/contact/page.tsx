import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact Us — Green Yield Consulting",
  description: "Get in touch with the Green Yield Consulting team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
