import { ExperienceBackground } from "./components/ExperienceBackground";
import { ExperienceContent } from "./components/ExperienceContent";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative bg-emerald-800 -mt-0.5 rounded-b-[48px] sm:rounded-b-[64px] lg:rounded-b-[72px] flex items-center justify-center min-h-screen py-12 sm:py-16 md:py-10 lg:py-10 overflow-hidden">
      <ExperienceBackground />
      <ExperienceContent />
    </section>
  );
};