import React, { useState } from 'react';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my data science and engineering work through real-world applications.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeProject === project.id ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="pt-4">
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleProject(project.id)}
                  className="mt-4 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 focus:outline-none"
                >
                  {activeProject === project.id ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;