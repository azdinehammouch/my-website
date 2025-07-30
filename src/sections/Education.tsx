import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Hubei University of Technology',
      location: 'Wuhan, China',
      period: '2021 - 2025',
      gpa: '3.03',
      status: 'Graduated',
      description: 'Comprehensive program covering software engineering, cybersecurity, data structures, algorithms, and modern programming languages.',
      coursework: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Computer Networks',
        'Cybersecurity Fundamentals',
        'Web Development',
        'Object-Oriented Programming',
        'System Design'
      ],
      projects: [
        'Developed Igris vulnerability scanner as capstone project',
        'Built laboratory management system for university',
        'Created attendance tracking system for academic use'
      ],
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Baccalaureate in Economic Science',
      institution: 'Abatih High School',
      location: 'Morocco',
      period: '2018 - 2021',
      Grade: 'Good Mention',
      status: 'Completed',
      description: 'Strong foundation in economics, mathematics, and analytical thinking that later supported my transition into technology.',
      coursework: [
        'Economics & Finance',
        'Mathematics',
        'Statistics',
        'Business Studies',
        'Critical Thinking',
        'Research Methods'
      ],
      achievements: [
        'Graduated with "Good" mention',
        'Strong performance in mathematics and analytical subjects',
        'Developed interest in technology and programming'
      ],
      icon: <Award className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const certifications = [
    {
      name: 'Self-Taught Cybersecurity',
      description: 'Extensive self-study in penetration testing, vulnerability assessment, and security tools',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security'],
      year: '2022-2024'
    },
    {
      name: 'Software Development',
      description: 'Practical experience through freelance projects and personal development',
      skills: ['Software Development', 'Backend Development', 'Database Design', 'UI/UX Design'],
      year: '2020-2024'
    },
    {
      name: 'Mobile App Development',
      description: 'Flutter and Dart expertise through hands-on project development',
      skills: ['Flutter', 'Dart', 'Mobile UI/UX', 'Cross-platform Development'],
      year: '2023-2024'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent performance throughout university studies',
      icon: <Trophy className="w-6 h-6" />,
      color: 'text-yellow-400'
    },
    {
      title: 'Cross-Cultural Adaptation',
      description: 'Successfully completed degree program in a foreign country and language',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      title: 'Practical Application',
      description: 'Applied theoretical knowledge to real-world projects and freelance work',
      icon: <Award className="w-6 h-6" />,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="education" className="min-h-screen pt-24 pb-16 px-4">
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
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology and cybersecurity.
          </p>
        </motion.div>

        <div className="space-y-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} text-white`}>
                      {edu.icon}
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        edu.status === 'Graduated' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">{edu.institution}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Coursework</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {edu.projects && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Notable Projects</h4>
                      <div className="space-y-2">
                        {edu.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.achievements && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Achievements</h4>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
              Professional Development
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h4>
                  <span className="text-sm text-cyan-400 font-semibold">{cert.year}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-white">Skills Acquired:</h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Academic Achievements
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;