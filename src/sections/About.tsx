import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  const timelineItems = [
    {
      year: '2021',
      title: 'Started Computer Science',
      description: 'Began Bachelor of Engineering at Hubei University of Technology',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: '2020-2021',
      title: 'Freelance Developer',
      description: 'Built responsive websites with clean UI/UX design',
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: '2022-2023',
      title: 'English Teacher',
      description: 'Taught ESL at Wuhan Kindergarten, created digital teaching aids',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: '2025',
      title: 'Cybersecurity Specialist',
      description: 'Graduated and specialized in cybersecurity and Software development',
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="min-h-screen pt-24 pb-16 px-4">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about cybersecurity and AI development, bridging the gap between secure code and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Azzeddine Hammouch, a Moroccan cybersecurity engineer and Software developer currently living in China. 
                I recently graduated with a B.Eng. in Computer Science from Hubei University of Technology with a GPA of 3.03.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in technology has been driven by a passion for creating secure, efficient, and user-friendly applications. 
                I specialize in vulnerability assessment, penetration testing, and building robust web applications.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-cyan-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Cybersecurity</h4>
                    <p className="text-gray-300 text-sm">Vulnerability assessment, penetration testing, and security auditing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Software Development</h4>
                    <p className="text-gray-300 text-sm">Building end-to-end Softwares with modern technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">AI Developemet</h4>
                    <p className="text-gray-300 text-sm">AI is rapidly transforming industries through smarter automation and human-like decision making.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-100 rounded-xl overflow-hidden">
              <img 
                src="/new1.png" 
                alt="Azzeddine Hammouch" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
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
              My Journey
            </span>
          </h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-green-400"></div>
            
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  <div className="absolute left-6 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                  <div className="ml-16 bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-cyan-400">{item.icon}</div>
                      <span className="text-cyan-400 font-bold">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;