export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Senior Executive",
    description: "IEEE Sensors",
    year: "2023"
  },
  {
    id: 2,
    title: "Hackathon Team Lead",
    description: "NSDC-ASEB",
    year: "2022"
  },
  {
    id: 3,
    title: "Winner – AI-Arena Hackathon",
    description: "Secured 6th place",
    year: "2022"
  },
  {
    id: 4,
    title: "Winner – Interdepartment Handball",
    description: "Secured 1st place",
    year: "2022"
  },
  {
    id: 5,
    title: "Former Senior Executive",
    description: "Aavishkara (Science Club)",
    year: "2021"
  }
];