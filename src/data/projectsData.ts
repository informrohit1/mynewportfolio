export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nayan - Smart Assistive Device for Visually Impaired",
    description: "Designed and developed a smart assistive device combining object detection with real-time audio feedback and haptics to enhance independence and safety for visually impaired individuals.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi", "Text-to-Speech", "Ultrasonic Sensor"],
    achievements: [
      "Implemented real-time object detection using YOLOv8",
      "Integrated haptic feedback for obstacle avoidance",
      "Developed audio feedback system using Text-to-Speech",
      "Created affordable solution using Raspberry Pi hardware"
    ],
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "DermaCare - AI-Powered Skin Care Assistant",
    description: "Built a Flask-based web application that leverages AI to detect and log skin diseases from user-uploaded images and symptom inputs.",
    techStack: ["Python", "Flask", "MySQL", "PyTorch", "CNN", "VGG16", "SQL", "HTML/CSS", "Jinja"],
    achievements: [
      "Developed secure, interactive web dashboard for image uploads and profile management",
      "Trained custom CNN and fine-tuned VGG16 model for accurate skin disease classification",
      "Implemented data logging and session tracking for detailed user activity analysis"
    ],
    image: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "MovieFlix - Content Based Movie Recommendation System",
    description: "Developed a Streamlit-based web application that delivers personalized movie recommendations using collaborative filtering and TMDB API integration.",
    techStack: ["Python", "Streamlit", "Pandas", "Pickle", "NumPy", "TMDB API", "Scikit-Learn", "CSS", "HTML"],
    achievements: [
      "Developed interactive Streamlit UI with real-time search and recommendation flow",
      "Integrated TMDB API for live movie metadata including posters and details",
      "Implemented cosine similarity algorithm for recommending similar movies",
      "Designed responsive frontend with custom CSS and hover effects",
      "Enabled deep linking through query parameters for seamless sharing"
    ],
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Climate Resilience and Disaster Management App",
    description: "Developed a Flask-based UI with real-time API integration for disaster prediction and management.",
    techStack: ["Python", "Flask", "Random Forest", "API Integration", "Machine Learning"],
    achievements: ["Implemented a Random Forest model for disaster prediction", "Achieved 76% prediction accuracy", "Integrated real-time API data"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "Daily Energy Consumption Forecasting",
    description: "Created an LSTM-based time series forecasting system for predicting energy consumption across 3 grid zones.",
    techStack: ["Python", "PyTorch", "LSTM", "Time Series Analysis", "Deep Learning"],
    achievements: ["Achieved 90% forecasting accuracy", "Implemented LSTM models for 3 grid zones", "Created visualizations for energy consumption patterns"],
    image: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "Supermarket Sales Forecasting",
    description: "Conducted extensive EDA, visualization, and sales prediction across multiple supermarket branches.",
    techStack: ["Python", "Pandas", "Power BI", "Data Visualization", "Forecasting"],
    achievements: ["Created comprehensive Power BI dashboard", "Implemented sales prediction models", "Conducted in-depth Exploratory Data Analysis"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];