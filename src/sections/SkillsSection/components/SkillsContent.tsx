import { useState } from "react";
import { Gamepad2, Hammer, Zap, Settings, Package, Trophy, Star, Circle, ChevronRight, Database, Wrench } from "lucide-react";

type SkillCategory = "foundations" | "frontend" | "backend" | "database" | "tools";

interface Skill {
  name: string;
  color: string;
}

interface Achievement {
  text: string;
}

interface FilterButton {
  id: SkillCategory;
  icon: React.ReactNode;
  label: string;
  shortLabel: string;
}

interface SkillData {
  category: SkillCategory;
  title: string;
  icon: React.ReactNode;
  level: string;
  skills: Skill[];
  achievements: Achievement[];
  skillCount: number;
  progress: number;
  progressColor: string;
  progressBgColor: string;
}

const filters: FilterButton[] = [
  {
    id: "foundations",
    icon: <Hammer className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Foundations",
    shortLabel: "Base",
  },
  {
    id: "frontend",
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Frontend",
    shortLabel: "Front",
  },
  {
    id: "backend",
    icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Backend",
    shortLabel: "Back",
  },
  {
    id: "database",
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Database & Data",
    shortLabel: "Data",
  },
  {
    id: "tools",
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: "Tools & DevOps",
    shortLabel: "Tools",
  },
];

const skillsData: Record<SkillCategory, SkillData> = {
  foundations: {
    category: "foundations",
    title: "Foundations",
    icon: <Hammer className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-700" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 8,
    progress: 100,
    progressColor: "bg-yellow-400",
    progressBgColor: "bg-yellow-400/20",
    skills: [
      { name: "HTML5", color: "from-yellow-400 to-yellow-500" },
      { name: "CSS3", color: "from-yellow-400 to-yellow-500" },
      { name: "JavaScript", color: "from-yellow-400 to-yellow-500" },
      { name: "ES6+", color: "from-yellow-400 to-yellow-500" },
      { name: "TypeScript", color: "from-yellow-400 to-yellow-500" },
      { name: "Python", color: "from-yellow-400 to-yellow-500" },
      { name: "JAVA", color: "from-yellow-400 to-yellow-500" },
      { name: "PHP", color: "from-yellow-400 to-yellow-500" },
    ],
    achievements: [
      { text: "Master multiple programming languages: Java, Python, JavaScript, PHP." },
      { text: "Modern ES6+ features with async/await and functional programming." },
      { text: "Strong foundation in HTML5 semantic markup and CSS3 animations." },
    ],
  },
  frontend: {
    category: "frontend",
    title: "Frontend",
    icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-700" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 6,
    progress: 100,
    progressColor: "bg-green-400",
    progressBgColor: "bg-green-400/20",
    skills: [
      { name: "React.js", color: "from-green-400 to-green-500" },
      { name: "Next.js", color: "from-green-400 to-green-500" },
      { name: "Tailwind CSS", color: "from-green-400 to-green-500" },
      { name: "Bootstrap", color: "from-green-400 to-green-500" },
      { name: "Shadcn/ui", color: "from-green-400 to-green-500" },
      { name: "Framer Motion", color: "from-green-400 to-green-500" },
    ],
    achievements: [
      { text: "Build modern React applications with hooks and component patterns." },
      { text: "Server-side rendering and static generation with Next.js." },
      { text: "Responsive design with Tailwind CSS and Bootstrap frameworks." },
    ],
  },
  backend: {
    category: "backend",
    title: "Backend",
    icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-700" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 5,
    progress: 100,
    progressColor: "bg-cyan-400",
    progressBgColor: "bg-cyan-400/20",
    skills: [
      { name: "Node.js", color: "from-cyan-400 to-cyan-500" },
      { name: "Express", color: "from-cyan-400 to-cyan-500" },
      { name: "Laravel", color: "from-cyan-400 to-cyan-500" },
      { name: "Spring Boot", color: "from-cyan-400 to-cyan-500" },
      { name: "FastAPI", color: "from-cyan-400 to-cyan-500" },
    ],
    achievements: [
      { text: "RESTful API development with Node.js, Express, and FastAPI." },
      { text: "Enterprise Java applications with Spring Boot framework." },
      { text: "Full-stack PHP development with Laravel MVC architecture." },
    ],
  },
  database: {
    category: "database",
    title: "Database & Data",
    icon: <Database className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-700" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 3,
    progress: 100,
    progressColor: "bg-purple-400",
    progressBgColor: "bg-purple-400/20",
    skills: [
      { name: "MySQL", color: "from-purple-400 to-purple-500" },
      { name: "MongoDB", color: "from-purple-400 to-purple-500" },
      { name: "SQL", color: "from-purple-400 to-purple-500" },
    ],
    achievements: [
      { text: "Design and optimize relational databases with MySQL." },
      { text: "NoSQL document databases with MongoDB and Mongoose." },
      { text: "Complex SQL queries, joins, indexes, and performance tuning." },
    ],
  },
  tools: {
    category: "tools",
    title: "Tools & DevOps",
    icon: <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-700" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 6,
    progress: 100,
    progressColor: "bg-orange-400",
    progressBgColor: "bg-orange-400/20",
    skills: [
      { name: "Git", color: "from-orange-400 to-orange-500" },
      { name: "GitHub", color: "from-orange-400 to-orange-500" },
      { name: "Docker", color: "from-orange-400 to-orange-500" },
      { name: "Scrum", color: "from-orange-400 to-orange-500" },
      { name: "UML", color: "from-orange-400 to-orange-500" },
      { name: "CI/CD", color: "from-orange-400 to-orange-500" },
    ],
    achievements: [
      { text: "Version control with Git and collaborative workflows on GitHub." },
      { text: "Containerization and deployment with Docker." },
      { text: "Agile methodologies with Scrum and UML modeling." },
    ],
  },
};

