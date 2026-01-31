// ExperienceSection.tsx
import { ExperienceBackground } from "./components/ExperienceBackground";
import { ExperienceContent } from "./components/ExperienceContent";

export const ExperienceSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-10 lg:py-10 overflow-hidden">
      <ExperienceBackground />
      <ExperienceContent />
    </section>
  );
};