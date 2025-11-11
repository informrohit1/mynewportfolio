export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "C++", proficiency: 60 }
    ]
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Java", proficiency: 80 },
      { name: "Machine Learning", proficiency: 80 },
      { name: "Fast API", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "System Design (HLD)", proficiency: 75 },
      { name: "Flask", proficiency: 85 },
      { name: "Scikit-learn", proficiency: 88 },
      { name: "Pandas", proficiency: 92 },
      { name: "NumPy", proficiency: 90 },
      { name: "Seaborn", proficiency: 85 },
      { name: "Matplotlib", proficiency: 87 },
      { name: "Power BI", proficiency: 80 },
      { name: "PyTorch", proficiency: 75 },
      { name: "SQL", proficiency: 82 },
      { name: "MySQL", proficiency: 80 },
      { name: "Beautiful Soup", proficiency: 78 }
    ]
  },
  {
    category: "Concepts",
    skills: [
      { name: "Machine Learning", proficiency: 87 },
      { name: "Deep Learning", proficiency: 80 },
      { name: "Data Visualization", proficiency: 88 },
      { name: "Time Series Forecasting", proficiency: 85 },
      { name: "EDA", proficiency: 90 },
      { name: "DSA", proficiency: 75 },
      { name: "DBMS", proficiency: 78 },
      { name: "IoT", proficiency: 70 },
      { name: "Computer Networks", proficiency: 72 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", proficiency: 85 },
      { name: "Collaboration", proficiency: 90 },
      { name: "Presentation", proficiency: 82 },
      { name: "Teamwork", proficiency: 88 }
    ]
  }
];