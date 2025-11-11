import React from 'react';
import { certifications } from '../data/certificationsData';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {cert.date}
                  </p>
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;