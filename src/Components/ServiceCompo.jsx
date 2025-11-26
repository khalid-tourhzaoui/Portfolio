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

  const springConfig = { stiffness: 120, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), springConfig);

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
      className="relative group w-full"
      initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <motion.div
        className="relative h-full"
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
          className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl blur-lg opacity-0 
          group-hover:opacity-40 transition-opacity duration-500`}
          animate={isHovered ? {
            scale: [1, 1.02, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
          }}
        />

        {/* Main card */}
        <div
          className="relative h-full backdrop-blur-xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 
          rounded-xl p-5 border border-white/10 
          hover:border-white/20 transition-all duration-500 overflow-hidden
          shadow-xl hover:shadow-2xl"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />

          {/* Mesh pattern background */}
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          {/* Content container with 3D effect - Horizontal Layout */}
          <div className="relative z-10 flex flex-row gap-4 items-center h-full" 
            style={{ transform: 'translateZ(30px)' }}>
            
            {/* Icon section */}
            <motion.div
              className="flex-shrink-0"
              animate={isHovered ? { 
                rotate: [0, -5, 5, -5, 0],
                scale: 1.05
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
                className={`absolute -inset-2 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl`}
                animate={isHovered ? {
                  opacity: [0.2, 0.5, 0.2],
                } : { opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
              
              {/* Icon background */}
              <div className={`relative p-3 rounded-lg bg-gradient-to-br ${service.gradient} shadow-lg`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 flex flex-col space-y-2">
              {/* Title */}
              <motion.h3
                className="font-bold text-lg text-white leading-tight"
                animate={isHovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.serviceName}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-slate-300 leading-relaxed text-sm"
                animate={isHovered ? { x: 3 } : { x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>

          {/* Hover indicator line */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl pointer-events-none">
            <motion.div
              className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10`}
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
            animate={isHovered ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServiceCompo() {
  return (
    <div className="flex flex-col gap-3 w-full">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}