import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavElements } from './NavElements.jsx';
import ScrollButton from './ScrollButton.jsx';
import BurgerMenu from './BurgerMenu';
import { motion, AnimatePresence } from 'framer-motion';

export default function Menu() {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mappedDataDesktop = NavElements.map((elem) => {
    const isActive = location.pathname === elem.path;
    
    return (
      <Link
        key={elem.id}
        to={elem.path}
        className="relative group"
      >
        <motion.div
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
            ${isActive 
              ? 'text-purple-400' 
              : 'text-slate-300 hover:text-white'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Icon */}
          <motion.div 
            className="text-xl"
            animate={isActive ? { rotate: [0, -10, 10, -10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {elem.icon}
          </motion.div>
          
          {/* Name */}
          <span className="font-medium capitalize text-sm md:text-base">
            {elem.name}
          </span>

          {/* Active indicator line */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>

          {/* Hover background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          />
        </motion.div>
      </Link>
    );
  });

  const mappedDataMobile = NavElements.map((elem) => {
    const isActive = location.pathname === elem.path;
    
    return (
      <div
        className="group relative flex"
        onClick={() => setActive(false)}
        key={elem.id}
      >
        <Link
          className={`${
            isActive
              ? 'text-purple-400'
              : 'text-slate-300 hover:text-purple-400 transition-all duration-300'
          } flex items-center gap-3 text-xl py-2`}
          to={elem.path}
        >
          {elem.icon}
          <span className="capitalize font-medium">{elem.name}</span>
        </Link>
      </div>
    );
  });

  return (
    <>
      <ScrollButton />
      
      {/* Desktop Menu - Positionné à droite pour ne pas chevaucher le logo */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`hidden md:block fixed top-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'py-3 pr-6' : 'py-5 pr-6'}`}
      >
        <motion.nav
          className={`flex items-center justify-center gap-2 
            backdrop-blur-xl bg-slate-900/80 rounded-2xl 
            border transition-all duration-300
            ${scrolled 
              ? 'border-white/10 shadow-lg shadow-purple-500/10' 
              : 'border-white/5'
            }`}
          style={{
            boxShadow: scrolled ? '0 8px 32px rgba(139, 92, 246, 0.15)' : 'none'
          }}
        >
          {/* Navigation Links */}
          <div className="flex items-center gap-1 px-2 py-2">
            {mappedDataDesktop}
          </div>

          {/* Decorative element */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl" />
        </motion.nav>
      </motion.div>

      {/* Mobile Menu - Burger */}
      <div className="md:hidden">
        <BurgerMenu active={active} setActive={() => setActive(pv => !pv)}>
          {mappedDataMobile}
        </BurgerMenu>
      </div>
    </>
  );
}