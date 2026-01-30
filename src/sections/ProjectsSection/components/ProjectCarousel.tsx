import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaReact,
  FaRegPlayCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiShadcnui,
  SiFastapi,
  SiTypescript,
  SiMapbox,
  SiVercel,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { BiQrScan } from "react-icons/bi";
import { MdColorLens } from "react-icons/md";
import { AiOutlineDownload, AiOutlineFilePdf } from "react-icons/ai";
import { TbBrandFramerMotion } from "react-icons/tb";

interface Project {
  id: number;
  serviceName: string;
  description: string;
  tools: IconType[];
  link: string;
  imgUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    serviceName: "WEATHER APP",
    description: "Comprehensive weather application with real-time data, air quality monitoring, and 5-day forecasts powered by OpenWeather API.",
    tools: [
      FaReact,
      SiNextdotjs,
      SiTailwindcss,
      SiShadcnui,
      SiTypescript,
      SiMapbox,
      SiVercel,
    ],
    link: "https://github.com/khalid-tourhzaoui/WEATHER-APP",
    imgUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    features: [
      "Real-time weather data with air quality index (AQI)",
      "Interactive Mapbox integration for weather visualization",
      "5-day forecast with UV index and pollution metrics",
    ],
  },
  {
    id: 2,
    serviceName: "QR CODE GENERATOR",
    description: "Modern QR code generator with customization options including colors, logos, and multiple download formats.",
    tools: [
      FaReact,
      SiTailwindcss,
      SiShadcnui,
      SiTypescript,
      BiQrScan,
      MdColorLens,
      AiOutlineDownload,
      SiVercel,
    ],
    link: "https://github.com/khalid-tourhzaoui/QR-CODE-GENERATOR",
    imgUrl: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
    features: [
      "Customizable QR codes with color options",
      "Logo embedding and style variations",
      "Export in multiple formats (PNG, SVG, PDF)",
    ],
  },
  {
    id: 3,
    serviceName: "Social Media Downloader",
    description: "Universal media downloader supporting multiple platforms with high-quality video and audio extraction capabilities.",
    tools: [
      FaReact,
      SiTailwindcss,
      SiShadcnui,
      AiOutlineDownload,
      SiFastapi,
      TbBrandFramerMotion,
      SiVercel,
    ],
    link: "https://github.com/khalid-tourhzaoui/social-media-downloader",
    imgUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    features: [
      "Multi-platform support (YouTube, Instagram, TikTok)",
      "High-quality video and audio downloads",
      "Fast API backend with smooth animations",
    ],
  },
  {
    id: 4,
    serviceName: "Smart Language Converter",
    description: "AI-powered language translation and text-to-speech converter with support for multiple languages and dialects.",
    tools: [
      FaReact,
      SiTailwindcss,
      SiShadcnui,
      SiVercel,
      FaRegPlayCircle,
      SiTypescript,
      SiFastapi,
    ],
    link: "https://smartlanguageconverter.vercel.app/",
    imgUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    features: [
      "Real-time text translation with AI processing",
      "Text-to-speech functionality with natural voices",
      "Support for multiple languages and dialects",
    ],
  },
  {
    id: 5,
    serviceName: "AI-RESUME-BUILDER",
    description: "Intelligent resume builder with AI-powered content suggestions, multiple templates, and PDF export functionality.",
    tools: [
      FaReact,
      SiTailwindcss,
      SiShadcnui,
      SiLaravel,
      AiOutlineFilePdf,
      SiMysql,
    ],
    link: "https://github.com/khalid-tourhzaoui/AI-RESUME-BUILDER-APP",
    imgUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    features: [
      "AI-powered content suggestions and optimization",
      "Multiple professional templates with customization",
      "PDF export with ATS-friendly formatting",
    ],
  },
  {
    id: 6,
    serviceName: "AI-LEGAL-PLATFORM",
    description: "Legal AI platform for Moroccan law providing instant legal assistance, document templates, and multilingual support (Arabic, French, Amazigh).",
    tools: [
      FaReact,
      SiNextdotjs,
      SiTailwindcss,
      SiShadcnui,
      SiTypescript,
      TbBrandFramerMotion,
      SiVercel,
    ],
    link: "https://github.com/khalid-tourhzaoui/legal-ai-platform",
    imgUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    features: [
      "AI-powered legal assistance for Moroccan law",
      "Multilingual support (Arabic, French, Amazigh)",
      "Document templates with preview and download",
    ],
  },
];

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTransition = (callback: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    callback();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextProject = () => {
    handleTransition(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    });
  };

  const prevProject = () => {
    handleTransition(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    });
  };

  const goToProject = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    handleTransition(() => {
      setCurrentIndex(index);
    });
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Arrows - Desktop Only */}
      <button
        onClick={prevProject}
        disabled={isAnimating}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-16 z-10 hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 bg-white border-4 border-zinc-800 rounded-full shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          className="w-5 h-5 xl:w-6 xl:h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextProject}
        disabled={isAnimating}
        aria-label="Next project"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-16 z-10 hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 bg-white border-4 border-zinc-800 rounded-full shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          className="w-5 h-5 xl:w-6 xl:h-6 text-zinc-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Main Card */}
      <div className="relative bg-white border-[5px] border-zinc-800 rounded-2xl shadow-[0px_10px_0px_0px_rgba(42,42,42,1)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-yellow-100 border-b-[5px] border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-400 border-2 border-zinc-800 rounded-full" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-yellow-400 border-2 border-zinc-800 rounded-full" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-500 border-2 border-zinc-800 rounded-full" />
            <span className="hidden sm:block text-xs font-black uppercase tracking-wider ml-3">
              Retro Project Window
            </span>
          </div>
          <div className="text-[10px] sm:text-xs text-zinc-500 font-mono">
            Arrow keys • Click dots
          </div>
        </div>

        {/* Scanline Effect */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.06] z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 1px, transparent 2px, transparent 4px)",
          }}
        />

        {/* Content */}
        <div className="relative p-4 sm:p-6 lg:p-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Image */}
            <div className="relative bg-yellow-100 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-[0px_6px_0px_0px_rgba(42,42,42,1)] h-48 sm:h-64 lg:h-80 group">
              <img
                src={currentProject.imgUrl}
                alt={currentProject.serviceName}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-orange-500 uppercase tracking-tight leading-tight mb-3">
                  {currentProject.serviceName}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4">
                  {currentProject.description}
                </p>

                {/* Tools/Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.tools.map((Tool, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-zinc-800 rounded-lg hover:bg-yellow-50 transition-colors"
                      title={Tool.name}
                    >
                      <Tool className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {currentProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-zinc-500 border-2 border-zinc-800 rounded-sm mt-1.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Project Button */}
              <div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-black uppercase bg-white border-[3px] border-zinc-800 rounded-lg shadow-[0px_4px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_2px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all"
                >
                  <span>View Project</span>
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-yellow-100 border-t-[5px] border-zinc-800">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Prev</span>
            </button>
            <button
              onClick={nextProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Next</span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                aria-label={`Go to project ${index + 1}`}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-zinc-800 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-zinc-800 scale-110"
                    : "bg-white hover:bg-gray-200"
                } disabled:cursor-not-allowed`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};