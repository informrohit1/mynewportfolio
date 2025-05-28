export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Complete Data Science Bootcamp",
    issuer: "Udemy",
    date: "2023"
  },
  {
    id: 2,
    title: "Data Analytics",
    issuer: "Cisco",
    date: "2022"
  },
  {
    id: 3,
    title: "Data Visualization",
    issuer: "TCS",
    date: "2022"
  },
  {
    id: 4,
    title: "SQL Advanced",
    issuer: "Geekster",
    date: "2022"
  },
  {
    id: 5,
    title: "Python",
    issuer: "Udemy",
    date: "2021"
  },
  {
    id: 6,
    title: "Python Certified",
    issuer: "HackerRank",
    date: "2021"
  }
];