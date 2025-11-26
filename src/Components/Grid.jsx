import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { ExternalLink, Code2, Sparkles } from 'lucide-react';
import { useState } from 'react';

const BouncyCardsFeatures = ({ data }) => {
  return (
    <section className="w-full text-slate-800">
      <div className="grid grid-cols-12 gap-4">
        {data.map((item, index) => (
          <BounceCard
            key={item.id}
            className={`col-span-12 ${
              (index + Math.floor(index / 2)) % 2 === 0
                ? 'xl:col-span-7'
                : 'xl:col-span-5'
            }`}
            data={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const BounceCard = ({ className, data, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{
        scale: 0.98,
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative text-white h-56 cursor-pointer overflow-hidden rounded-2xl
         ${className}`}
    >
      {/* Glowing background effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 
        group-hover:opacity-40 transition-opacity duration-500"
        animate={isHovered ? {
          scale: [1, 1.05, 1],
        } : {}}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
        }}
      />

      {/* Main card container */}
      <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 
        rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden
        shadow-2xl">
        
        {/* Mesh pattern background */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Content wrapper */}
        <div className="relative h-full flex flex-col justify-between p-6">
          
          {/* Header section */}
          <div className="space-y-4 z-10">
            {/* Title with icon */}
            <div className="flex items-start justify-between gap-3">
              <motion.h1
                className="text-xl md:text-2xl font-bold uppercase leading-tight"
                animate={isHovered ? { x: 4 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {data.serviceName}
              </motion.h1>
              
              {/* Decorative icon */}
              <motion.div
                className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10"
                animate={isHovered ? { 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                } : { 
                  rotate: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.5,
                }}
              >
                <Code2 className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>

            {/* Tools/Technologies section */}
            <motion.div 
              className="flex flex-wrap gap-3"
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {data.tools.map((Tool, i) => (
                <motion.div
                  key={`${data.serviceName}-${i}`}
                  className="p-2 rounded-lg bg-gradient-to-br from-slate-800/80 to-slate-700/60 
                    border border-white/10 hover:border-purple-400/30 transition-all duration-300
                    hover:shadow-lg hover:shadow-purple-500/20"
                  whileHover={{ 
                    scale: 1.15,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                >
                  <Tool className="text-xl md:text-2xl text-slate-300 group-hover:text-white transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Action button */}
          {data.link && (
            <motion.div
              className="z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 cursor-pointer text-white text-sm md:text-base font-semibold 
                  bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-6 py-2.5 rounded-full 
                  border border-white/20 hover:scale-105 hover:border-white/40
                  hover:shadow-lg hover:shadow-purple-500/50
                  transition-all duration-300 group/btn"
              >
                <FaGithub className="text-lg md:text-xl group-hover/btn:rotate-12 transition-transform" />
                <span>View Project</span>
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          )}
        </div>

        {/* Project preview image */}
        <motion.div
          style={{
            backgroundImage: `url(${data.imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="absolute bottom-0 left-0 right-0 top-32 md:top-36 
            rounded-xl mx-4 mb-4 shadow-2xl border border-white/10
            transition-all duration-500
            group-hover:scale-[1.02] group-hover:shadow-purple-500/30"
          animate={isHovered ? {
            y: -8,
            rotateX: 2,
          } : {
            y: 0,
            rotateX: 0,
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-xl" />
          
          {/* Sparkle effects on hover */}
          {isHovered && (
            <>
              {[...Array(3)].map((_, i) => (
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
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </motion.div>
              ))}
            </>
          )}
        </motion.div>

        {/* Bottom gradient line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none">
          <motion.div
            className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"
            animate={isHovered ? { 
              rotate: 360,
              scale: [1, 1.2, 1]
            } : { rotate: 0 }}
            transition={{ 
              rotate: { duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" },
              scale: { duration: 2, repeat: isHovered ? Infinity : 0 }
            }}
          />
        </div>

        {/* Top shine effect */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          animate={isHovered ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />
      </div>
    </motion.div>
  );
};

export default BouncyCardsFeatures;