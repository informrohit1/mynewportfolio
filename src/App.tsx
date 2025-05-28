import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;