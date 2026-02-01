import { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  Package,
  QrCode,
  Download,
  FileText,
  Paintbrush,
  Database,
  Code2,
  Globe,
  Layers,
  Server,
  Smartphone,
  Layout,
  Palette,
} from "lucide-react";

interface Project {
  id: number;
  serviceName: string;
  description: string;
  tools: { icon: React.ReactNode; name: string }[];
  link: string;
  imgUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    serviceName: "WEATHER APP",
    description:
      "Comprehensive weather application with real-time data, air quality monitoring, and 5-day forecasts powered by OpenWeather API.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mapbox" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://github.com/khalid-tourhzaoui/WEATHER-APP",
    imgUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    features: [
      "Real-time weather data with air quality index (AQI)",
      "Interactive Mapbox integration for weather visualization",
      "5-day forecast with UV index and pollution metrics",
    ],
  },
  {
    id: 2,
    serviceName: "QR CODE GENERATOR",
    description:
      "Modern QR code generator with customization options including colors, logos, and multiple download formats.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />, name: "QR Scan" },
      { icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Colors" },
      { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Download" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://github.com/khalid-tourhzaoui/QR-CODE-GENERATOR",
    imgUrl:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
    features: [
      "Customizable QR codes with color options",
      "Logo embedding and style variations",
      "Export in multiple formats (PNG, SVG, PDF)",
    ],
  },
  {
    id: 3,
    serviceName: "Social Media Downloader",
    description:
      "Universal media downloader supporting multiple platforms with high-quality video and audio extraction capabilities.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Download" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "FastAPI" },
      { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Framer" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://github.com/khalid-tourhzaoui/social-media-downloader",
    imgUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    features: [
      "Multi-platform support (YouTube, Instagram, TikTok)",
      "High-quality video and audio downloads",
      "Fast API backend with smooth animations",
    ],
  },
  {
    id: 4,
    serviceName: "Smart Language Converter",
    description:
      "AI-powered language translation and text-to-speech converter with support for multiple languages and dialects.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
      { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Audio" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "FastAPI" },
    ],
    link: "https://smartlanguageconverter.vercel.app/",
    imgUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
    features: [
      "Real-time text translation with AI processing",
      "Text-to-speech functionality with natural voices",
      "Support for multiple languages and dialects",
    ],
  },
  {
    id: 5,
    serviceName: "AI-RESUME-BUILDER",
    description:
      "Intelligent resume builder with AI-powered content suggestions, multiple templates, and PDF export functionality.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Laravel" },
      { icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />, name: "PDF" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
    ],
    link: "https://github.com/khalid-tourhzaoui/AI-RESUME-BUILDER-APP",
    imgUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    features: [
      "AI-powered content suggestions and optimization",
      "Multiple professional templates with customization",
      "PDF export with ATS-friendly formatting",
    ],
  },
  {
    id: 6,
    serviceName: "AI-LEGAL-PLATFORM",
    description:
      "Legal AI platform for Moroccan law providing instant legal assistance, document templates, and multilingual support (Arabic, French, Amazigh).",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Framer" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://github.com/khalid-tourhzaoui/legal-ai-platform",
    imgUrl:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
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
      <button
        onClick={prevProject}
        disabled={isAnimating}
        aria-label="Previous project"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-16 z-10 hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-orange-400 to-orange-500 border-4 border-zinc-800 rounded-full shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6 xl:w-7 xl:h-7 text-white stroke-[3]" />
      </button>

      <button
        onClick={nextProject}
        disabled={isAnimating}
        aria-label="Next project"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-16 z-10 hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-orange-400 to-orange-500 border-4 border-zinc-800 rounded-full shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6 xl:w-7 xl:h-7 text-white stroke-[3]" />
      </button>

      <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 border-[5px] border-zinc-800 rounded-2xl shadow-[0px_10px_0px_0px_rgba(42,42,42,1)] overflow-hidden">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 border-b-[5px] border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-500 border-2 border-zinc-800 rounded-full" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-yellow-300 border-2 border-zinc-800 rounded-full" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-green-400 border-2 border-zinc-800 rounded-full" />
            <span className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-wider ml-3 text-white">
              <Sparkles className="w-3.5 h-3.5" />
              Retro Project Window
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-white/80 font-mono">
            <ChevronLeft className="w-3 h-3" />
            <ChevronRight className="w-3 h-3" />
            <span>Navigate</span>
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.06] z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 1px, transparent 2px, transparent 4px)",
          }}
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-opacity duration-500 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-[0px_6px_0px_0px_rgba(42,42,42,1)] h-48 sm:h-64 lg:h-80 group">
              <img
                src={currentProject.imgUrl}
                alt={currentProject.serviceName}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 fill-orange-500" />
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-orange-600 uppercase tracking-tight leading-tight">
                    {currentProject.serviceName}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-4">
                  {currentProject.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-black uppercase tracking-wider text-orange-600">
                      Tech Stack
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-white border-2 border-zinc-800 rounded-lg hover:bg-orange-50 transition-colors text-zinc-800"
                        title={tool.name}
                      >
                        {tool.icon}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-black uppercase tracking-wider text-orange-600">
                      Key Features
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {currentProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Zap className="w-4 h-4 text-orange-500 fill-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-semibold leading-relaxed text-zinc-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-black uppercase bg-gradient-to-br from-orange-400 to-orange-500 text-white border-[3px] border-zinc-800 rounded-lg shadow-[0px_4px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_2px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 border-t-[5px] border-zinc-800">
          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-zinc-800"
            >
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
              <span className="hidden sm:inline">Prev</span>
            </button>
            <button
              onClick={nextProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-zinc-800"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                aria-label={`Go to project ${index + 1}`}
                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 border-2 border-zinc-800 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white scale-110"
                    : "bg-white/40 hover:bg-white/70"
                } disabled:cursor-not-allowed`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};