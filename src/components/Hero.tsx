import React from 'react';
import { FileDown, Linkedin, Github, Mail, Phone } from 'lucide-react';
import myImage from './my.jpg'; // Update the path if image is elsewhere
import resumePDF from './RohitKumar.pdf';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="animate-fadeIn">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Hello, I'm</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Rohit Kumar
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                Software Engineer - Relanto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                I'm a Software Enginner I at Relanto, passionate about applying Software Engineering knowledge to solve real-world problems through data-driven solutions. I am constantly learning and improving through projects, certifications, and team experiences.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={18} />
                  Contact Me
                </a>
                <a 
                  href={resumePDF} 
                  download 
                  className="px-6 py-3 bg-transparent border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300 flex items-center gap-2"
                >
                  <FileDown size={18} />
                  Resume
                </a>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/rohit-kumar-50a4b3252" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/informrohit1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="mailto:imrohitkumar1205@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors duration-300"
                  aria-label="Phone"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute inset-0 -z-10 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70 transform -translate-x-10 translate-y-10"></div>

              {/* Image Section */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden relative border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src={myImage} 
                  alt="Rohit Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
