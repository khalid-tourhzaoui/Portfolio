import { useState } from "react";
import React from "react";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Zap,
  Award,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
  FileCode,
  Rocket,
  Shield,
  Activity
} from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  type: "work" | "education";
  icon: any;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "DCHUIS",
    role: "Junior Web Developer",
    period: "December 2024 – March 2025",
    location: "Rabat • Internship",
    description: "Development of management applications for occupational medicine and organ transplants.",
    achievements: [
      "Developed SMTPP application to manage occupational medicine activities",
      "Integrated modules for medical visits, occupational risks and training",
      "Created statistical tools for workplace accidents and occupational diseases",
      "Developed AmaList to calculate MELD score and manage transplant waiting lists"
    ],
    tags: ["React", "Laravel", "MySQL", "REST API"],
    type: "work",
    icon: Activity
  },
  {
    id: 2,
    company: "RITECHCO",
    role: "Junior Web Developer",
    period: "April 2024 – June 2024",
    location: "Kénitra • Internship",
    description: "Development of an online booking platform for coaches.",
    achievements: [
      "Allows users to search routes and compare prices",
      "Online seat selection and booking system",
      "Simplified booking for coach trips across the country",
      "Modern and intuitive user interface"
    ],
    tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    type: "work",
    icon: Globe
  },
  {
    id: 3,
    company: "TASMIME WEB",
    role: "Junior Web Developer",
    period: "June 2023 – August 2023",
    location: "Casablanca • Internship",
    description: "Creation of a complete inventory management system including deliveries and orders.",
    achievements: [
      "Created inventory management system including deliveries and orders",
      "Developed features for smooth product flow management",
      "Integrated modules for tracking customer and supplier orders",
      "Supplier relationship management"
    ],
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    type: "work",
    icon: Database
  },
  {
    id: 4,
    company: "ARTM AGENCY",
    role: "Junior Web Developer",
    period: "January 2023 – March 2023",
    location: "Tiflet • Internship",
    description: "Development of a medical analysis management website for laboratory.",
    achievements: [
      "Developed medical analysis management site for laboratory",
      "Created features for patient management and analysis results",
      "Integrated modules for appointment scheduling",
      "Medical analysis results management"
    ],
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    type: "work",
    icon: FileCode
  }
];

const education: Experience[] = [
  {
    id: 5,
    company: "EST Kénitra",
    role: "Professional Bachelor's Degree",
    period: "2023 – 2024",
    location: "Kénitra",
    description: "Computer Engineering and Digital Governance – Higher School of Technology.",
    achievements: [
      "In-depth training in web and mobile development",
      "Specialization in digital governance and project management",
      "Mastery of software architectures and agile methodologies",
      "Practical projects in full stack development"
    ],
    tags: ["Bachelor's Degree", "Computer Engineering", "Digital Governance"],
    type: "education",
    icon: Award
  },
  {
    id: 6,
    company: "OFPPT Khémisset",
    role: "Specialized Technician",
    period: "2021 – 2023",
    location: "Khémisset",
    description: "Digital Development with specialization in Full Stack Web.",
    achievements: [
      "Complete training in front-end and back-end web development",
      "Mastery of React, Laravel and Spring Boot technologies",
      "Development of complete web projects from A to Z",
      "Learning databases and web architecture"
    ],
    tags: ["Diploma", "Digital Development", "Full Stack"],
    type: "education",
    icon: Code2
  },
  {
    id: 7,
    company: "L.Driss Benzekri",
    role: "High School Diploma",
    period: "2020 – 2021",
    location: "Tiflet",
    description: "High School Diploma in Physical Sciences with honors.",
    achievements: [
      "Strong scientific training in physics and mathematics",
      "Development of analytical and logical skills",
      "Foundation for further studies in computer science",
      "Honors obtained at high school diploma"
    ],
    tags: ["High School Diploma", "Physical Sciences"],
    type: "education",
    icon: BookOpen
  }
];

const allItems = [...experiences, ...education];

