import { useState, useEffect } from "react";
import { Gamepad2, Hammer, Zap, Settings, Package, Trophy, Star, Circle, ChevronRight, Database, Wrench, Target } from "lucide-react";

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
    icon: <Hammer className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 8,
    progress: 100,
    progressColor: "bg-orange-500",
    progressBgColor: "bg-orange-200",
    skills: [
      { name: "HTML5", color: "from-orange-400 to-orange-500" },
      { name: "CSS3", color: "from-orange-400 to-orange-500" },
      { name: "JavaScript", color: "from-orange-400 to-orange-500" },
      { name: "ES6+", color: "from-orange-400 to-orange-500" },
      { name: "TypeScript", color: "from-orange-400 to-orange-500" },
      { name: "Python", color: "from-orange-400 to-orange-500" },
      { name: "JAVA", color: "from-orange-400 to-orange-500" },
      { name: "PHP", color: "from-orange-400 to-orange-500" },
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
    icon: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 6,
    progress: 100,
    progressColor: "bg-blue-500",
    progressBgColor: "bg-blue-200",
    skills: [
      { name: "React.js", color: "from-blue-400 to-blue-500" },
      { name: "Next.js", color: "from-blue-400 to-blue-500" },
      { name: "Tailwind CSS", color: "from-blue-400 to-blue-500" },
      { name: "Bootstrap", color: "from-blue-400 to-blue-500" },
      { name: "Shadcn/ui", color: "from-blue-400 to-blue-500" },
      { name: "Framer Motion", color: "from-blue-400 to-blue-500" },
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
    icon: <Settings className="w-10 h-10 sm:w-12 sm:h-12 text-red-600" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 5,
    progress: 100,
    progressColor: "bg-red-500",
    progressBgColor: "bg-red-200",
    skills: [
      { name: "Node.js", color: "from-red-400 to-red-500" },
      { name: "Express", color: "from-red-400 to-red-500" },
      { name: "Laravel", color: "from-red-400 to-red-500" },
      { name: "Spring Boot", color: "from-red-400 to-red-500" },
      { name: "FastAPI", color: "from-red-400 to-red-500" },
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
    icon: <Database className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 3,
    progress: 100,
    progressColor: "bg-purple-500",
    progressBgColor: "bg-purple-200",
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
    icon: <Wrench className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" strokeWidth={2.5} />,
    level: "Level 4 / 4",
    skillCount: 6,
    progress: 100,
    progressColor: "bg-green-500",
    progressBgColor: "bg-green-200",
    skills: [
      { name: "Git", color: "from-green-400 to-green-500" },
      { name: "GitHub", color: "from-green-400 to-green-500" },
      { name: "Docker", color: "from-green-400 to-green-500" },
      { name: "Scrum", color: "from-green-400 to-green-500" },
      { name: "UML", color: "from-green-400 to-green-500" },
      { name: "CI/CD", color: "from-green-400 to-green-500" },
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
  const [animatedProgress, setAnimatedProgress] = useState<Record<SkillCategory, number>>({
    foundations: 0,
    frontend: 0,
    backend: 0,
    database: 0,
    tools: 0,
  });

  const currentSkill = skillsData[activeCategory];

  useEffect(() => {
    setAnimatedProgress({
      foundations: 0,
      frontend: 0,
      backend: 0,
      database: 0,
      tools: 0,
    });

    const timer = setTimeout(() => {
      setAnimatedProgress(prev => ({
        ...prev,
        [activeCategory]: skillsData[activeCategory].progress,
      }));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const getActiveColor = () => {
    const colorMap = {
      foundations: "from-orange-400 to-orange-500",
      frontend: "from-blue-400 to-blue-500",
      backend: "from-red-400 to-red-500",
      database: "from-purple-400 to-purple-500",
      tools: "from-green-400 to-green-500",
    };
    return colorMap[activeCategory];
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-10 lg:px-10 lg:py-10">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 animate-pulse" strokeWidth={2.5} />
          <h2
            className="text-zinc-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight"
            style={{
              textShadow:
                "3px 3px 0px rgba(255,255,255,0.3), -1px -1px 0px rgba(0,0,0,0.1)",
              WebkitTextStroke: "2px rgba(0,0,0,0.1)",
            }}
          >
            SKILLS • LOADOUT
          </h2>
          <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 animate-pulse" strokeWidth={2.5} />
        </div>
        <p className="text-zinc-700 text-sm sm:text-base lg:text-lg font-bold leading-6 max-w-2xl mx-auto px-4 flex items-center justify-center gap-2">
          <Target className="w-4 h-4 sm:w-5 sm:h-5" />
          Choose your class • Prove your mastery • Level up your game
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:gap-4 sm:mb-10">
        {filters.map((filter) => {
          const isActive = activeCategory === filter.id;
          
          return (
            <button
              aria-label={`Select ${filter.label} category`}
              key={filter.id}
              onClick={() => setActiveCategory(filter.id)}
              className={`
                relative group
                flex items-center gap-2
                px-4 py-3 sm:px-6 sm:py-4
                text-xs sm:text-sm font-black uppercase tracking-wide
                rounded-xl
                border-4 border-zinc-800
                shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)]
                hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)]
                hover:translate-x-[3px] hover:translate-y-[3px]
                active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)]
                active:translate-x-[5px] active:translate-y-[5px]
                transition-all duration-200
                ${
                  isActive
                    ? `bg-gradient-to-br ${getActiveColor()} text-white`
                    : "bg-white text-zinc-800 hover:bg-zinc-50"
                }
              `}
            >
              {isActive && (
                <>
                  <div className="absolute -left-1 -top-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -right-1 -top-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -left-1 -bottom-1 w-3 h-3 bg-white/60 rounded-sm" />
                  <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-white/60 rounded-sm" />
                </>
              )}

              <span className="relative z-10">{filter.icon}</span>

              <span className="hidden sm:inline relative z-10">{filter.label}</span>
              <span className="inline sm:hidden relative z-10">{filter.shortLabel}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl border-[6px] border-zinc-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)] overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] z-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(0,0,0,0.5) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 4px)",
              }}
            />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-zinc-200">
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-2xl border-4 border-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                  {currentSkill.icon}
                </div>
                <div>
                  <h3 className="text-zinc-800 text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight">
                    {currentSkill.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-zinc-600 text-xs sm:text-sm font-bold mt-1">
                    <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                    <span>{currentSkill.level}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 text-zinc-600 text-sm font-black uppercase tracking-wide mb-3">
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
                        text-white
                        rounded-lg
                        border-[3px] border-zinc-800
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

              <div>
                <div className="flex items-center gap-2 text-zinc-600 text-sm font-black uppercase tracking-wide mb-3">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Achievements Unlocked</span>
                </div>
                <ul className="space-y-3">
                  {currentSkill.achievements.map((achievement, index) => {
                    const circleColor = 
                      currentSkill.category === "foundations" ? "#fb923c" :
                      currentSkill.category === "frontend" ? "#3b82f6" :
                      currentSkill.category === "backend" ? "#ef4444" :
                      currentSkill.category === "database" ? "#a855f7" : "#22c55e";
                    
                    return (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 sm:p-4 bg-yellow-50 rounded-xl border-[3px] border-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
                      >
                        <Circle 
                          className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current flex-shrink-0 mt-1" 
                          style={{ color: circleColor }}
                        />
                        <span className="text-zinc-700 text-sm sm:text-base font-medium leading-relaxed">
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

        <div className="lg:col-span-4">
          <div className="space-y-4 sm:space-y-5">
            {Object.values(skillsData).map((skill) => {
              const isActive = activeCategory === skill.category;
              const filterData = filters.find(f => f.id === skill.category);
              
              return (
                <button
                  aria-label={`Select ${skill.title}`}
                  key={skill.category}
                  onClick={() => setActiveCategory(skill.category)}
                  className={`
                    w-full text-left relative group
                    p-4 sm:p-5
                    rounded-2xl
                    border-4 border-zinc-800
                    transition-all duration-300
                    ${
                      isActive
                        ? `bg-gradient-to-br ${skill.skills[0].color} shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] scale-105`
                        : "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:bg-zinc-50 hover:scale-102"
                    }
                  `}
                >
                  {isActive && (
                    <>
                      <div className="absolute -left-1 -top-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-white/60 rounded-sm" />
                      <div className="absolute -right-1 -bottom-1 w-2 h-2 bg-white/60 rounded-sm" />
                    </>
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${isActive ? 'bg-white text-zinc-800' : 'bg-yellow-100 text-zinc-800'} rounded-xl border-2 border-zinc-800`}>
                        {filterData?.icon}
                      </div>
                      <div>
                        <h4 className={`text-sm sm:text-base font-black uppercase leading-tight ${isActive ? 'text-white' : 'text-zinc-800'}`}>
                          {skill.title}
                        </h4>
                        <p className={`text-xs font-bold mt-0.5 ${isActive ? 'text-white/80' : 'text-zinc-600'}`}>
                          {skill.skillCount} Skills
                        </p>
                      </div>
                    </div>
                    
                    {isActive && (
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" strokeWidth={3} />
                    )}
                  </div>

                  <div className="relative">
                    <div className={`h-2 sm:h-2.5 rounded-full ${skill.progressBgColor} overflow-hidden border-2 border-zinc-800`}>
                      <div
                        className={`h-full ${skill.progressColor} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: `${animatedProgress[skill.category]}%` }}
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