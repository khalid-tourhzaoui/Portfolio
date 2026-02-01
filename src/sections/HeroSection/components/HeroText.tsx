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
        Building modern web experiences with clean code and creative solutions. 
        Specialized in React, Laravel, and Spring Boot. Let's turn your ideas 
        into reality with powerful, scalable applications.
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-red-400 border-2 border-zinc-800 rounded-lg hover:bg-red-500 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
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
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-zinc-800 bg-white border-2 border-zinc-800 rounded-lg hover:bg-zinc-50 transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span>Hire Me</span>
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
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 mb-1">
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Latest Project
          </div>
          <div className="text-xs text-zinc-500">SMTPP Health App</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 mb-1">
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Experience
          </div>
          <div className="text-xs text-zinc-500">4 Internships</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform -rotate-1 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 mb-1">
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Location
          </div>
          <div className="text-xs text-zinc-500">Tiflet, Morocco</div>
        </div>
        <div className="bg-white border-2 border-zinc-800 rounded-xl p-4 transform rotate-2 hover:rotate-0 transition-transform">
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 mb-1">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Status
          </div>
          <div className="text-xs text-zinc-500">Open to Work</div>
        </div>
      </div>
    </div>
  );
};