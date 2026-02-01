import { FooterBackground } from "./components/FooterBackground";
import { FooterContent } from "./components/FooterContent";

export const Footer = () => {
  return (
    <footer className="relative box-border overflow-hidden bg-[#f5f0d8]">
      <FooterBackground />
      <FooterContent />
    </footer>
  );
};


