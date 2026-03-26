import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChairmanSection from "@/components/ChairmanSection";
import LeadershipSection from "@/components/LeadershipSection";
import ScientificCommitteeSection from "@/components/ScientificCommitteeSection";
import SpeakersSection from "@/components/SpeakersSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ChairmanSection />
      <LeadershipSection />
      <ScientificCommitteeSection />
      <SpeakersSection />
      <GallerySection />
      <SponsorsSection />
      <Footer />
    </div>
  );
};

export default Index;
