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
      className="hidden md:flex items-center justify-center text-white text-sm lg:text-base font-semibold bg-orange-500 shadow-[rgba(0,0,0,0.95)_3px_6px_0px_0px] h-10 lg:h-11 px-4 lg:px-5 rounded-full hover:bg-orange-600 transition-colors shrink-0"
    >
      Contact me
    </button>
  );
};