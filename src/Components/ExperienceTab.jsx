import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceTab = () => {
  const experiences = [
    {
      company: 'Freelance',
      role: 'Full Stack Developer',
      period: '2021 - Present',
      location: 'Remote',
      description: 'Developed and maintained multiple web applications for clients, focusing on scalable architecture and user experience.',
      projects: ['E-commerce Platform', 'CRM System', 'Portfolio Websites'],
      color: 'from-orange-600 to-red-600',
    },
    {
      company: 'Various Companies',
      role: 'Web Developer Intern',
      period: '2020 - 2021',
      location: 'Morocco',
      description: 'Gained hands-on experience in web development, collaborating with teams on real-world projects.',
      projects: ['Internal Tools', 'Landing Pages', 'APIs'],
      color: 'from-amber-600 to-orange-600',
    },
    {
      company: 'University Projects',
      role: 'Computer Science Student',
      period: '2019 - 2020',
      location: 'Academic',
      description: 'Built foundational projects while studying computer science concepts and best practices.',
      projects: ['Academic Projects', 'Learning Exercises', 'Team Projects'],
      color: 'from-red-600 to-orange-600',
    },
  ];

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 to-red-200"></div>
          
          {/* Experience card */}
          <div className="ml-12">
            <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 
            hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500">
              
              {/* Timeline dot */}
              <div className="absolute -left-14 top-6 w-8 h-8 rounded-full border-4 border-white bg-gradient-to-r from-orange-600 to-red-600 shadow-lg"></div>
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium`}>
                  {exp.company}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-4">{exp.description}</p>
              
              {/* Projects */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Projects:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((project, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm border border-orange-200">
                      {project}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-orange-200">
                <span className="text-sm text-gray-600">Full-time / Contract</span>
                <button className="flex items-center gap-1 text-orange-600 hover:text-orange-700 text-sm font-medium">
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${exp.color} opacity-10`}></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTab;