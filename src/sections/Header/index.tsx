import { useState } from "react";
import { Logo } from "./components/Logo";
import { MobileMenuButton } from "./components/MobileMenuButton";
import { MobileNav } from "./components/MobileNav";
import { DesktopNav } from "./components/DesktopNav";
import { ContactButton } from "./components/ContactButton";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      aria-label="Primary"
      className="fixed w-[calc(100%-24px)] max-w-[1200px] left-1/2 -translate-x-1/2 top-3 sm:top-4 md:top-6 z-50 px-3 sm:px-0"
    >
      <div className="relative flex items-center justify-between bg-white shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px,rgba(0,0,0,0.35)_0px_12px_20px_-8px] sm:shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px,rgba(0,0,0,0.35)_0px_16px_26px_-12px] h-16 sm:h-[72px] px-3 sm:px-4 md:px-6 rounded-full border-2 border-zinc-800">
        <Logo />

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <DesktopNav />
        </div>

        <div className="md:hidden">
          <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>

        <ContactButton />
      </div>

      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};