export const SkillsContent = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("foundations");
  const currentSkill = skillsData[activeCategory];

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" strokeWidth={2.5} />
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight"
            style={{
              textShadow:
                "3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)",
              WebkitTextStroke: "2px rgba(0,0,0,0.2)",
            }}
          >
            SKILLS • LOADOUT
          </h2>
          <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-pulse" strokeWidth={2.5} />
        </div>
        <p className="text-white/90 text-sm sm:text-base lg:text-lg font-bold leading-6 max-w-2xl mx-auto px-4">
          🕹️ Choose your class • Prove your mastery • Level up your game
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:gap-4 sm:mb-10">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.id;
          
          return (
            <button
              key={filter.id}
              onClick={() => setActiveCategory(filter.id)}
              className={`
                relative group
                flex items-center gap-2
                px-4 py-3 sm:px-6 sm:py-4
                text-xs sm:text-sm font-black uppercase tracking-wide
                rounded-xl
                border-4 border-black/50
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]
                hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]
                hover:translate-x-[3px] hover:translate-y-[3px]
                active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)]
                active:translate-x-[5px] active:translate-y-[5px]
                transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-br from-[#ffd166] to-[#ffd166dd] text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {/* Corner Decorations - Only on Active */}
              {isActive && (
                <>
                  <div className="absolute -left-1 -top-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -left-1 -bottom-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-white/60 rounded-sm" />
                </>
              )}

              {/* Icon */}
              <span className="relative z-10">{filter.icon}</span>

              {/* Label - Full on Desktop, Short on Mobile */}
              <span className="hidden sm:inline relative z-10">{filter.label}</span>
              <span className="inline sm:hidden relative z-10">{filter.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Main Card - Left Side */}
        <div className="lg:col-span-8">
          <div className="relative bg-white/10 rounded-2xl sm:rounded-3xl border-[6px] border-black/50 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] overflow-hidden">
            {/* Scanline Effect */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10 z-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-white/20">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl border-4 border-black/50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                  {currentSkill.icon}
                </div>
                <div>
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight">
                    {currentSkill.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/70 text-xs sm:text-sm font-bold mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{currentSkill.level}</span>
                  </div>
                </div>
              </div>

              {/* Equipment Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-white/70 text-sm font-black uppercase tracking-wide mb-3">
                  <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Equipment</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {currentSkill.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`
                        inline-block px-3 py-2 sm:px-4 sm:py-2.5
                        text-xs sm:text-sm font-black uppercase
                        bg-gradient-to-br ${skill.color}
                        text-black
                        rounded-lg
                        border-[3px] border-black/50
                        shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]
                        hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]
                        hover:translate-x-[2px] hover:translate-y-[2px]
                        transition-all duration-200
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <div className="flex items-center gap-2 text-white/70 text-sm font-black uppercase tracking-wide mb-3">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Achievements Unlocked</span>
                </div>
                <ul className="space-y-3">
                  {currentSkill.achievements.map((achievement, index) => {
                    const circleColor = 
                      currentSkill.category === "foundations" ? "#fbbf24" :
                      currentSkill.category === "frontend" ? "#4ade80" :
                      currentSkill.category === "backend" ? "#22d3ee" :
                      currentSkill.category === "database" ? "#c084fc" : "#fb923c";
                    
                    return (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-white/10 rounded-xl border-[3px] border-white/20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                      >
                        <Circle 
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current flex-shrink-0 mt-1" 
                          style={{ color: circleColor }}
                        />
                        <span className="text-white/95 text-sm sm:text-base font-medium leading-relaxed">
                          {achievement.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="lg:col-span-4">
          <div className="space-y-4 sm:space-y-5">
            {Object.values(skillsData).map((skill) => {
              const isActive = activeCategory === skill.category;
              const filterData = filters.find(f => f.id === skill.category);
              
              return (
                <button
                  key={skill.category}
                  onClick={() => setActiveCategory(skill.category)}
                  className={`
                    w-full text-left relative group
                    p-4 sm:p-3
                    rounded-2xl
                    border-4 border-black/50
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] scale-105"
                        : "bg-emerald-700/50 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-emerald-700/70 hover:scale-102"
                    }
                  `}
                >
                  {/* Active Indicator - Small squares in corners */}
                  {isActive && (
                    <>
                      <div className="absolute -left-1 -top-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white/60 rounded-sm" />
                    </>
                  )}

                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${isActive ? 'bg-white' : 'bg-white/20'} rounded-xl border-2 border-black/50`}>
                        {filterData?.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-sm sm:text-base font-black uppercase leading-tight">
                          {skill.title}
                        </h4>
                        <p className="text-white/70 text-xs font-bold mt-0.5">
                          {skill.skillCount} Skills
                        </p>
                      </div>
                    </div>
                    
                    {/* Arrow - Only visible on active */}
                    {isActive && (
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-pulse" strokeWidth={3} />
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className={`h-2 sm:h-2.5 rounded-full ${skill.progressBgColor} overflow-hidden border-2 border-black/30`}>
                      <div
                        className={`h-full ${skill.progressColor} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};