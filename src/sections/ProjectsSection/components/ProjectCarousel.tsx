import { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Zap,
  Package,
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
  Languages,
  Brain,
  Wand2,
  CreditCard,
} from "lucide-react";

// Portfolio Project Images
import portfolioImg1 from "../../../../public/assets/portfolio-project/image_n_1.webp";
import portfolioImg2 from "../../../../public/assets/portfolio-project/image_n_2.webp";
import portfolioImg3 from "../../../../public/assets/portfolio-project/image_n_3.webp";
import portfolioImg4 from "../../../../public/assets/portfolio-project/image_n_4.webp";
import portfolioImg5 from "../../../../public/assets/portfolio-project/image_n_5.webp";

// Jouska Project Images
import jouskaImg1 from "../../../../public/assets/jouska-project/image_n_1.webp";
import jouskaImg2 from "../../../../public/assets/jouska-project/image_n_2.webp";
import jouskaImg3 from "../../../../public/assets/jouska-project/image_n_3.webp";
import jouskaImg4 from "../../../../public/assets/jouska-project/image_n_4.webp";
import jouskaImg5 from "../../../../public/assets/jouska-project/image_n_5.webp";
import jouskaImg6 from "../../../../public/assets/jouska-project/image_n_6.webp";

// AI Legal Project Images
import aiLegalImg1 from "../../../../public/assets/ai-legal-project/image_n_1.webp";
import aiLegalImg2 from "../../../../public/assets/ai-legal-project/image_n_2.webp";
import aiLegalImg3 from "../../../../public/assets/ai-legal-project/image_n_3.webp";

// SMTPP Project Images
import smtppImg1 from "../../../../public/assets/smtpp-project/image_n_6.webp";
import smtppImg2 from "../../../../public/assets/smtpp-project/image_n_1.webp";
import smtppImg3 from "../../../../public/assets/smtpp-project/image_n_2.webp";
import smtppImg4 from "../../../../public/assets/smtpp-project/image_n_3.webp";
import smtppImg5 from "../../../../public/assets/smtpp-project/image_n_4.webp";
import smtppImg6 from "../../../../public/assets/smtpp-project/image_n_5.webp";

// Tontine Project Images
import tontineImg1 from "../../../../public/assets/tontine-project/image_n_1.webp";
import tontineImg2 from "../../../../public/assets/tontine-project/image_n_2.webp";
import tontineImg3 from "../../../../public/assets/tontine-project/image_n_3.webp";
import tontineImg4 from "../../../../public/assets/tontine-project/image_n_4.webp";
import tontineImg5 from "../../../../public/assets/tontine-project/image_n_5.webp";
import tontineImg6 from "../../../../public/assets/tontine-project/image_n_6.webp";

// BG Removal Project Images
import bgRemovalImg1 from "../../../../public/assets/bg-removal-project/image_n_1.webp";
import bgRemovalImg2 from "../../../../public/assets/bg-removal-project/image_n_2.webp";
import bgRemovalImg3 from "../../../../public/assets/bg-removal-project/image_n_3.webp";
import bgRemovalImg4 from "../../../../public/assets/bg-removal-project/image_n_4.webp";
import bgRemovalImg5 from "../../../../public/assets/bg-removal-project/image_n_5.webp";

// Weather Project Images
import weatherImg1 from "../../../../public/assets/weather-project/image_n_1.webp";
import weatherImg2 from "../../../../public/assets/weather-project/image_n_2.webp";
import weatherImg3 from "../../../../public/assets/weather-project/image_n_3.webp";

// Translate Project Images
import translateImg1 from "../../../../public/assets/translate-project/image_n_1.webp";
import translateImg2 from "../../../../public/assets/translate-project/image_n_2.webp";

// YouTube Sentiment Project Images
import youtubeImg1 from "../../../../public/assets/youtube-sentiment-project/image_n_1.webp";
import youtubeImg2 from "../../../../public/assets/youtube-sentiment-project/image_n_2.webp";
import youtubeImg3 from "../../../../public/assets/youtube-sentiment-project/image_n_3.webp";
import youtubeImg4 from "../../../../public/assets/youtube-sentiment-project/image_n_4.webp";
import youtubeImg5 from "../../../../public/assets/youtube-sentiment-project/image_n_5.webp";

// AI Resume Project Images
import aiResumeImg1 from "../../../../public/assets/ai-resume-project/image_n_1.webp";
import aiResumeImg2 from "../../../../public/assets/ai-resume-project/image_n_2.webp";
import aiResumeImg3 from "../../../../public/assets/ai-resume-project/image_n_3.webp";
import aiResumeImg4 from "../../../../public/assets/ai-resume-project/image_n_4.webp";
import aiResumeImg5 from "../../../../public/assets/ai-resume-project/image_n_5.webp";
import aiResumeImg6 from "../../../../public/assets/ai-resume-project/image_n_6.webp";

