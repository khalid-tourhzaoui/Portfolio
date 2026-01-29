export const DesktopNav = () => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-sm lg:text-base font-medium text-zinc-500 hover:text-zinc-800 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
