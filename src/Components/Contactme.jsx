import SecName from './SecName';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Sparkles, Send } from 'lucide-react';
import Form from './Form';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';
import { useRef } from 'react';

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
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const title = "Let's Work Together";
  const words = title.split(' ');

  return (
    <AnimatePresence mode="wait">
      <Transition key={1} />
      <div 
        key={2} 
        ref={containerRef}
        className="cursor-custom relative pt-8 flex flex-col space-y-10 mt-8 md:mt-0 items-center 
        md:w-3/5 pl-10 pr-5 md:pl-0 w-full h-full md:h-screen md:pt-20 md:pb-0 pb-12 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
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

          {/* Floating sparkles */}
          {[...Array(12)].map((_, i) => (
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
                opacity: [0, 0.6, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
          ))}

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Section name with enhanced styling */}
        <motion.div 
          className="self-start mt-0 flex justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SecName secName="Contact Me">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Mail className='text-xl' />
            </motion.div>
          </SecName>
        </motion.div>

        {/* Enhanced title with word-by-word animation */}
        <div className="text-white self-start relative z-10">
          <motion.div
            className="text-xl md:text-2xl lg:text-4xl font-bold uppercase leading-tight"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  className={`inline-block ${
                    word === 'Together' 
                      ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'
                      : ''
                  }`}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: wordIndex * 0.2,
                    duration: 0.6,
                    ease: [0.25, 0.4, 0.25, 1],
                  }}
                  whileHover={word === 'Together' ? {
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
                        color: word === 'Together' ? '#a855f7' : '#fff',
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
              className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full mt-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Glowing effect behind text */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl -z-10"
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

        {/* Form container with glassmorphism */}
        <motion.div 
          className="flex flex-col self-start w-full md:w-5/6 justify-start relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {/* Decorative elements around form */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-purple-500/20 rounded-2xl -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-pink-500/20 rounded-2xl -z-10" />
          
          {/* Form wrapper with enhanced styling */}
          <div className="relative">
            {/* Glowing border effect */}
            <motion.div
              className="absolute -inset-[2px] bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {/* Form container */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 
            rounded-3xl p-8 border border-white/10 shadow-2xl">
              <Form />
              
              {/* Send icon decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 
                rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Send className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Parallax floating elements */}
        <motion.div
          className="absolute top-1/3 right-10 w-16 h-16 border-2 border-purple-400/30 rounded-xl"
          style={{ y }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-10 w-12 h-12 border-2 border-pink-400/30 rounded-full"
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </AnimatePresence>
  );
}