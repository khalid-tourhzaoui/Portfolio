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
  Video,
  Languages,
  Brain,
  Wand2
} from "lucide-react";

interface Project {
  id: number;
  serviceName: string;
  description: string;
  tools: { icon: React.ReactNode; name: string }[];
  link: string;
  imgUrl: string;
  images?: string[]; // Nouvelles images pour le slider
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    serviceName: "PORTFOLIO-GAMING",
    description:
      "Modern portfolio application with retro gaming/RPG inspired interface, featuring character cards, XP system, interactive switchboard navigation, and terminal-style contact form.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Radix UI" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React Router" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://khalid-tourhzaoui.vercel.app/",
    imgUrl: "/public/assets/portfolio-project/image_n_1.png",
    images: [
      "/public/assets/portfolio-project/image_n_1.png",
      "/public/assets/portfolio-project/image_n_2.png",
      "/public/assets/portfolio-project/image_n_3.png",
      "/public/assets/portfolio-project/image_n_4.png",
      "/public/assets/portfolio-project/image_n_5.png",
    ],
    features: [
      "Unique gaming/RPG interface with character stats and XP system",
      "Interactive switchboard navigation and terminal-style components",
      "Fully responsive design with smooth animations and transitions",
    ],
  },
  {
    id: 2,
    serviceName: "JOUSKA AI - CONTENT CREATION",
    description:
      "Intelligent AI-powered content creation platform with article generation, blog title suggestions, AI image generation, background removal, and resume analysis powered by OpenAI GPT-4 and DALL-E.",
    tools: [
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Spring Boot" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "OpenAI" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Wand2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "DALL-E" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "JWT" },
    ],
    link: "https://github.com/khalid-tourhzaoui/jouska-ai",
    imgUrl: "/public/assets/jouska-project/image_n_1.png",
    images: [
      "/public/assets/jouska-project/image_n_1.png",
      "/public/assets/jouska-project/image_n_2.png",
      "/public/assets/jouska-project/image_n_3.png",
      "/public/assets/jouska-project/image_n_4.png",
      "/public/assets/jouska-project/image_n_5.png",
      "/public/assets/jouska-project/image_n_6.png",
    ],
    features: [
      "AI article generation with customizable tone and SEO optimization",
      "Blog title generator with 10+ creative suggestions per request",
      "DALL-E 3 image generation and intelligent background removal",
      "Resume analysis with scoring, strengths detection, and improvement suggestions",
    ],
  },
  {
    id: 3,
    serviceName: "AI-LEGAL-PLATFORM",
    description:
      "Legal AI platform for Moroccan law providing instant legal assistance, document templates, and multilingual support (Arabic, French, Amazigh) powered by OpenAI.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "OpenAI" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://legal-ai-morocco.vercel.app/",
    imgUrl: "/public/assets/ai-legal-project/image_n_1.png",
    images: [
      "/public/assets/ai-legal-project/image_n_2.png",
      "/public/assets/ai-legal-project/image_n_1.png",
      "/public/assets/ai-legal-project/image_n_3.png"
    ],
    features: [
      "AI-powered legal assistance specialized for Moroccan law",
      "Multilingual interface (Arabic, French, Amazigh)",
      "Document viewer with templates and download options",
    ],
  },
  {
    id: 4,
    serviceName: "SMTPP - MEDICAL MANAGEMENT",
    description:
      "Integrated application for managing occupational health and professional pathology activities at CHUIS hospital. Features risk mapping, medical visits, training management, and comprehensive statistics for work accidents and occupational diseases.",
    tools: [
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Laravel" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Sanctum" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "API REST" },
    ],
    link: "https://github.com/khalid-tourhzaoui/laravel-react-smtpp-tailadmin",
    imgUrl: "/public/assets/smtpp-project/image_n_6.png",
    images: [
      "/public/assets/smtpp-project/image_n_6.png",
      "/public/assets/smtpp-project/image_n_1.png",
      "/public/assets/smtpp-project/image_n_2.png",
      "/public/assets/smtpp-project/image_n_3.png",
      "/public/assets/smtpp-project/image_n_4.png",
      "/public/assets/smtpp-project/image_n_5.png",
    ],
    features: [
      "Professional risk mapping and workplace assessment system",
      "Medical visits management with aptitude certificate generation",
      "Training, accidents, and occupational diseases tracking with analytics",
    ],
  },
  {
    id: 5,
    serviceName: "TONTINE MANAGEMENT SYSTEM",
    description:
      "Comprehensive tontine (daret) management platform with participant tracking, automated payment reminders, notifications system, and real-time analytics dashboard powered by Laravel and React.",
    tools: [
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Laravel" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Sanctum" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "API REST" },
    ],
    link: "https://github.com/khalid-tourhzaoui/laravel-react-tontine-tailadmin",
    imgUrl: "/public/assets/tontine-project/image_n_1.png",
    images: [
      "/public/assets/tontine-project/image_n_1.png",
      "/public/assets/tontine-project/image_n_2.png",
      "/public/assets/tontine-project/image_n_3.png",
      "/public/assets/tontine-project/image_n_4.png",
      "/public/assets/tontine-project/image_n_5.png",
      "/public/assets/tontine-project/image_n_6.png",
    ],
    features: [
      "Multi-tontine creation with customizable cycles, amounts, and participant management",
      "Automated email reminders, delay notifications, and in-app notification system",
      "Analytics dashboard with metrics, charts, and demographic visualizations",
    ],
  },
  {
    id: 6,
    serviceName: "AI BACKGROUND REMOVER",
    description:
      "AI-powered background removal application with intelligent image processing, credit system, JWT authentication, and seamless user experience for high-quality image export.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Node.js" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Express" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MongoDB" },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AI" },
      { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Multer" },
    ],
    link: "https://github.com/votre-username/bg-removal",
    imgUrl: "/public/assets/bg-removal-project/image_n_1.png",
    images: [
      "/public/assets/bg-removal-project/image_n_1.png",
      "/public/assets/bg-removal-project/image_n_2.png",
      "/public/assets/bg-removal-project/image_n_3.png",
      "/public/assets/bg-removal-project/image_n_4.png",
      "/public/assets/bg-removal-project/image_n_5.png",
    ],
    features: [
      "AI-powered background removal with drag-and-drop upload",
      "Interactive before/after slider for result comparison",
      "Credit-based system with secure payment integration and JWT authentication",
    ],
  },
  // {
  //   id: 7,
  //   serviceName: "SMART LANGUAGE CONVERTER",
  //   description:
  //     "AI-powered translation app with real-time text translation, text-to-speech, speech recognition, file upload, and URL content extraction for seamless multilingual communication.",
  //   tools: [
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
  //     { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
  //     { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
  //     { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Speech API" },
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
  //     { icon: <Languages className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Translation" },
  //     { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
  //   ],
  //   link: "https://text-translate-ai.vercel.app/",
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1484935558426-cd0213f0127b?w=800&h=600&fit=crop"
  //   ],
  //   features: [
  //     "Real-time translation with speech recognition and TTS",
  //     "File upload and URL content extraction for translation",
  //     "Favorites system with local storage for saved translations",
  //   ],
  // },
  // {
  //   id: 8,
  //   serviceName: "ADVANCED WEATHER APP",
  //   description:
  //     "Comprehensive weather application with real-time data, air quality monitoring (AQI), UV index, 5-day forecasts, and interactive Mapbox integration powered by OpenWeather API.",
  //   tools: [
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
  //     { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
  //     { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
  //     { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
  //     { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mapbox" },
  //     { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
  //   ],
  //   link: "https://github.com/khalid-tourhzaoui/WEATHER-APP",
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop"
  //   ],
  //   features: [
  //     "Real-time weather with air quality index and UV metrics",
  //     "Interactive Mapbox integration for weather visualization",
  //     "5-day forecast with hourly details and pollution data",
  //   ],
  // },
  // {
  //   id: 9,
  //   serviceName: "AI-RESUME-BUILDER",
  //   description:
  //     "Intelligent resume builder combining Laravel and React with AI-powered content suggestions, social authentication, multiple templates, and PDF export functionality.",
  //   tools: [
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
  //     { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
  //     { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Inertia.js" },
  //     { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Laravel" },
  //     { icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />, name: "PDF" },
  //     { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
  //   ],
  //   link: "https://github.com/khalid-tourhzaoui/AI-RESUME-BUILDER-APP",
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
  //   ],
  //   features: [
  //     "AI-powered content suggestions with real-time preview",
  //     "Social authentication (Google, GitHub, Facebook)",
  //     "Multiple templates with PDF export and folder management",
  //   ],
  // },
  // {
  //   id: 10,
  //   serviceName: "SOCIAL MEDIA DOWNLOADER",
  //   description:
  //     "Universal video downloader supporting Instagram, TikTok, YouTube, Facebook, and Twitter with intelligent URL validation and seamless user experience.",
  //   tools: [
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
  //     { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
  //     { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Framer Motion" },
  //     { icon: <Video className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Video API" },
  //     { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Download" },
  //     { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "RapidAPI" },
  //     { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
  //   ],
  //   link: "https://socialmediadownload.vercel.app/",
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  //   ],
  //   features: [
  //     "Multi-platform support (Instagram, TikTok, YouTube, Facebook, Twitter)",
  //     "Intelligent URL validation and platform detection",
  //     "Modern animations with Framer Motion and responsive design",
  //   ],
  // },
  // {
  //   id: 11,
  //   serviceName: "QR CODE GENERATOR",
  //   description:
  //     "Modern QR code generator with customization options including colors, logos, and multiple download formats (PNG, SVG, PDF).",
  //   tools: [
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
  //     { icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Tailwind" },
  //     { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
  //     { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
  //     { icon: <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />, name: "QR Scan" },
  //     { icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Colors" },
  //     { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Download" },
  //     { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
  //   ],
  //   link: "https://github.com/khalid-tourhzaoui/QR-CODE-GENERATOR",
  //   imgUrl:
  //     "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
  //   images: [
  //     "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&h=600&fit=crop",
  //     "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop"
  //   ],
  //   features: [
  //     "Customizable QR codes with color options",
  //     "Logo embedding and style variations",
  //     "Export in multiple formats (PNG, SVG, PDF)",
  //   ],
  // },
];

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      setCurrentImageIndex(0); // Reset image index when changing project
    });
  };

  const prevProject = () => {
    handleTransition(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setCurrentImageIndex(0); // Reset image index when changing project
    });
  };

  const goToProject = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    handleTransition(() => {
      setCurrentIndex(index);
      setCurrentImageIndex(0); // Reset image index when changing project
    });
  };

  const currentProject = projects[currentIndex];
  const projectImages = currentProject.images || [currentProject.imgUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {/* Image Slider Section */}
            <div className="space-y-3">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-[0px_6px_0px_0px_rgba(42,42,42,1)] h-48 sm:h-64 lg:h-80 group">
                <img
                  src={projectImages[currentImageIndex]}
                  alt={`${currentProject.serviceName} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                
                {/* Image Navigation Arrows */}
                {projectImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border-2 border-zinc-800 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800 stroke-[3]" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/90 border-2 border-zinc-800 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-800 stroke-[3]" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {projectImages.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-zinc-800/90 border-2 border-white rounded-lg">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {currentImageIndex + 1} / {projectImages.length}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {projectImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {projectImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-3 rounded-lg overflow-hidden transition-all ${
                        index === currentImageIndex
                          ? "border-orange-500 scale-105 shadow-[0px_4px_0px_0px_rgba(249,115,22,1)]"
                          : "border-zinc-800 hover:border-orange-300 shadow-[0px_3px_0px_0px_rgba(42,42,42,1)]"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-orange-500/20 border-2 border-orange-500" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details Section */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500 fill-orange-500" />
                  <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-orange-600 uppercase tracking-tight leading-tight">
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

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};