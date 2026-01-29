type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const MobileMenuButton = ({
  isOpen,
  onClick,
}: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col justify-center items-center w-10 h-10 md:hidden z-10 bg-white border-2 border-zinc-800 rounded-lg hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 hover:scale-110"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <span
        className={`bg-zinc-800 group-hover:bg-orange-500 block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
          isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
        }`}
      ></span>
      <span
        className={`bg-zinc-800 group-hover:bg-orange-500 block h-0.5 w-5 rounded-sm my-1 transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-zinc-800 group-hover:bg-orange-500 block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
          isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
        }`}
      ></span>
    </button>
  );
};
