interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      color: "orange",
    },
    {
      href: "#about",
      label: "About",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "yellow",
    },
    {
      href: "#skills",
      label: "Skills",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "red",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "orange",
    },
    {
      href: "#experience",
      label: "Experience",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "yellow",
    },
  ];

  const colorClasses: Record<string, string> = {
    orange: "group-hover:bg-orange-100 group-hover:text-orange-600",
    yellow: "group-hover:bg-yellow-100 group-hover:text-yellow-600",
    red: "group-hover:bg-red-100 group-hover:text-red-600",
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
          onClick={onClose}
        ></div>
      )}

      <nav
        className={`fixed top-[88px] left-3 right-3 bg-white rounded-2xl border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px,rgba(0,0,0,0.35)_0px_12px_20px_-8px] transition-all duration-300 ease-in-out z-40 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-3">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className={`transition-all duration-300 ${
                isOpen ? `delay-[${index * 50}ms]` : ""
              }`}
            >
              <a
                href={item.href}
                onClick={handleClick}
                className={`group flex items-center gap-4 px-6 py-3.5 text-base font-medium text-zinc-600 hover:text-zinc-900 transition-all duration-300 rounded-lg mx-2 ${
                  colorClasses[item.color]
                }`}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-zinc-800 bg-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {item.label}
                </span>
                <svg
                  className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </li>
          ))}
          <li className="border-t-2 border-zinc-200 mt-3 pt-3 px-6 pb-3">
            <a
              href="#contact"
              onClick={handleClick}
              className="group flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-orange-500 text-white font-semibold rounded-full border-2 border-zinc-800 shadow-[rgba(0,0,0,0.95)_3px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.95)_5px_6px_0px_0px] hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Contact me</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
