import { useState } from 'react';
import { motion } from 'framer-motion';
import SecName from './SecName';
import { SiHyperskill } from 'react-icons/si';
import { Sparkles } from 'lucide-react';
import { SkillsPart } from './SkillsPart'; // Make sure this import is correct

const Categories = ['Skills', 'Certificates'];

export default function Skills() {
  const [active, setActive] = useState('Skills');

  const Compo = () => {
    if (active === 'Skills') {
      return (
        <motion.div 
          className='w-full'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SkillsPart />
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className="w-full h-96 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center space-y-4">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto" />
            <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
            <p className="text-slate-400">Certificates section is under construction</p>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div className="cursor-custom pt-8 self-start flex flex-col space-y-8 items-center md:w-full md:pl-0 w-full h-full relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Section Name */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <SecName secName="Skills & Certificates">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <SiHyperskill />
          </motion.div>
        </SecName>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="text-white space-y-8 self-start flex justify-center w-full flex-col items-start relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Category Tabs */}
        <div className="flex justify-start space-x-8 md:space-x-16 relative">
          {Categories.map((category, index) => (
            <motion.button
              key={category}
              className={`relative text-xl md:text-2xl font-semibold transition-all duration-300 pb-2
              ${active === category ? 'text-white' : 'text-slate-400 hover:text-slate-300'}`}
              onClick={() => setActive(category)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              
              {/* Active indicator line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                initial={{ width: 0 }}
                animate={{
                  width: active === category ? '100%' : '0%',
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Glow effect when active */}
              {active === category && (
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Hover effect line */}
              {active !== category && (
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-slate-600 rounded-full"
                  initial={{ width: '0%' }}
                  whileHover={{ width: '50%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}

          {/* Background sliding indicator */}
          <motion.div
            className="absolute bottom-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            animate={{
              x: active === 'Skills' ? 0 : 120, // Adjust these values based on your tab widths
              width: active === 'Skills' ? 80 : 120,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Content */}
        <div className="w-full">
          <Compo />
        </div>
      </motion.div>
    </div>
  );
}