import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VehicleInventory from "@/components/VehicleInventory";
import FinancingCalculator from "@/components/FinancingCalculator";
import WhyUs from "@/components/WhyUs";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <VehicleInventory />
        <FinancingCalculator />
        <WhyUs />
        <BeforeAfterComparison />
        <LocationMap />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
