import { SkillsContent } from "./components/SkillsContent";

export const SkillsSection = () => {
  return (
    <section className="relative bg-emerald-800 min-h-screen overflow-hidden -mt-0.5 rounded-b-[48px] sm:rounded-b-[64px] lg:rounded-b-[72px]">
      <SkillsContent />
    </section>
  );
};