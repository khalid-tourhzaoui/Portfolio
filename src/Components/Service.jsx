import { motion } from 'framer-motion';
import ServiceCompo from './ServiceCompo';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';
import { Sparkles, Target } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Service() {
  const title = "My Specialities";
  const words = title.split(' ');

  return (
    <AnimatePresence mode="wait">
      <Transition key={1} />
      <div
        key={2}
        className="cursor-custom relative pt-28 md:pt-32 flex flex-col space-y-5 mt-8 md:mt-0 items-center 
        md:w-4/5 lg:w-3/4 xl:w-3/5 pl-6 pr-4 md:pl-0 w-full h-full md:h-full md:pb-12 pb-10 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 -left-32 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-2/3 -right-32 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orange gradient mesh */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ea580c 1px, transparent 1px),
                linear-gradient(135deg, #ea580c 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Floating sparkles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 200 + '%'],
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Sparkles className="w-3 h-3 text-orange-400" />
            </motion.div>
          ))}

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ea580c 1px, transparent 1px),
                linear-gradient(to bottom, #ea580c 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Enhanced title with word-by-word animation */}
        <div className="text-white self-start relative z-10 w-full">
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-tight"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <div className="flex flex-wrap gap-x-3 gap-y-1 items-center">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-orange-500 mr-2" />
              
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className={`inline-block ${
                    word === 'Specialities' 
                      ? 'bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: wordIndex * 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={word === 'Specialities' ? {
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  } : {}}
                >
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      custom={letterIndex}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{
                        y: -5,
                        color: word === 'Specialities' ? '#f59e0b' : '#ea580c',
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              ))}
            </div>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 rounded-full mt-3"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '30%', opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Glowing effect behind text */}
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-red-600/20 blur-2xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Description text */}
        <motion.p
          className="text-orange-100 self-start text-sm md:text-base max-w-2xl leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Explore my core expertise areas where I combine technical skills with creative solutions 
          to deliver exceptional results. Each service is tailored to meet specific needs with 
          precision and innovation.
        </motion.p>

        {/* Service cards container */}
        <motion.div 
          className="w-full relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <ServiceCompo />
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-1/4 right-8 w-10 h-10 border-2 border-orange-400/20 rounded-lg"
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-8 w-6 h-6 border-2 border-red-400/20 rounded-full"
          animate={{ 
            rotate: -360,
            y: [0, 20, 0]
          }}
          transition={{ 
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Stats badge */}
        <motion.div
          className="absolute bottom-8 right-8 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 via-amber-100 to-red-100 border border-orange-200 shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-800">
              4 Specialities • 100% Quality
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}