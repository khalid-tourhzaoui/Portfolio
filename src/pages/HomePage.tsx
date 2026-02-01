import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection/>
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection/>
    </>
  );
};
