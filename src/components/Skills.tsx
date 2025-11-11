import React from "react";
import { skillsData } from "../data/skillsData";

const SkillChip: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button
      type="button"
      aria-label={label}
      className="
        select-none
        inline-flex items-center gap-2
        rounded-full
        px-3 py-2
        text-sm font-medium
        bg-gray-100 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        border border-gray-200 dark:border-gray-700
        shadow-sm
        transition
        duration-200
        will-change-transform

        hover:scale-105
        hover:bg-white/70 dark:hover:bg-gray-700
        hover:border-blue-400 dark:hover:border-blue-500
        hover:ring-2 hover:ring-blue-400/40 dark:hover:ring-blue-500/30
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60
      "
    >
      {/* small dot accent */}
      <span className="h-2 w-2 rounded-full bg-blue-500/80" />
      <span>{label}</span>
    </button>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A concise view of my technical and soft skills — no ratings, just what I use.
          </p>
          <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="
                bg-gray-50 dark:bg-gray-800
                p-6 rounded-xl shadow-md
                border border-gray-200 dark:border-gray-700
              "
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category.category}
              </h3>

              {/* single skills container (chips), only chips react on hover */}
              <div
                className="
                  flex flex-wrap gap-2.5
                  [&>*]:transition
                "
              >
                {category.skills.map((skill, i) => (
                  <SkillChip key={i} label={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
