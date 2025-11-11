import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-blue-600 dark:text-blue-400" size={24} />
              Education
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white">
                  B.Tech in Electrical and Electronics Engineering
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  Minor in Data Science and Engineering
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Amrita Vishwa Vidyapeetham, Bangalore
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <Award size={16} className="text-blue-600 dark:text-blue-400" />
                  CGPA: 8.02
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Class XII
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    Percentage: 83.6%
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Class X
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Award size={16} className="text-blue-600 dark:text-blue-400" />
                    Percentage: 86%
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate B.Tech student in Electrical and Electronics Engineering with a Minor in Data Science at Amrita University. My academic journey has equipped me with a unique blend of engineering fundamentals and data science expertise.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              What drives me is the application of my technical knowledge to solve real-world problems through innovative, data-driven solutions. I believe in the power of data to transform industries and improve lives.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm constantly expanding my skillset through hands-on projects, certifications, and collaborative team experiences. My goal is to continue growing in the field of data science and engineering, making meaningful contributions to technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;