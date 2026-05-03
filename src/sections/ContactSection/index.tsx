import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from '@emailjs/browser';
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
  Star,
  Activity,
  Clock,
  CheckCircle2,
  Github,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  FileDown,
  MessageCircleMore,
  XCircle
} from "lucide-react";
import ContactImage from '../../../public/assets/profile-BppvMIsH.webp'
import { ContactBackground } from "./ContactBackground";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Configuration EmailJS manquante. Vérifiez vos variables d'environnement.");
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("Message envoyé avec succès!", response);
      setIsSuccess(true);
      
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
      
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setIsError(true);
      
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Échec de l'envoi. Veuillez réessayer.");
      }
      
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsError(false);
  };

  return (
    <section id="contact" className="relative bg-emerald-800 rounded-t-[48px] sm:rounded-t-[64px] lg:rounded-t-[72px] flex items-center justify-center min-h-screen py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
      <ContactBackground />
      
      <div className="relative w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400" />
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-tight text-white"
              style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)',
                WebkitTextStroke: '2px rgba(0,0,0,0.2)'
              }}
            >
              CONTACT
            </h1>
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-400" />
          </div>
          <p className="text-zinc-100 text-xs sm:text-sm md:text-base leading-5 mt-3 font-mono flex items-center justify-center gap-2 flex-wrap">
            <Target className="w-4 h-4" />
            Insert coin to establish connection • Tiflet, Morocco
            <Target className="w-4 h-4" />
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xs text-zinc-100 font-mono">Status:</span>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 bg-green-500 border-2 border-zinc-800 rounded-full animate-pulse"></span>
              <span className="w-3 h-3 bg-yellow-400 border-2 border-zinc-800 rounded-full"></span>
              <span className="w-3 h-3 bg-red-400 border-2 border-zinc-800 rounded-full"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="relative">
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.03] rounded-3xl overflow-hidden z-10"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 2px, transparent 2px, transparent 4px)'
              }}
            ></div>

            <div className="bg-white border-4 sm:border-6 md:border-8 border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_10px_0px_0px] md:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden hover:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_14px_0px_0px] md:hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] transition-all duration-200">
              <div className="bg-yellow-100 border-b-4 sm:border-b-6 md:border-b-8 border-zinc-800 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-red-400 border-2 border-zinc-800 rounded-full"></span>
                  <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-yellow-400 border-2 border-zinc-800 rounded-full"></span>
                  <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 border-2 border-zinc-800 rounded-full"></span>
                  <span className="font-black uppercase text-xs sm:text-sm ml-2 sm:ml-3 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Message Terminal
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-mono hidden sm:flex items-center gap-1">
                  <Activity className="w-3 h-3" />
                  v2.0.25
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 relative">
                {isSuccess && (
                  <div className="absolute inset-0 bg-green-500/90 flex flex-col items-center justify-center z-20 rounded-b-xl sm:rounded-b-2xl">
                    <CheckCircle2 className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white mb-4 animate-bounce" />
                    <p className="text-white font-black text-xl sm:text-2xl uppercase">Message Sent!</p>
                    <p className="text-white/80 text-xs sm:text-sm mt-2">+15 XP gained 🎮</p>
                  </div>
                )}

                {isError && (
                  <div className="absolute inset-0 bg-red-500/90 flex flex-col items-center justify-center z-20 rounded-b-xl sm:rounded-b-2xl px-4">
                    <XCircle className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-white mb-4 animate-pulse" />
                    <p className="text-white font-black text-xl sm:text-2xl uppercase">Error!</p>
                    <p className="text-white/80 text-xs sm:text-sm mt-2 text-center">{errorMessage}</p>
                  </div>
                )}

                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wide mb-2 sm:mb-3">
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your hero name..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-yellow-50 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all font-bold placeholder:text-zinc-400"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wide mb-2 sm:mb-3">
                    <AtSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-yellow-50 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all font-bold placeholder:text-zinc-400"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-black uppercase tracking-wide mb-2 sm:mb-3">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Type your quest here..."
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-yellow-50 border-3 sm:border-4 border-zinc-800 rounded-lg sm:rounded-xl text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-orange-400 transition-all resize-none font-bold placeholder:text-zinc-400"
                    required
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="submit"
                    aria-label="Send Message"
                    disabled={isSubmitting}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-3 sm:py-4 rounded-lg sm:rounded-xl border-3 sm:border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Launch Message
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-white hover:bg-zinc-100 text-zinc-800 font-black py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl border-3 sm:border-4 border-zinc-800 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_6px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] hover:translate-y-1 transition-all duration-150 flex items-center justify-center gap-2 uppercase tracking-wide text-sm sm:text-base"
                    aria-label="Reset Form"
                  >
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Section Developer Card et Social Connect - inchangée */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border-4 sm:border-6 md:border-8 border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_10px_0px_0px] md:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden hover:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_14px_0px_0px] md:hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] transition-all duration-200">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 border-b-4 sm:border-b-6 md:border-b-8 border-zinc-800 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="font-black uppercase text-xs sm:text-sm text-white">Developer Card</span>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 border-4 sm:border-6 border-zinc-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform hover:rotate-6 transition-transform">
                      <img 
                        src={ContactImage}
                        loading="lazy"
                        decoding="async"
                        alt="Khalid Tourhzaoui Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl font-black mb-2">Khalid Tourhzaoui</h2>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                      <p className="text-base sm:text-lg text-zinc-600 font-bold">Web Developer</p>
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-zinc-500 font-mono">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Response: 24-48h</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>+212 766-93-33-56</span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>Tiflet, Morocco</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 sm:border-3 border-zinc-800 rounded-lg sm:rounded-xl p-2 sm:p-2 mb-2 sm:mb-1">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm leading-relaxed text-zinc-700 font-semibold">
                      Fast learner with strong problem-solving skills and attention to detail. 
                      I enjoy collaborating on challenging projects and am always eager to explore 
                      new technologies. Available for freelance work, internships, and full-time opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-4 sm:border-6 md:border-8 border-zinc-800 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-[rgba(0,0,0,0.9)_0px_8px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_10px_0px_0px] md:shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] overflow-hidden">
              <div className="bg-zinc-800 border-b-4 sm:border-b-6 md:border-b-8 border-zinc-800 px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4">
                <div className="flex items-center justify-between">
                  <span className="font-black uppercase text-xs sm:text-sm text-white flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Social Connect
                  </span>
                  <div className="flex gap-2">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 p-1 rounded-full border-2 border-white text-white animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href="https://github.com/khalid-tourhzaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-zinc-800 hover:bg-zinc-900 border-2 sm:border-3 border-zinc-900 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>

                  <a
                    href="https://linkedin.com/in/khalid-tourhzaoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-blue-600 hover:bg-blue-700 border-2 sm:border-3 border-blue-800 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>

                  <a
                    href="/public/MyResume.pdf"
                    download="Khalid_Khalid_Resume.pdf"
                    className="group flex items-center justify-center bg-orange-500 hover:bg-orange-600 border-2 sm:border-3 border-orange-700 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Download Resume"
                  >
                    <FileDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>

                  <a
                    href="https://www.instagram.com/the_re_khalid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 border-2 sm:border-3 border-purple-800 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>

                  <a
                    href="https://wa.me/212766933356"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center bg-green-600 hover:bg-green-700 border-2 sm:border-3 border-green-800 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="WhatsApp"
                  >
                    <MessageCircleMore className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>

                  <a
                    href="mailto:khalidtourhzaoui@gmail.com"
                    className="group flex items-center justify-center bg-red-500 hover:bg-red-600 border-2 sm:border-3 border-red-700 rounded-lg p-2 sm:p-2.5 transition-all hover:scale-110 shadow-[rgba(0,0,0,0.9)_0px_2px_0px_0px] sm:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_0px_3px_0px_0px] sm:hover:shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}