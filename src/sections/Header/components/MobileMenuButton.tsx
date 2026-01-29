type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center w-8 h-8 md:hidden z-10"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`bg-zinc-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
        }`}
      ></span>
      <span
        className={`bg-zinc-800 block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-zinc-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
        }`}
      ></span>
    </button>
  );
};
