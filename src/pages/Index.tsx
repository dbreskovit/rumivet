import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import CertificateSection from "@/components/CertificateSection";
import RegistrationSection from "@/components/RegistrationSection";
import AboutRumivetSection from "@/components/AboutRumivetSection";
import ContactSection from "@/components/ContactSection";
import SponsorsSection from "@/components/SponsorsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <SpeakersSection />
      <CertificateSection />
      <RegistrationSection />
      <SponsorsSection/>
      <AboutRumivetSection />
      <ContactSection />
    </div>
  );
};

export default Index;
  