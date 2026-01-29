export const MobileNav = () => {
  return (
    <nav className="box-border caret-transparent flex items-center md:hidden">
      <ul className="text-xs font-medium items-center box-border caret-transparent gap-x-3 flex tracking-[0.3px] leading-4 list-none pl-0 sm:gap-x-5">
        <li className="text-xs box-border caret-transparent tracking-[0.3px] leading-4">
          <a
            href="#home"
            className="text-zinc-500 text-xs box-border caret-transparent tracking-[0.3px] leading-4 text-nowrap hover:text-zinc-800 transition-colors"
          >
            Home
          </a>
        </li>
        <li className="text-xs box-border caret-transparent tracking-[0.3px] leading-4">
          <a
            href="#projects"
            className="text-zinc-500 text-xs box-border caret-transparent tracking-[0.3px] leading-4 text-nowrap hover:text-zinc-800 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="text-xs box-border caret-transparent tracking-[0.3px] leading-4">
          <a
            href="#contact"
            className="text-zinc-500 text-xs box-border caret-transparent tracking-[0.3px] leading-4 text-nowrap hover:text-zinc-800 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};