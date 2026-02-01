import { AboutBackground } from "./components/AboutBackground";
import { AboutContent } from "./components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="relative bg-emerald-800 box-border caret-transparent min-h-screen overflow-hidden rounded-b-[48px] sm:rounded-b-[64px] lg:rounded-b-[72px] -mt-0.5">
      <AboutBackground variant="variant1" />
      <AboutBackground variant="variant2" />
      <AboutContent />
    </section>
  );
};