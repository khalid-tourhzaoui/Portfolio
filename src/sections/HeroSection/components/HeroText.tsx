export const HeroText = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold bg-white border-2 border-zinc-800 rounded-md">
          LEVEL 22
        </span>
        <span className="text-xs text-zinc-500 uppercase tracking-wider">
          FULL STACK DEVELOPER
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        <span className="text-zinc-800">Hi, I'm </span>
        <span className="text-orange-500">Khalid</span>
        <span className="text-zinc-800"> —</span>
        <br />
        <span className="text-yellow-400">Web</span>
        <span className="text-zinc-800"> Developer</span>
      </h1>

      <p className="text-sm sm:text-base lg:text-lg text-zinc-700 leading-relaxed max-w-xl mb-8">
        I'm a 22-year-old full stack web developer, passionate and versatile. I
        develop comprehensive and high-performance web applications using React,
        Laravel, and Spring Boot. Conscientious, creative, and
        solution-oriented.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-red-400 border-2 border-zinc-800 rounded-lg hover:bg-red-500 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <span>View Projects</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-5 py-3 text-sm font-semibold text-zinc-800 bg-white border-2 border-zinc-800 rounded-lg hover:bg-zinc-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          Hire Me
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {["React", "Laravel", "Spring Boot", "Tailwind CSS", "MySQL"].map(
          (skill) => (
            <span
              key={skill}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-white border-2 border-zinc-800 rounded-lg"
            >
              {skill}
            </span>
          ),
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-lg">
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="text-sm font-bold text-zinc-800 mb-1">
            Latest Project
          </div>
          <div className="text-xs text-zinc-500">SMTPP Health App</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="text-sm font-bold text-zinc-800 mb-1">Experience</div>
          <div className="text-xs text-zinc-500">4 Internships</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="text-sm font-bold text-zinc-800 mb-1">Location</div>
          <div className="text-xs text-zinc-500">Tiflet, Morocco</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="text-sm font-bold text-zinc-800 mb-1">Status</div>
          <div className="text-xs text-zinc-500">Open to Work</div>
        </div>
      </div>
    </div>
  );
};
