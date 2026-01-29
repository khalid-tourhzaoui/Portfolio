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
      className="relative text-white text-sm font-semibold items-center bg-orange-500 shadow-[rgba(0,0,0,0.95)_3px_6px_0px_0px] box-border caret-transparent hidden shrink-0 h-11 justify-center leading-5 px-[18px] rounded-[3.35544e+07px] md:flex md:text-base md:absolute md:right-3 lg:text-lg lg:leading-7 hover:bg-orange-600 transition-colors"
    >
      Contact me
    </button>
  );
};