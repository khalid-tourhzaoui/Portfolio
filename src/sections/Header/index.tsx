import { Logo } from "./components/Logo";
import { MobileNav } from "./components/MobileNav";
import { DesktopNav } from "./components/DesktopNav";
import { ContactButton } from "./components/ContactButton";

export const Header = () => {
  return (
    <header
      aria-label="Primary"
      className="fixed box-border caret-transparent w-[calc(100%-24px)] z-50 left-1/2 -translate-x-1/2 top-4 max-w-[1177.6px] md:top-6"
    >
      <div className="relative items-center bg-[linear-gradient(rgb(255,255,255)_0%,rgb(255,255,255)_30%,rgb(255,255,255)_100%)] shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px,rgba(0,0,0,0.35)_0px_16px_26px_-12px] box-border caret-transparent flex h-[72px] justify-between border-zinc-800 px-3 rounded-[3.35544e+07px] border-2 border-solid md:px-4 md:justify-center md:gap-8">
        <Logo />
        <MobileNav />
        <DesktopNav />
        <ContactButton />
      </div>
    </header>
  );
};