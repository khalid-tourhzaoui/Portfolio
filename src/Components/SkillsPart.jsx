// ==================== SkillsPart.jsx ====================
import { FaHtml5, FaReact, FaJava, FaPython, FaWindows, FaDocker, FaPhp, FaLaravel } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiOracle, SiMysql, SiFastapi, SiShadcnui, SiPostman, SiMongodb, SiUml, SiSpringboot } from 'react-icons/si';
import { DiGit, DiGithubBadge, DiLinux, DiBootstrap } from 'react-icons/di';
import { motion } from 'framer-motion';
import CIcon from './Ccompo';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { useState } from 'react';

const SkillIcon = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 200,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glow effect - Orange */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-40"
        animate={isHovered ? {
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
        bg-white backdrop-blur-xl
        rounded-2xl border border-orange-200 
        group-hover:border-orange-500 transition-all duration-300
        shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/20"
        whileHover={{
          scale: 1.15,
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Inner glow - Orange */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 
        group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-300" />
        
        <skill.icon className={`relative z-10 ${
          skill.name !== 'Postman' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
        } text-gray-700 group-hover:text-orange-600 transition-colors duration-300`} />

        {/* Tooltip - Orange */}
        <motion.div
          className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100
          pointer-events-none transition-opacity duration-200"
          initial={{ y: 10 }}
          whileHover={{ y: 0 }}
        >
          <div className="relative">
            <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-600 to-red-600
            text-white text-sm font-semibold whitespace-nowrap shadow-xl">
              {skill.name}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0 
            border-l-4 border-l-transparent border-r-4 border-r-transparent 
            border-t-4 border-t-orange-600" />
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting particle - Orange */}
      {isHovered && (
        <motion.div
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-orange-600 rounded-full"
          animate={{
            rotate: 360,
            x: Math.cos(0) * 40,
            y: Math.sin(0) * 40,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Background decoration - Orange */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-orange-600/5 to-red-600/5 rounded-3xl blur-xl
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative backdrop-blur-sm bg-gradient-to-br from-orange-50/30 to-white/20
      rounded-3xl p-6 md:p-8 border border-orange-100 group-hover:border-orange-300 transition-all duration-500">
        
        {/* Category Title */}
        <motion.div
          className="flex items-center space-x-3 mb-6"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-red-600 rounded-full" />
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">
            {category}
          </h3>
          <motion.div
            className="h-px flex-1 bg-gradient-to-r from-orange-600/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {skills.map((skill, idx) => (
            <SkillIcon key={idx} skill={skill} index={idx} />
          ))}
        </div>

        {/* Corner decoration - Orange */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-3xl pointer-events-none">
          <motion.div
            className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-orange-600/10 to-red-600/10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export function SkillsPart() {
  return (
    <div className="space-y-8">
      <SkillCategory
        index={0}
        category="Programming Languages"
        skills={[
          { icon: FaPhp, name: 'PHP' },
          { icon: IoLogoJavascript, name: 'JavaScript' },
          { icon: FaJava, name: 'Java' },
          { icon: FaPython, name: 'Python' },
          { icon: CIcon, name: 'C' },
          { icon: FaHtml5, name: 'HTML5' },
          { icon: IoLogoCss3, name: 'CSS3' },
        ]}
      />
      
      <SkillCategory
        index={1}
        category="Frameworks and Libraries"
        skills={[
          { icon: FaLaravel, name: 'Laravel' },
          { icon: FaReact, name: 'React' },
          { icon: SiSpringboot, name: 'SpringBoot' },
          { icon: TbBrandFramerMotion, name: 'Framer Motion' },
          { icon: SiFastapi, name: 'FastAPI' },
          { icon: RiTailwindCssFill, name: 'Tailwind CSS' },
          { icon: SiShadcnui, name: 'Shadcn UI' },
          { icon: DiBootstrap, name: 'Bootstrap' },
        ]}
      />
      
      <SkillCategory
        index={2}
        category="Databases (SQL / NoSQL)"
        skills={[
          { icon: SiOracle, name: 'Oracle' },
          { icon: SiMysql, name: 'MySQL' },
          { icon: SiMongodb, name: 'MongoDB' },
        ]}
      />
      
      <SkillCategory
        index={3}
        category="Operating Systems"
        skills={[
          { icon: DiLinux, name: 'Linux' },
          { icon: FaWindows, name: 'Windows' },
        ]}
      />
      
      <SkillCategory
        index={4}
        category="Version Control & Tools"
        skills={[
          { icon: DiGit, name: 'Git' },
          { icon: DiGithubBadge, name: 'GitHub' },
          { icon: SiPostman, name: 'Postman' },
          { icon: FaDocker, name: 'Docker' },
          { icon: SiUml, name: 'UML' },
        ]}
      />
    </div>
  );
}