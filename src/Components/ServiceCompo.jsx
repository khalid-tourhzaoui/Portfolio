import { Code2, Server, Lightbulb, Database } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    serviceName: 'Web Development',
    description:
      'Transforming ideas into engaging digital experiences. From intuitive interfaces to robust functionalities, each project is designed to captivate and align with your business goals.',
    icon: Code2,
    gradient: 'from-purple-600 to-blue-600',
    glowColor: 'purple',
  },
  {
    id: 2,
    serviceName: 'Hosting',
    description:
      'Specializing in reliable hosting solutions for static websites and dynamic web applications. Ensure your online presence is secure, scalable, and always accessible with tailored hosting expertise.',
    icon: Server,
    gradient: 'from-pink-600 to-rose-600',
    glowColor: 'pink',
  },
  {
    id: 3,
    serviceName: 'Problem Solving',
    description:
      'Proficient in tackling algorithmic challenges with a strategic approach. Leveraging in-depth knowledge to analyze, design, and implement effective solutions that optimize efficiency and performance in software development.',
    icon: Lightbulb,
    gradient: 'from-amber-600 to-orange-600',
    glowColor: 'orange',
  },
  {
    id: 4,
    serviceName: 'Database Management',
    description:
      'I specialize in managing databases and designing scalable systems that prioritize security and performance. My focus is on handling complex data setups to ensure businesses operate efficiently and effectively.',
    icon: Database,
    gradient: 'from-emerald-600 to-teal-600',
    glowColor: 'emerald',
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const Icon = service.icon;

  return (
    <motion.div
      className="relative group w-full md:w-4/5"
      initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <motion.div
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glowing background effect */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 
          group-hover:opacity-30 transition-opacity duration-500`}
          animate={isHovered ? {
            scale: [1, 1.05, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
          }}
        />

        {/* Main card */}
        <div
          className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 
          rounded-3xl p-8 border border-white/10 
          hover:border-white/20 transition-all duration-500 overflow-hidden
          shadow-2xl hover:shadow-3xl"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Mesh pattern background */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Floating particles */}
          {isHovered && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-${service.glowColor}-400 rounded-full`}
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                scale: 0 
              }}
              animate={{
                y: [null, (Math.random() - 0.5) * 100 + '%'],
                x: [null, (Math.random() - 0.5) * 100 + '%'],
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Content container with 3D effect */}
          <div className="relative z-10 flex flex-col space-y-4" style={{ transform: 'translateZ(50px)' }}>
            {/* Header with icon */}
            <div className="flex items-start justify-between">
              <motion.h3
                className="font-bold text-2xl text-white leading-tight"
                animate={isHovered ? { x: 8 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.serviceName}
              </motion.h3>

              {/* Animated icon container */}
              <motion.div
                className={`relative flex-shrink-0`}
                animate={isHovered ? { 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                } : { 
                  rotate: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                {/* Icon glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl`}
                  animate={isHovered ? {
                    opacity: [0.3, 0.6, 0.3],
                  } : { opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                  }}
                />
                
                {/* Icon background */}
                <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-slate-300 leading-relaxed text-[15px]"
              animate={isHovered ? { x: 8 } : { x: 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {service.description}
            </motion.p>

            {/* Hover indicator line */}
            <motion.div
              className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
              initial={{ width: 0 }}
              animate={isHovered ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-3xl">
            <motion.div
              className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10`}
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

          {/* Bottom shine effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            animate={isHovered ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServiceCompo() {
  return (
    <div className="flex flex-col space-y-12 h-full px-4 py-8">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}