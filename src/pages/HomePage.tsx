import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SkillsSection/>
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
};
