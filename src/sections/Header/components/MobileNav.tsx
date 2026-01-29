interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  const handleClick = (e:any) => {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <nav
        className={`fixed top-[88px] left-3 right-3 bg-white rounded-2xl border-2 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px,rgba(0,0,0,0.35)_0px_8px_16px_-6px] transition-all duration-300 ease-in-out z-40 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleClick}
                className="block px-6 py-3 text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="border-t border-zinc-200 mt-2 pt-2 px-6 pb-3">
            <a
              href="#contact"
              onClick={handleClick}
              className="block w-full text-center py-3 px-6 bg-orange-500 text-white font-semibold rounded-full shadow-[rgba(0,0,0,0.95)_2px_4px_0px_0px] hover:bg-orange-600 transition-colors"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
