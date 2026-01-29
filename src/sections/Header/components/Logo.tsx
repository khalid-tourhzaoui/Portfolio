export const Logo = () => {
  return (
    <a
      href="#home"
      aria-label="Home"
      className="flex items-center shrink-0 z-10"
    >
      <span className="flex items-center justify-center bg-yellow-100 h-10 w-10 sm:h-12 sm:w-12 border-zinc-800 rounded-full border-2 sm:border-3">
        <span className="bg-orange-500 block h-[55%] w-[55%] rounded-full"></span>
      </span>
    </a>
  );
};