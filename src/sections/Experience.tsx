import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Application Security Intern',
      company: 'VerixSoft',
      location: 'Shanghai, China',
      period: 'Mar 2023 - Aug 2025',
      type: 'Internship',
      responsibilities: [
        'Engineered and deployed a comprehensive web application, integrating multiple interactive features that enhanced user engagement by 40%, providing an immersive platform for visitors to explore professional information seamlessly',
        'Optimized website performance and security protocols, resulting in a 30% reduction in load times and fortifying defenses against common vulnerabilities, ensuring reliable access for over 1,000 monthly visitors.',
        'Collaborated with cross-functional teams to design intuitive navigation and dynamic content updates, increasing visitor retention time by 25% and encouraging deeper user interaction beyond traditional resumes'
      ],
      technologies: ['Python', 'Cybersecurity', 'Information Security', 'Software Security'],
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Intern',
      company: 'SentinelSec',
      location: 'Singapore (Remote)',
      period: 'Jan 2024 - Jun 2025',
      type: 'internship',
      responsibilities: [
        'Crafted and deployed interactive web applications that serve as comprehensive digital portfolios, enhancing user engagement by providing seamless access to personal and professional information, resulting in a 40% increase in visitor interactions.',
        'Integrated advanced security protocols into website architecture to safeguard sensitive data, reducing vulnerabilities by 60% and ensuring compliance with cybersecurity best practices.',
        'Optimized website performance through code refinement and resource management, boosting load times by 35%, which contributed to improved user experience and increased revisit rates.'
      ],
      technologies: ['Python', 'Git & GitHub', 'Burp Suite', "OWASP ZAP", 'CVE Analysis'],
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cybersecurity Research & Development',
      company: 'Personal Projects',
      location: 'China',
      period: '2021 - 2025',
      type: 'Self-Directed',
      responsibilities: [
        'Developed Igris vulnerability scanner with advanced detection capabilities',
        'Researched and implemented SQLi, XSS, and CSRF detection algorithms',
        'Created automated security testing frameworks',
        'Analyzed security vulnerabilities in web applications',
        'Built secure coding practices and security-first development approaches'
      ],
      technologies: ['Python', 'PyQt6', 'Cybersecurity', 'Penetration Testing', 'Vulnerability Assessment'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      title: 'Igris Vulnerability Scanner',
      description: 'Developed a sophisticated vulnerability scanner with real-time detection capabilities',
      impact: 'Enhanced security testing efficiency by 300%'
    },
    {
      title: 'Digital Teaching Innovation',
      description: 'Created interactive ESL learning tools that improved student engagement',
      impact: 'Increased student participation by 85%'
    },
    {
      title: 'Software Development',
      description: 'Built multiple enterprise-level Softwares with modern technologies',
      impact: 'Delivered 10+ successful projects with 100% client satisfaction'
    }
  ];

  return (
    <section id="experience" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey spanning cybersecurity, Software development, and education.
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <div className="md:ml-20 bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-semibold">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold">
                  {achievement.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;