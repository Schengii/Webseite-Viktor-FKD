import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VehicleInventory from "@/components/VehicleInventory";
import WhyUs from "@/components/WhyUs";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <VehicleInventory />
        <WhyUs />
        <BeforeAfterComparison />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
