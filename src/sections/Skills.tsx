import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Database, Smartphone, Globe, Terminal, Cpu, Lock } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 90, color: 'bg-yellow-400' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-300' },
        { name: 'SQL', level: 80, color: 'bg-blue-400' },
        { name: 'C/C++', level: 75, color: 'bg-blue-500' },
        { name: 'HTML/CSS', level: 88, color: 'bg-orange-400' },
      ]
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Penetration Testing', level: 85, color: 'bg-red-400' },
        { name: 'Vulnerability Assessment', level: 90, color: 'bg-red-500' },
        { name: 'SQL Injection', level: 88, color: 'bg-orange-400' },
        { name: 'XSS Detection', level: 85, color: 'bg-orange-500' },
        { name: 'Security Auditing', level: 80, color: 'bg-red-300' },
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: <Terminal className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Flutter', level: 80, color: 'bg-blue-400' },
        { name: 'PyQt6', level: 85, color: 'bg-green-400' },
        { name: 'React', level: 75, color: 'bg-blue-300' },
        { name: 'Git', level: 85, color: 'bg-orange-400' },
        { name: 'Docker', level: 70, color: 'bg-blue-500' },
      ]
    },
    {
      title: 'Databases & Systems',
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'SQL Server', level: 85, color: 'bg-blue-600' },
        { name: 'SQLite', level: 80, color: 'bg-gray-400' },
        { name: 'System Administration', level: 75, color: 'bg-green-400' },
        { name: 'Network Security', level: 80, color: 'bg-red-400' },
        { name: 'Linux', level: 78, color: 'bg-yellow-400' },
      ]
    }
  ];

  const certifications = [
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'Self-Taught & Practical Experience',
      icon: <Lock className="w-6 h-6" />,
      color: 'text-red-400'
    },
    {
      name: 'Software Development',
      issuer: 'Multiple Projects & Freelance Work',
      icon: <Globe className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      name: 'Mobile App Development',
      issuer: 'Flutter & Dart Expertise',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'text-green-400'
    },
    {
      name: 'System Architecture',
      issuer: 'Enterprise Project Experience',
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="skills" className="min-h-screen pt-24 pb-16 px-4">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and expertise across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Professional Expertise
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform ${cert.color}`}>
                  {cert.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly updating my skills, learning new frameworks, 
              and staying current with the latest cybersecurity threats and mitigation strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50">
                Currently Learning: AI/ML Security
              </span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50">
                Next: Cloud Security
              </span>
              <span className="px-4 py-2 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/50">
                Exploring: Blockchain Security
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;