// marKoub Project Images
import markoubImg1 from "../../../../public/assets/markoub-project/image_n_1.webp";
import markoubImg2 from "../../../../public/assets/markoub-project/image_n_2.webp";
import markoubImg3 from "../../../../public/assets/markoub-project/image_n_3.webp";
import markoubImg4 from "../../../../public/assets/markoub-project/image_n_4.webp";
import markoubImg5 from "../../../../public/assets/markoub-project/image_n_5.webp";
import markoubImg6 from "../../../../public/assets/markoub-project/image_n_6.webp";
import markoubImg7 from "../../../../public/assets/markoub-project/image_n_7.webp";
import markoubImg8 from "../../../../public/assets/markoub-project/image_n_8.webp";
import markoubImg9 from "../../../../public/assets/markoub-project/image_n_9.webp";
import markoubImg10 from "../../../../public/assets/markoub-project/image_n_10.webp";
import markoubImg11 from "../../../../public/assets/markoub-project/image_n_11.webp";

// Finance Tracker Project Images
import financeImg1 from "../../../../public/assets/finance-tracker-project/image_n_1.webp";
import financeImg2 from "../../../../public/assets/finance-tracker-project/image_n_2.webp";
import financeImg3 from "../../../../public/assets/finance-tracker-project/image_n_3.webp";
import financeImg4 from "../../../../public/assets/finance-tracker-project/image_n_4.webp";
import financeImg5 from "../../../../public/assets/finance-tracker-project/image_n_5.webp";
import financeImg6 from "../../../../public/assets/finance-tracker-project/image_n_6.webp";
import financeImg7 from "../../../../public/assets/finance-tracker-project/image_n_7.webp";