export const ExperienceContent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");
  
  const filteredItems = allItems.filter(item => item.type === activeTab);
  const selectedItem = filteredItems[selectedIndex];

  const nextItem = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevItem = () => {
    setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleTabChange = (tab: "work" | "education") => {
    setActiveTab(tab);
    setSelectedIndex(0);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400" />
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white" 
            style={{
              textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)',
              WebkitTextStroke: '2px rgba(0,0,0,0.2)'
            }}
          >
            EXPERIENCE
          </h2>
          <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400" />
        </div>
        <p className="text-zinc-100 text-xs sm:text-sm md:text-base leading-5 mt-3 font-mono flex items-center justify-center gap-2">
          <Target className="w-4 h-4" />
          Analog switchboard • CRT boot dossier
          <Target className="w-4 h-4" />
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => handleTabChange("work")}
            className={`flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-black uppercase border-3 sm:border-4 border-zinc-800 rounded-lg transition-all shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] ${
              activeTab === "work"
                ? "bg-yellow-400 text-zinc-800"
                : "bg-white text-zinc-800"
            }`}
          >
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            Work
          </button>
          <button
            onClick={() => handleTabChange("education")}
            className={`flex items-center gap-2 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-black uppercase border-3 sm:border-4 border-zinc-800 rounded-lg transition-all shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] ${
              activeTab === "education"
                ? "bg-yellow-400 text-zinc-800"
                : "bg-white text-zinc-800"
            }`}
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
            Education
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="bg-yellow-50 border-4 sm:border-6 md:border-8 border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_10px_0px_0px] md:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden flex flex-col">
          <div className="bg-white border-b-4 sm:border-b-6 md:border-b-8 border-zinc-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800" />
              <h3 className="text-xs sm:text-sm md:text-base font-black uppercase">SWITCHBOARD</h3>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 font-mono hidden sm:flex items-center gap-1">
              <Zap className="w-3 h-3" />
              Flip a toggle to route signal
            </span>
          </div>

          <div className="p-3 sm:p-4 md:p-6 lg:p-8 space-y-2 sm:space-y-3 md:space-y-4 flex-grow">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] transition-all ${
                    index === selectedIndex
                      ? 'bg-yellow-400'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-black uppercase truncate">
                      {item.company}
                    </span>
                    {index === selectedIndex && (
                      <Rocket className="bg-orange-500 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full border-2 border-zinc-800 animate-pulse flex-shrink-0 p-0.5 text-white" />
                    )}
                  </div>
                  <div className={`relative w-10 sm:w-12 md:w-16 h-5 sm:h-6 md:h-8 rounded-full border-3 sm:border-4 border-zinc-800 transition-colors flex-shrink-0 ${
                    index === selectedIndex ? 'bg-orange-500' : 'bg-zinc-300'
                  }`}>
                    <div className={`absolute top-0 h-full w-1/2 bg-white border-2 border-zinc-800 rounded-full shadow-md transition-transform ${
                      index === selectedIndex ? 'translate-x-full' : 'translate-x-0'
                    }`}></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-zinc-100 border-4 sm:border-6 md:border-8 border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_10px_0px_0px] md:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden flex flex-col">
          <div className="bg-white border-b-4 sm:border-b-6 md:border-b-8 border-zinc-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="bg-red-400 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full border-2 border-zinc-800"></span>
              <span className="bg-yellow-400 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full border-2 border-zinc-800"></span>
              <span className="bg-green-500 h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 rounded-full border-2 border-zinc-800"></span>
              <h3 className="text-xs sm:text-sm md:text-base font-black uppercase ml-1 sm:ml-2 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                CRT MONITOR
              </h3>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 font-mono hidden sm:flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Boot sequence on toggle
            </span>
          </div>

          <div className="relative bg-gradient-to-b from-zinc-50 to-zinc-100 p-3 sm:p-4 md:p-6 lg:p-8 flex-grow">
            <div 
              className="absolute inset-0 pointer-events-none" 
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 4px)'
              }}
            ></div>

            <div className="relative z-10">
              <div className="bg-yellow-100 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px]">
                <div className="flex items-center gap-2 mb-2">
                  {selectedItem.type === "work" ? (
                    <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  ) : (
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                  )}
                  <h4 className="text-sm sm:text-base md:text-lg font-black uppercase">
                    {selectedItem.role}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 mb-1 sm:mb-2">
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600" />
                  <p className="text-xs sm:text-sm md:text-base font-bold">
                    {selectedItem.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] sm:text-xs md:text-sm text-zinc-600 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {selectedItem.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    {selectedItem.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-6">
                {React.createElement(selectedItem.icon, {
                  className: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-500 flex-shrink-0"
                })}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-orange-500 uppercase break-words">
                  {selectedItem.company}
                </h3>
              </div>

              <div className="flex items-start gap-2 mb-3 sm:mb-4 md:mb-6">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-700">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mb-3 sm:mb-4 md:mb-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs sm:text-sm md:text-base font-black uppercase text-zinc-800">
                    Key Achievements
                  </span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                  {selectedItem.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-1.5 sm:gap-2 md:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span className="text-xs sm:text-sm font-black uppercase text-zinc-800">
                    Technologies
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedItem.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md border-2 border-zinc-800 text-[10px] sm:text-xs md:text-sm font-bold"
                    >
                      <Code2 className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 border-t-4 sm:border-t-6 md:border-t-8 border-zinc-800 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between flex-shrink-0">
            <p className="text-white text-[10px] sm:text-xs md:text-sm font-mono hidden sm:flex items-center gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              Toggles route signal • Enter to skip boot
            </p>
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 ml-auto">
              <button
                onClick={prevItem}
                className="flex items-center gap-1 bg-blue-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded border-2 border-zinc-800 font-bold text-[10px] sm:text-xs md:text-sm hover:bg-blue-600 transition-colors shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px]"
              >
                ◀ <span className="hidden sm:inline">PREV</span>
              </button>
              <button
                onClick={nextItem}
                className="flex items-center gap-1 bg-blue-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded border-2 border-zinc-800 font-bold text-[10px] sm:text-xs md:text-sm hover:bg-blue-600 transition-colors shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px]"
              >
                <span className="hidden sm:inline">NEXT</span> ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};