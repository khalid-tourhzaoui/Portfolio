import { FooterBackground } from "./components/FooterBackground";
import { FooterContent } from "./components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative box-border overflow-hidden mt-24 bg-[#f5f0d8]">
      <FooterBackground />
      <FooterContent />
    </footer>
  );
};


