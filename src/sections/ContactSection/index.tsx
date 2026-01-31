import { useState } from "react";
import { 
  Mail, 
  Send, 
  RotateCcw, 
  Zap, 
  Sparkles,
  Target,
  Globe,
  MessageSquare,
  User,
  AtSign,
  Coffee,
  Heart,
  Star,
  Rocket,
  Activity,
  Clock,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Gamepad2,
  Phone,
  MapPin
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hp] = useState(100);
  const [xp, setXp] = useState(39);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setXp(prev => Math.min(prev + 15, 100));
      setIsSubmitting(false);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-yellow-50 via-yellow-100 to-orange-100 pt-16 pb-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-pulse" />
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white"
              style={{
                textShadow: '4px 4px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)',
                WebkitTextStroke: '2px rgba(0,0,0,0.2)'
              }}
            >
              CONTACT
            </h1>
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-zinc-600 text-sm md:text-base font-mono flex items-center justify-center gap-2 flex-wrap">
            <Target className="w-4 h-4" />
            Insert coin to establish connection • Tiflet, Morocco
            <Target className="w-4 h-4" />
          </p>
          
          {/* Status Bar */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xs text-zinc-500 font-mono">Status:</span>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full animate-pulse"></span>
              <span className="w-3 h-3 bg-yellow-400 border-2 border-zinc-800 rounded-full"></span>
              <span className="w-3 h-3 bg-red-400 border-2 border-zinc-800 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Contact Terminal */}
          <div className="relative">
            {/* Scanline Effect */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] rounded-3xl overflow-hidden z-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 2px, transparent 2px, transparent 4px)'
              }}
            ></div>

            <div className="bg-white border-6 border-zinc-800 rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] transition-all duration-200">
              {/* Terminal Header */}
              <div className="bg-yellow-100 border-b-6 border-zinc-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-400 border-2 border-zinc-800 rounded-full"></span>
                  <span className="w-4 h-4 bg-yellow-400 border-2 border-zinc-800 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
                  <span className="font-black uppercase text-sm ml-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message Terminal
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-mono hidden sm:flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  v2.0.25
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6 relative">
                {/* Success Overlay */}
                {isSuccess && (
                  <div className="absolute inset-0 bg-green-500/90 flex flex-col items-center justify-center z-20 rounded-b-2xl">
                    <CheckCircle2 className="w-20 h-20 text-white mb-4 animate-bounce" />
                    <p className="text-white font-black text-2xl uppercase">Message Sent!</p>
                    <p className="text-white/80 text-sm mt-2">+15 XP gained 🎮</p>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-wide mb-3">
                    <User className="w-4 h-4 text-orange-500" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your hero name..."
                    className="w-full px-5 py-4 bg-yellow-50 border-4 border-zinc-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all font-bold placeholder:text-zinc-400"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-wide mb-3">
                    <AtSign className="w-4 h-4 text-orange-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="w-full px-5 py-4 bg-yellow-50 border-4 border-zinc-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all font-bold placeholder:text-zinc-400"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-wide mb-3">
                    <MessageSquare className="w-4 h-4 text-orange-500" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Type your quest here..."
                    className="w-full px-5 py-4 bg-yellow-50 border-4 border-zinc-800 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all resize-none font-bold placeholder:text-zinc-400"
                    required
                  ></textarea>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Launch Message
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-white hover:bg-zinc-100 text-zinc-800 font-black py-4 px-8 rounded-xl border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <RotateCcw size={20} />
                    Reset
                  </button>
                </div>

                {/* Quick Contact Badges */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-4 border-zinc-800">
                  <a
                    href="mailto:khalidtourhzaoui@gmail.com"
                    className="flex-1 bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white font-black text-sm py-3 rounded-lg border-3 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Quick Email
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-black text-sm py-3 rounded-lg border-3 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <Globe size={16} />
                    Discord DM
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Right Panel - Profile & Status */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white border-6 border-zinc-800 rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] transition-all duration-200">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 border-b-6 border-zinc-800 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="font-black uppercase text-sm text-white">Developer Card</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 border-6 border-zinc-800 rounded-2xl shadow-xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                      <Gamepad2 className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 border-3 border-zinc-800 rounded-full px-3 py-1">
                      <span className="text-xs font-black text-white">ONLINE</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-3xl font-black mb-2">Khalid Khalid</h2>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <p className="text-lg text-zinc-600 font-bold">Web Developer</p>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-zinc-500 font-mono">
                      <Clock className="w-4 h-4" />
                      <span>Response: 24-48h</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-zinc-500 font-mono mt-1">
                      <Phone className="w-4 h-4" />
                      <span>+212 766-93-33-56</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-zinc-500 font-mono mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>Tiflet, Morocco</span>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="bg-yellow-50 border-3 border-zinc-800 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed text-zinc-700 font-semibold">
                      22-year-old junior web developer, passionate and versatile. Proficient in front-end and back-end technologies (React, Laravel, Spring Boot). Ready for new challenges and innovative projects! 🚀
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://khalid-tourhzaoui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-100 hover:bg-yellow-200 text-zinc-800 font-black text-sm py-4 rounded-xl border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    Portfolio
                  </a>
                  <button className="bg-yellow-100 hover:bg-yellow-200 text-zinc-800 font-black text-sm py-4 rounded-xl border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2">
                    <Target className="w-4 h-4" />
                    Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="bg-white border-6 border-zinc-800 rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden">
              <div className="bg-zinc-800 border-b-6 border-zinc-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <span className="font-black uppercase text-sm text-white flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Social Connect
                  </span>
                  <div className="flex gap-2">
                    <Zap className="w-6 h-6 bg-orange-500 p-1 rounded-full border-2 border-white text-white animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-3 gap-2">
                  {/* GitHub */}
                  <a
                    href="https://github.com/khalid-tourhzaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-zinc-800 hover:bg-zinc-900 border-3 border-zinc-900 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="GitHub"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/khalid-tourhzaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-blue-600 hover:bg-blue-700 border-3 border-blue-800 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-blue-400 hover:bg-blue-500 border-3 border-blue-600 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Twitter / X"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 border-3 border-purple-800 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>

                  {/* Discord */}
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 border-3 border-indigo-800 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Discord"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:khalidtourhzaoui@gmail.com"
                    className="group flex items-center justify-center bg-red-500 hover:bg-red-600 border-3 border-red-700 rounded-lg p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Email"
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}