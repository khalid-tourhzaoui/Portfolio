import { useNavigate, useLocation } from "react-router-dom";

export const ContactButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/contact");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group hidden md:flex items-center justify-center gap-2 text-white text-sm lg:text-base font-semibold bg-orange-500 border-2 border-zinc-800 shadow-[rgba(0,0,0,0.95)_3px_6px_0px_0px] h-10 lg:h-11 px-4 lg:px-6 rounded-full hover:bg-orange-600 hover:shadow-[rgba(0,0,0,0.95)_5px_8px_0px_0px] transition-all duration-300 hover:scale-105 shrink-0"
    >
      <svg
        className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300"
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
      <span className="group-hover:translate-x-0.5 transition-transform duration-300">
        Contact me
      </span>
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
    </button>
  );
};
