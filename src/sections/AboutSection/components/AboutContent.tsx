import {
  Zap,
  Target,
  Palette,
  Wrench,
  Database,
  Plug,
  Code2,
  Leaf,
  FolderKanban,
  Send,
} from "lucide-react";
import aboutImage from '../../../../public/assets/about-C0vwj3CE.jfif';
export function AboutContent() {
  const coreAbilities = [
    {
      icon: Zap,
      name: "React & Laravel",
      level: "Expert",
      color: "text-blue-400",
    },
    {
      icon: Leaf,
      name: "Spring Boot",
      level: "Advanced",
      color: "text-green-400",
    },
    {
      icon: Code2,
      name: "Full Stack Dev",
      level: "Expert",
      color: "text-purple-400",
    },
    {
      icon: Database,
      name: "MySQL & Databases",
      level: "Advanced",
      color: "text-orange-400",
    },
    {
      icon: Plug,
      name: "REST API",
      level: "Expert",
      color: "text-yellow-400",
    },
    {
      icon: Palette,
      name: "Tailwind CSS",
      level: "Advanced",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <h2
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase mb-4 sm:mb-6 tracking-tight"
          style={{
            textShadow:
              "4px 4px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)",
            WebkitTextStroke: "2px rgba(0,0,0,0.2)",
          }}
        >
          ABOUT • PLAYER
        </h2>

        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-relaxed max-w-3xl mx-auto px-4">
          💻 Junior Web Developer • Full Stack • React + Laravel + Spring Boot
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="bg-emerald-700/40 backdrop-blur-sm border-3 sm:border-4 border-emerald-600/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[rgba(0,0,0,0.3)_0px_6px_0px_0px] sm:shadow-[rgba(0,0,0,0.3)_0px_8px_0px_0px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-white/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase">
                  MISSION
                </h3>
              </div>
            </div>

            <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              I create efficient, user-friendly web applications from concept to
              deployment. My approach combines modern frameworks with best
              practices to deliver reliable solutions. Whether it's building
              management systems or interactive platforms, I focus on
              performance, clean architecture, and seamless user experiences.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <a
                href="#projects"
                className="bg-yellow-400 hover:bg-yellow-500 text-zinc-800 font-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg border-3 sm:border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all uppercase text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <FolderKanban className="w-4 h-4 sm:w-5 sm:h-5" />
                VIEW PROJECTS →
              </a>
              <a
                href="#contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg border-3 sm:border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all uppercase text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                CONTACT ME
              </a>
            </div>
          </div>

          <div className="bg-emerald-700/40 backdrop-blur-sm border-3 sm:border-4 border-emerald-600/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[rgba(0,0,0,0.3)_0px_6px_0px_0px] sm:shadow-[rgba(0,0,0,0.3)_0px_8px_0px_0px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-white/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-500 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black uppercase">
                  CORE ABILITIES
                </h3>
                <p className="text-white/70 text-[10px] sm:text-xs md:text-sm font-bold">
                  Mastered Skills
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {coreAbilities.map((ability, index) => {
                const Icon = ability.icon;
                return (
                  <div
                    key={index}
                    className="bg-emerald-800/60 backdrop-blur-sm border-2 sm:border-3 border-emerald-600/60 rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`flex-shrink-0 ${ability.color}`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-black text-xs sm:text-sm md:text-base truncate">
                          {ability.name}
                        </h4>
                        <p className="text-emerald-300 text-[10px] sm:text-xs font-bold">
                          {ability.level}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 border-3 sm:border-4 border-zinc-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px]">
            <div className="bg-zinc-700 border-b-3 sm:border-b-4 border-zinc-800 p-3 sm:p-4 flex flex-wrap gap-2">
              <span className="bg-yellow-400 text-zinc-800 font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border-2 border-zinc-800 uppercase">
                REACT
              </span>
              <span className="bg-yellow-400 text-zinc-800 font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border-2 border-zinc-800 uppercase">
                LARAVEL
              </span>
              <span className="bg-yellow-400 text-zinc-800 font-black text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md border-2 border-zinc-800 uppercase">
                SPRING BOOT
              </span>
            </div>

            <div className="relative bg-zinc-600/50">
              <img
                src={aboutImage}
                alt="Khalid Developer Character"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-emerald-600 border-t-3 sm:border-t-4 border-zinc-900 p-3 sm:p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="bg-emerald-400 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full animate-pulse"></span>
                <span className="text-white text-xs sm:text-sm font-black uppercase">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <span className="text-emerald-100 text-[10px] sm:text-xs font-bold">
                Open to new opportunities and projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
