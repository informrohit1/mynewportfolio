import React from 'react';
import { achievements } from '../data/achievementsData';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Leadership & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Highlighting my leadership roles and key accomplishments.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-6 pl-8 pb-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id}
                className={`mb-12 ${index === achievements.length - 1 ? 'mb-0' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[27px] flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 border-4 border-white dark:border-gray-900">
                  <Trophy className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                
                {/* Year badge */}
                <div className="inline-block px-4 py-1 mb-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                  {achievement.year}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;