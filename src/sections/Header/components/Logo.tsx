export const Logo = () => {
  return (
    <a
      href="#home"
      aria-label="Home"
      className="group flex items-center shrink-0 z-10 relative"
    >
      <div className="relative">
        <span className="flex items-center justify-center bg-white h-10 w-10 sm:h-12 sm:w-12 border-zinc-800 rounded-full border-4 group-hover:border-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          <span className="bg-orange-500 block h-[55%] w-[55%] rounded-full group-hover:bg-yellow-400 transition-colors duration-300 group-hover:scale-110"></span>
        </span>

        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-pulse"></span>
      </div>
    </a>
  );
};
