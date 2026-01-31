import { FooterBottom } from "./FooterBottom";
import { FooterCTA } from "./FooterCTA";
import { FooterStatus } from "./FooterStatus";

export const FooterContent = () => {
  return (
    <div className="box-border max-w-screen-xl mx-auto px-6 py-12 md:px-10 md:py-5">
      <FooterStatus />
      <FooterCTA />
      <FooterBottom />
    </div>
  );
};