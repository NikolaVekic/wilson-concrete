import Hero from "../components/Hero";
import ImageCarousel from "../components/ImageCarousel";
import PeopleFirst from "../components/PeopleFirst";
import MaterialsFinishes from "../components/MaterialsFinishes";
import ContactStrip from "../components/ContactStrip";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <Hero
          navBtn={{
            label: "Get a free quote",
            to: "/quote",
            variant: "primary",
          }}
          heading={`From rough to\nremarkable!`}
          subtext="Durable, beautiful concrete solutions for homes and businesses — designed to last and crafted with care."
          primaryBtn={{ label: "Get a free quote", href: "/quote" }}
          secondaryBtn={{ label: "Our services", href: "#services" }}
        />
      </div>
      <ImageCarousel />
      <PeopleFirst />
      <ServicesSection />
      <MaterialsFinishes />
      <ContactStrip />
      <Footer />
    </main>
  );
}
