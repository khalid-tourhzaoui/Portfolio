export const DesktopNav = () => {
  return (
    <nav className="box-border caret-transparent hidden md:flex md:items-center">
      <ul className="text-base font-medium items-center box-border caret-transparent gap-x-6 flex tracking-[0.4px] leading-6 list-none pl-0 lg:gap-x-8 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#home"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            Home
          </a>
        </li>
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#about"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            About
          </a>
        </li>
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#skills"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            Skills
          </a>
        </li>
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#projects"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#experience"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            Experience
          </a>
        </li>
        <li className="text-base box-border caret-transparent tracking-[0.4px] leading-6 lg:text-lg lg:tracking-[0.45px] lg:leading-7">
          <a
            href="#testimonials"
            className="text-zinc-500 box-border caret-transparent text-nowrap hover:text-zinc-800 transition-colors"
          >
            Testimonials
          </a>
        </li>
      </ul>
    </nav>
  );
};