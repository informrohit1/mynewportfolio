import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Rohit Kumar</h2>
            <p className="text-gray-400 max-w-md">
              Data Science Engineer & Electrical Engineering Student passionate about solving real-world problems through data-driven solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center md:text-right">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rohit Kumar. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-500 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;