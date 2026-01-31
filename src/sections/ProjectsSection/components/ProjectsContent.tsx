// ProjectsContent.tsx
import { ProjectCarousel } from "./ProjectCarousel";
import { Gamepad2, Code2, Sparkles } from "lucide-react";

export const ProjectsContent = () => {
  return (
    <div className="relative  w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-10 sm:mb-12 lg:mb-10">
        {/* Title with Icons */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Gamepad2 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-400 animate-pulse" 
            strokeWidth={2.5}
          />
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight"
            style={{
              textShadow:
                "3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)",
              WebkitTextStroke: "2px rgba(0,0,0,0.2)",
            }}
          >
            Projects
          </h2>
          <Code2 
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-orange-400 animate-pulse" 
            strokeWidth={2.5}
          />
        </div>

        {/* Subtitle with Icon */}
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          <p className="text-zinc-100 text-sm sm:text-base font-mono leading-relaxed">
            Showcasing my work with a retro game twist
          </p>
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        </div>
      </div>
      <ProjectCarousel />
    </div>
  );
};