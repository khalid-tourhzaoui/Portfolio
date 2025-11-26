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
        className="hidden md:flex flex-col justify-between space-y-6 items-center rounded-3xl 
        md:fixed px-9 py-6 mt-24 mb-8 md:top-16 md:left-5 md:px-4 md:w-2/6 
        lg:w-1/3 lg:left-7 xl:w-1/4 xl:left-28 xl:py-8
        bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-slate-900/95 
        backdrop-blur-xl border border-white/10 shadow-2xl
        hover:border-purple-500/30 transition-all duration-500
        before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r 
        before:from-purple-600/0 before:via-purple-600/5 before:to-pink-600/0 
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 40,
        }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                scale: 0 
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100 + '%'],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Avatar section with glassmorphic container */}
        <motion.div
          className="relative group"
          style={{ y: avatarY, scale: avatarScale }}
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
        >
          {/* Glowing ring effect */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Rotating border */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-50 blur-sm" />
          </motion.div>

          {/* Avatar container */}
          <div className="relative rounded-full p-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm">
            <img 
              src={myLogo} 
              className="w-[18rem] rounded-full ring-2 ring-white/10 shadow-2xl relative z-10" 
              alt="Khalid Tourhzaoui" 
            />
          </div>

          {/* Orbiting sparkles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              animate={{
                rotate: 360,
                x: Math.cos((i * 90) * Math.PI / 180) * 100,
                y: Math.sin((i * 90) * Math.PI / 180) * 100,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            >
              <Sparkles className="w-3 h-3 text-purple-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact info with modern cards */}
        <motion.div
          className="w-full space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Email card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-4 border border-white/10 
            hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-400 font-medium">Email</p>
                <a 
                  href="mailto:khalidtourhzaoui@gmail.com"
                  className="text-white text-sm md:text-base truncate block hover:text-purple-300 transition-colors"
                >
                  khalidtourhzaoui@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-4 border border-white/10 
            hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-slate-400 font-medium">Location</p>
                <p className="text-white text-sm md:text-base">Tiflet, Morocco</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright with subtle animation */}
        {/* <motion.div
          className="text-slate-400 text-sm text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &copy; 2024 Khalid Tourhzaoui
          </motion.div>
          <span className="text-xs text-slate-500">All Rights Reserved</span>
        </motion.div> */}

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full flex justify-center"
        >
          <SocialMediaIcon text="white" />
        </motion.div>

        {/* CTA Button with enhanced effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6, type: "spring" }}
          className="relative w-full px-4"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <Link
            className="group relative block w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 
            p-[2px] hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500"
            to="/contactme"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"
              animate={{
                backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: isHovered ? Infinity : 0,
              }}
              style={{ backgroundSize: '200% 200%' }}
            />

            <div className="relative bg-slate-900 rounded-2xl px-8 py-4 group-hover:bg-transparent transition-all duration-300">
              <span className="relative z-10 font-bold uppercase text-white text-lg tracking-wider 
              flex items-center justify-center gap-2">
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

          {/* Pulsing glow effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl"
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