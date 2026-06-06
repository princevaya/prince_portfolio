import { BackgroundFx } from "@/components/BackgroundFx";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { TechHubSection } from "@/components/sections/TechHubSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#05060a] text-white">
      <BackgroundFx />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <TechHubSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
