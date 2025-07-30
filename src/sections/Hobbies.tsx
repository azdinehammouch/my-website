import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Gamepad2, Palette, Camera, Code, Target, Zap } from 'lucide-react';

const Hobbies: React.FC = () => {
  const hobbies = [
    {
      title: 'Ethical Hacking',
      description: 'Exploring cybersecurity through hands-on penetration testing, vulnerability research, and building security tools.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500',
      category: 'Technology',
      activities: [
        'Vulnerability Research',
        'Penetration Testing',
        'Security Tool Development',
        'CTF Competitions'
      ],
      image: '/hacking.jpg'
    },
    {
      title: 'AI Experiments',
      description: 'Experimenting with artificial intelligence, machine learning algorithms, and exploring the intersection of AI and cybersecurity.',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Technology',
      activities: [
        'Machine Learning Projects',
        'AI Security Research',
        'Neural Network Experiments',
        'Data Science Exploration'
      ],
      image: '/ai.jpg'
    },
    {
      title: 'Gaming',
      description: 'Passionate about strategy games, competitive gaming, and exploring game development as a creative outlet. Add My steam and lets play together! 1055593111.',
      icon: <Gamepad2 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Entertainment',
      activities: [
        'Strategy Games',
        'Competitive Gaming',
        'Game Development',
        'Gaming Communities'
      ],
      image: '/gaming.jpg'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user interfaces and exploring the psychology behind great user experiences.',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Design',
      activities: [
        'Interface Design',
        'User Experience Research',
        'Prototyping',
        'Design Systems'
      ],
      image: '/design.jpg'
    },
    {
      title: 'Photography',
      description: 'Capturing moments and exploring the world through the lens, with a focus on urban and technology photography.',
      icon: <Camera className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Creative',
      activities: [
        'Urban Photography',
        'Tech Photography',
        'Digital Editing',
        'Visual Storytelling'
      ],
      image: '/photography.jpg'
    },
    {
      title: 'Open Source',
      description: 'Contributing to open source projects and building tools that benefit the developer and security communities.',
      icon: <Code className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Technology',
      activities: [
        'GitHub Contributions',
        'Tool Development',
        'Community Building',
        'Documentation'
      ],
      image: '/opensource.jpg'
    }
  ];

  const interests = [
    {
      name: 'Cybersecurity Research',
      description: 'Staying current with latest threats and defense mechanisms',
      icon: <Target className="w-5 h-5" />,
      color: 'text-red-400'
    },
    {
      name: 'Emerging Technologies',
      description: 'Exploring blockchain, IoT security, and quantum computing',
      icon: <Zap className="w-5 h-5" />,
      color: 'text-yellow-400'
    },
    {
      name: 'Tech Communities',
      description: 'Active participation in developer and security forums',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      name: 'Innovation',
      description: 'Finding creative solutions to complex problems',
      icon: <Palette className="w-5 h-5" />,
      color: 'text-green-400'
    }
  ];

  return (
    <section id="hobbies" className="min-h-screen pt-24 pb-16 px-4">
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
              Hobbies & Interests
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond coding and cybersecurity, I'm passionate about exploring technology, creativity, and innovation in various forms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${hobby.color} text-white`}>
                    {hobby.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-400 rounded-full">
                    {hobby.category}
                  </span>
                </div>

                <div className="mb-4 h-48 bg-gray-700/50 rounded-lg flex items-center justify-center border border-gray-600/50">
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {hobby.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {hobby.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-white">Activities:</h4>
                  <div className="space-y-1">
                    {hobby.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-xs">{activity}</span>
                      </div>
                    ))}
                  </div>
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Current Interests
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform ${interest.color}`}>
                  {interest.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{interest.name}</h4>
                <p className="text-sm text-gray-300">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 backdrop-blur-lg rounded-xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Work-Life Balance</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I believe that diverse interests and hobbies fuel creativity and innovation in professional work. 
              My passion for technology extends beyond work, driving continuous learning and creative problem-solving.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-full">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Always Learning</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-full">
                <Target className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Goal-Oriented</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 rounded-full">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300">Innovation-Driven</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;