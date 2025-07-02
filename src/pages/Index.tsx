import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Experiences from "@/components/Experiences";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Accommodations />
      <Experiences />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
