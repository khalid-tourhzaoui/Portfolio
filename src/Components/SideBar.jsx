import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import myLogo from "../assets/avatar.png";
import SocialMediaIcon from "./SocialMediaIcon";
import ScrollerVaul from "./ScrollerVaul";
import FooterImg from "../assets/FooterImg.png";
import { Mail, MapPin, Sparkles } from "lucide-react";

const Header = () => {
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effect for avatar
  const avatarY = useTransform(scrollY, [0, 300], [0, -50]);
  const avatarScale = useTransform(scrollY, [0, 300], [1, 0.9]);

  useEffect(() => {
    const checkVisibility = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setIsDivVisible(rect.top + rect.height === 0);
      }
    };

    checkVisibility();
    window.addEventListener("resize", checkVisibility);
    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("resize", checkVisibility);
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={divRef}
        className="hidden md:flex flex-col justify-between space-y-4 items-center rounded-3xl 
        md:fixed px-9 py-6 mt-24 mb-8 md:top-1 md:left-5 md:px-4 md:w-2/6 
        lg:w-1/3 lg:left-7 xl:w-1/4 xl:left-28 xl:py-8
        bg-white shadow-2xl border border-orange-100
        hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-500"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 40,
        }}
      >
        {/* Floating particles - Orange theme */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                scale: 0,
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100 + "%"],
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Avatar section */}
        <motion.div
          className="relative group"
          style={{ y: avatarY, scale: avatarScale }}
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
        >
          {/* Glowing ring effect - Orange/Red gradient */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Rotating border - Orange/Amber/Red */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-red-600 opacity-60 blur-sm" />
          </motion.div>

          {/* Avatar container */}
          <div className="relative rounded-full p-1 bg-gradient-to-br from-orange-500/20 to-red-500/20">
            <img
              src={myLogo}
              className="w-[18rem] rounded-full ring-2 ring-orange-200 shadow-2xl relative z-10"
              alt="Khalid Tourhzaoui"
            />
          </div>

          {/* Orbiting sparkles - Orange */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              animate={{
                rotate: 360,
                x: Math.cos((i * 90 * Math.PI) / 180) * 100,
                y: Math.sin((i * 90 * Math.PI) / 180) * 100,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            >
              <Sparkles className="w-3 h-3 text-orange-600" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact info cards - White background with orange accents */}
        <motion.div
          className="w-full space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Email card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-orange-50 p-4 border border-orange-200 
            hover:bg-orange-100 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-3">
              <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600 font-medium">Email</p>
                <a
                  href="mailto:khalidtourhzaoui@gmail.com"
                  className="text-gray-900 text-sm md:text-base truncate block hover:text-orange-600 transition-colors"
                >
                  khalidtourhzaoui@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-orange-50 p-4 border border-orange-200 
            hover:bg-orange-100 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600 font-medium">Location</p>
                <p className="text-gray-900 text-sm md:text-base">
                  Tiflet, Morocco
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full flex justify-center"
        >
          <SocialMediaIcon text="gray-800" />
        </motion.div>

        {/* CTA Button - Orange gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
          className="relative w-full px-4"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link
            className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 
            p-[2px] hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-500"
            to="/contactme"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-500 to-red-600"
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 50%", "100% 50%", "0% 50%"]
                  : "0% 50%",
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: isHovered ? Infinity : 0,
              }}
              style={{ backgroundSize: "200% 200%" }}
            />

            <div className="relative bg-white rounded-2xl px-8 py-4 group-hover:bg-transparent transition-all duration-300">
              <span
                className="relative z-10 font-bold uppercase text-orange-600 group-hover:text-white text-lg tracking-wider 
              flex items-center justify-center gap-2 transition-colors duration-300"
              >
                Contact Me!
                <motion.span
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </div>
          </Link>

          {/* Pulsing glow effect - Orange */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-orange-500/30 blur-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
      </motion.div>

      {/* Footer scroller */}
      {isDivVisible && (
        <motion.div
          className="fixed flex justify-center z-30 bottom-0 w-full text-center left-1/2 transform -translate-x-1/2 pb-4 h-36 
          pt-20 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${FooterImg})`,
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ScrollerVaul />
        </motion.div>
      )}
    </>
  );
};

export default Header;
