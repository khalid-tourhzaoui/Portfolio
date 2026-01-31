// ProjectsSection.tsx
import { ProjectsBackground } from "./components/ProjectsBackground";
import { ProjectsContent } from "./components/ProjectsContent";

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative flex items-center justify-center min-h-screen py-16 sm:py-20 lg:py-14 overflow-hidden bg-emerald-800 -mt-0.5 rounded-b-[48px] sm:rounded-b-[64px] lg:rounded-b-[72px]"
    >
      <ProjectsBackground />
      <ProjectsContent />
    </section>
  );
};