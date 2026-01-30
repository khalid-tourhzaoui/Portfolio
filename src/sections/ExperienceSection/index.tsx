// ExperienceSection.tsx
import { ExperienceBackground } from "./components/ExperienceBackground";
import { ExperienceContent } from "./components/ExperienceContent";

export const ExperienceSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <ExperienceBackground />
      <ExperienceContent />
    </section>
  );
};