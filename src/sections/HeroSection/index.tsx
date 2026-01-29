import { HeroBackground } from "./components/HeroBackground";
import { HeroContent } from "./components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-yellow-100 overflow-hidden pt-24 md:pt-28">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};