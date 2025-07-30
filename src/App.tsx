import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Hobbies />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;