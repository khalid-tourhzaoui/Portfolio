// ProjectsContent.tsx
import { ProjectCarousel } from "./ProjectCarousel";

export const ProjectsContent = () => {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-10 sm:mb-12 lg:mb-16">
        <h2
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase mb-4 tracking-tight"
          style={{
            textShadow:
              "3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)",
            WebkitTextStroke: "2px rgba(0,0,0,0.2)",
          }}
        >
          Projects
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base font-mono leading-relaxed mt-3">
          Showcasing my work with a retro game twist ⚡
        </p>
      </div>
      <ProjectCarousel />
    </div>
  );
};