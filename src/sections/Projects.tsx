import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Database, Smartphone, GraduationCap, Brain, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Igris',
      description: 'Advanced PyQt6 vulnerability scanner with hacker-themed GUI, featuring SQLi/XSS/CSRF detection, scan scheduler, and real attack engine.',
      tech: ['Python', 'PyQt6', 'SQLite', 'Cybersecurity'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'Cybersecurity'
    },
    {
      title: 'Laboratory Management System',
      description: 'Comprehensive GUI-based platform for lab inventory management and user administration with real-time tracking capabilities.',
      tech: ['Python', 'GUI', 'Database', 'Management'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Enterprise Software'
    },
    {
      title: 'Attendance Management System',
      description: 'Student attendance tracking system with database integration, automated reporting, and analytics dashboard.',
      tech: ['Python', 'SQL Server', 'Analytics', 'Automation'],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Education'
    },
    {
      title: 'PandasVPN',
      description: 'Flutter mobile application for VPN control and status monitoring with intuitive user interface and real-time connectivity status.',
      tech: ['Flutter', 'Dart', 'Mobile', 'VPN'],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Mobile App'
    },
    {
      title: 'Kindergarten Flashcards Tool',
      description: 'Interactive teaching aid designed for ESL instruction in China, featuring gamified learning and progress tracking.',
      tech: ['Python', 'GUI', 'Education', 'Teaching'],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Education'
    },
    {
      title: 'HSK4 Vocabulary Trainer',
      description: 'Python-based vocabulary training application for Chinese language learners with spaced repetition algorithm.',
      tech: ['Python', 'Learning', 'Algorithm', 'Language'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Education'
    }
  ];

  return (
    <section id="projects" className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in cybersecurity, software development, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                      <Github className="w-5 h-5 text-gray-300 hover:text-white" />
                    </button>
                    <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors">
                      <ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
            <Wrench className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Stay tuned for more innovative solutions in cybersecurity and software development.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105">
              View All on GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;