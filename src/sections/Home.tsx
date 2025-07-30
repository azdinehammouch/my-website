import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative mx-auto w-48 h-48 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full bg-gray-800 rounded-full border-4 border-cyan-400/30 overflow-hidden">
              <img 
                src="/Photo.png" 
                alt="Azzeddine Hammouch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}  
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Azzeddine
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 space-y-2">
            <p>Cybersecurity Engineer & Software Developer</p>
            <p className="text-lg text-cyan-400">Securing the Digital Future, One Line of Code at a Time</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold text-black hover:from-cyan-400 hover:to-green-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-300 group">
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">10+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">B.Eng</div>
            <div className="text-gray-300">Computer Science</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;