// WC2026 Bracket Project Images
import wc2026Img1 from "../../../../public/assets/wc2026-project/image_n_1.webp";
import wc2026Img2 from "../../../../public/assets/wc2026-project/image_n_2.webp";
import wc2026Img3 from "../../../../public/assets/wc2026-project/image_n_3.webp";
import wc2026Img4 from "../../../../public/assets/wc2026-project/image_n_4.webp";
import wc2026Img5 from "../../../../public/assets/wc2026-project/image_n_5.webp";
import wc2026Img6 from "../../../../public/assets/wc2026-project/image_n_6.webp";
import wc2026Img7 from "../../../../public/assets/wc2026-project/image_n_7.webp";
import wc2026Img8 from "../../../../public/assets/wc2026-project/image_n_8.webp";
import wc2026Img9 from "../../../../public/assets/wc2026-project/image_n_9.webp";
import wc2026Img10 from "../../../../public/assets/wc2026-project/image_n_10.webp";
interface Project {
  id: number;
  serviceName: string;
  description: string;
  tools: { icon: React.ReactNode; name: string }[];
  link: string;
  imgUrl: string;
  images?: string[];
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
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      {
        icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Radix UI",
      },
      {
        icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "React Router",
      },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://khalidtourhzaoui.vercel.app/",
    imgUrl: portfolioImg1,
    images: [
      portfolioImg1,
      portfolioImg2,
      portfolioImg3,
      portfolioImg4,
      portfolioImg5,
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
      {
        icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Spring Boot",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "OpenAI" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Wand2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "DALL-E" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "JWT" },
    ],
    link: "https://github.com/khalid-tourhzaoui/jouska-ai",
    imgUrl: jouskaImg1,
    images: [
      jouskaImg1,
      jouskaImg2,
      jouskaImg3,
      jouskaImg4,
      jouskaImg5,
      jouskaImg6,
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
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />, name: "OpenAI" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://legal-ai-morocco.vercel.app/",
    imgUrl: aiLegalImg1,
    images: [aiLegalImg1, aiLegalImg2, aiLegalImg3],
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
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Sanctum" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "API REST" },
    ],
    link: "https://github.com/khalid-tourhzaoui/laravel-react-smtpp-tailadmin",
    imgUrl: smtppImg1,
    images: [smtppImg1, smtppImg2, smtppImg3, smtppImg4, smtppImg5, smtppImg6],
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
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Sanctum" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "API REST" },
    ],
    link: "https://github.com/khalid-tourhzaoui/laravel-react-tontine-tailadmin",
    imgUrl: tontineImg1,
    images: [
      tontineImg1,
      tontineImg2,
      tontineImg3,
      tontineImg4,
      tontineImg5,
      tontineImg6,
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
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Node.js" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Express" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MongoDB" },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "AI" },
      { icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Multer" },
    ],
    link: "https://github.com/votre-username/bg-removal",
    imgUrl: bgRemovalImg1,
    images: [
      bgRemovalImg1,
      bgRemovalImg2,
      bgRemovalImg3,
      bgRemovalImg4,
      bgRemovalImg5,
    ],
    features: [
      "AI-powered background removal with drag-and-drop upload",
      "Interactive before/after slider for result comparison",
      "Credit-based system with secure payment integration and JWT authentication",
    ],
  },
  {
    id: 7,
    serviceName: "ADVANCED WEATHER APP",
    description:
      "Comprehensive weather application with real-time data, air quality monitoring (AQI), UV index, 5-day forecasts, and interactive Mapbox integration powered by OpenWeather API.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Shadcn" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Mapbox" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://github.com/khalid-tourhzaoui/WEATHER-APP",
    imgUrl: weatherImg1,
    images: [weatherImg1, weatherImg2, weatherImg3],
    features: [
      "Real-time weather with air quality index and UV metrics",
      "Interactive Mapbox integration for weather visualization",
      "5-day forecast with hourly details and pollution data",
    ],
  },
  {
    id: 8,
    serviceName: "SMART LANGUAGE CONVERTER",
    description:
      "AI-powered translation app with real-time text translation, text-to-speech, speech recognition, file upload, and URL content extraction for seamless multilingual communication.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Layout className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Next.js" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      {
        icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Speech API",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      {
        icon: <Languages className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Groq AI",
      },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://text-translate-ai.vercel.app/",
    imgUrl: translateImg1,
    images: [translateImg1, translateImg2],
    features: [
      "Real-time AI translation with speech recognition and text-to-speech",
      "File upload (TXT, RTF, DOC, DOCX) and URL content extraction",
      "Support for 100+ languages with smart language detection",
    ],
  },
  {
    id: 9,
    serviceName: "YOUTUBE SENTIMENT ANALYZER",
    description:
      "AI-powered sentiment analysis platform for YouTube comments with real-time data visualization, multilingual support, and comprehensive analytics dashboard using NLP and machine learning.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "TypeScript" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Flask" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Python" },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "NLP" },
      {
        icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "YouTube API",
      },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Radix UI" },
    ],
    link: "https://github.com/khalid-tourhzaoui/youtube-sentiment-app",
    imgUrl: youtubeImg1,
    images: [youtubeImg1, youtubeImg2, youtubeImg3, youtubeImg4, youtubeImg5],
    features: [
      "AI sentiment analysis with positive/negative/neutral classification using NLP",
      "Interactive charts for sentiment distribution and language analytics",
      "Real-time YouTube data extraction with video metadata and comment processing",
    ],
  },
  {
    id: 10,
    serviceName: "AI RESUME BUILDER",
    description:
      "Full-stack intelligent resume builder powered by Laravel and React with Google Gemini AI integration for content generation, OAuth social authentication, brutalist design system, and comprehensive CV management with public/private sharing.",
    tools: [
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Laravel" },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      {
        icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Inertia.js",
      },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Gemini AI" },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      {
        icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "PDF Export",
      },
      { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "OAuth" },
    ],
    link: "https://github.com/khalid-tourhzaoui/AI-RESUME-BUILDER-APP",
    imgUrl: aiResumeImg1,
    images: [
      aiResumeImg1,
      aiResumeImg2,
      aiResumeImg3,
      aiResumeImg4,
      aiResumeImg5,
      aiResumeImg6,
    ],
    features: [
      "AI-powered content generation with Google Gemini for summaries and descriptions",
      "OAuth authentication (Google/GitHub) with Laravel Socialite and complete user management",
      "Brutalist design with real-time preview, PDF export, and public/private CV sharing system",
    ],
  },
  {
    id: 11,
    serviceName: "MARKOUB.MA - PLATFORM",
    description:
      "Full-stack Moroccan bus ticket reservation platform connecting travelers to partner carriers (CTM, Ghazala, Pullman…). Features real-time seat selection, 2-minute seat lock, Stripe payments, Art Déco PDF tickets with QR codes, and a multi-role admin dashboard.",
    tools: [
      {
        icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Laravel 11",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React 18" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Sanctum" },
      {
        icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Stripe",
      },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />, name: "jsPDF" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
    ],
    link: "https://github.com/khalid-tourhzaoui/laravel-react-markoub",
    imgUrl: markoubImg1,
    images: [
      markoubImg1,
      markoubImg2,
      markoubImg3,
      markoubImg4,
      markoubImg5,
      markoubImg6,
      markoubImg7,
      markoubImg8,
      markoubImg9,
      markoubImg10,
      markoubImg11,
    ],
    features: [
      "Interactive bus seat plan with real-time availability and 2-minute reservation lock",
      "Stripe payment integration with instant confirmation emails and Art Déco PDF boarding passes",
      "Multi-role dashboard (admin / chef / responsable / user) with analytics, revenue tracking, and full CRUD management",
    ],
  },
  {
    id: 12,
    serviceName: "PERSONAL FINANCE TRACKER",
    description:
      "Full-stack personal finance management application built with Spring Boot and React. Features complete transaction tracking, category management, monthly budgets with visual progress alerts, and a real-time dashboard — all wrapped in a cohesive emerald design system with dark mode support.",
    tools: [
      {
        icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Spring Boot",
      },
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MySQL" },
      { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "JWT" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      {
        icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Spring Security",
      },
      { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "REST API" },
    ],
    link: "https://github.com/khalid-tourhzaoui/personal-finance-tracker",
    imgUrl: financeImg1,
    images: [
      financeImg1,
      financeImg2,
      financeImg3,
      financeImg4,
      financeImg5,
      financeImg6,
      financeImg7,
    ],
    features: [
      "Complete transaction management with list/card toggle, multi-filter search, and real-time summary (balance, income, expenses)",
      "Monthly budget system per category with 3-level visual progress alerts (green / orange / red) following YNAB/Mint international standards",
      "Emerald design system with Diamond Pattern texture, full dark mode.",
    ],
  },
  {
    id: 13,
    serviceName: "WC2026 BRACKET",
    description:
      "Full-stack World Cup 2026 bracket prediction app with OTP authentication, drag-and-drop group stage, K.O. tree (desktop mirror + mobile tabs), scoring system, private leaderboards, and SEO score 100 on Lighthouse. Deployed on Vercel with MongoDB Atlas.",
    tools: [
      { icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "React" },
      { icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vite" },
      {
        icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Node/Express",
      },
      { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "MongoDB" },
      {
        icon: <Paintbrush className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Tailwind",
      },
      { icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Zustand" },
      {
        icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
        name: "Framer Motion",
      },
      { icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Vercel" },
    ],
    link: "https://wc2026bracket.vercel.app/",
    imgUrl: wc2026Img1,
    images: [
      wc2026Img1,
      wc2026Img2,
      wc2026Img3,
      wc2026Img4,
      wc2026Img5,
      wc2026Img6,
      wc2026Img7,
      wc2026Img8,
      wc2026Img9,
      wc2026Img10,
    ],
    features: [
      "OTP email authentication, drag-and-drop group stage for 48 teams across 12 groups, and 3rd-place selection with real country flags",
      "Interactive K.O. bracket with auto-propagation of winners — desktop mirror tree + mobile tab view (R32 → Final)",
      "Scoring engine vs official results, private group leaderboards, mock mode before tournament start, and Lighthouse 100 SEO",
    ],
  },
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
      setCurrentImageIndex(0);
    });
  };

  const prevProject = () => {
    handleTransition(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setCurrentImageIndex(0);
    });
  };

  const goToProject = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    handleTransition(() => {
      setCurrentIndex(index);
      setCurrentImageIndex(0);
    });
  };

  const currentProject = projects[currentIndex];
  const projectImages = currentProject.images || [currentProject.imgUrl];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length,
    );
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
              <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-[0px_6px_0px_0px_rgba(42,42,42,1)] h-48 sm:h-64 lg:h-80 group">
                <img
                  src={projectImages[currentImageIndex]}
                  loading="lazy"
                  decoding="async"
                  alt={`${currentProject.serviceName} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />

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

                {projectImages.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-zinc-800/90 border-2 border-white rounded-lg">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {currentImageIndex + 1} / {projectImages.length}
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 gap-1">
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
                      loading="lazy"
                      decoding="async"
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-orange-500/20 border-2 border-orange-500" />
                    )}
                  </button>
                ))}
              </div>
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
              aria-label="Previous Project"
              onClick={prevProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-zinc-800"
            >
              <ChevronLeft className="w-4 h-4 stroke-[3]" />
              <span className="hidden sm:inline">Prev</span>
            </button>
            <button
              aria-label="Next Project"
              onClick={nextProject}
              disabled={isAnimating}
              className="flex items-center gap-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-black uppercase bg-white border-2 border-zinc-800 rounded-lg shadow-[0px_3px_0px_0px_rgba(42,42,42,1)] hover:shadow-[0px_1px_0px_0px_rgba(42,42,42,1)] hover:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-zinc-800"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-[140px] sm:max-w-none">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isAnimating}
                aria-label={`Go to project ${index + 1}`}
                className={`flex-shrink-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 border-2 border-zinc-800 rounded-full transition-all ${
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
