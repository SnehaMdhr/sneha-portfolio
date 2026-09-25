export type SkillCategory = {
  name: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  { name: "Mobile", items: ["Flutter", "Dart"] },
  { name: "Languages", items: ["JavaScript", "Python", "Kotlin", "Java"] },
  { name: "Frontend", items: ["Next.js", "React.js", "HTML5", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Express.js"] },
  { name: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    name: "Data & Analytics",
    items: ["Python", "Pandas", "NumPy", "XGBoost", "Data Analysis", "Data Visualization"],
  },
  { name: "Tools", items: ["Git", "GitHub", "Figma", "Canva"] },
  { name: "Concepts", items: ["OOP", "CRUD", "REST APIs"] },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  stack: string[];
  description: string;
  links: ProjectLink[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "MunchNearby",
    stack: ["MERN", "Next.js", "Flutter"],
    description:
      "MunchNearby is a restaurant discovery application designed to help users discover restaurants through location-based search. I worked on the project across the full stack, developing the REST API and MongoDB data models while also building the web and mobile experiences. The project includes a Next.js web frontend and a Flutter mobile client, giving me hands-on experience working across both web and mobile platforms within the same application.",
    links: [
      { label: "Mobile Source Code", href: "https://github.com/SnehaMdhr/munch_nearby" },
      { label: "Web Source Code", href: "https://github.com/SnehaMdhr/munch_nearby_Web" },
      { label: "Figma Design", href: "https://www.figma.com/design/m8ZFwNaheUdMPp9MWXc5vX/MunchNearby?node-id=0-1&p=f&t=vqZWw0VAyIDuiQfO-0" },
    ],
    image: "/munchnearby.png",
  },
  {
    title: "Kaam Daam",
    stack: ["React.js", "PERN"],
    description:
      "Kaam Daam is a job and task listing platform designed to connect users with available work and task opportunities. I led the frontend development of the project using React.js and worked on integrating the frontend with a Node.js and Express.js backend. The project also involved working with a PostgreSQL database, giving me practical experience with the PERN stack and with building frontend experiences that communicate with backend services.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/Kaam-Daam" }],
    image: "/kaamdaam.png",
  },
  {
    title: "LocalKart",
    stack: ["Flutter", "Dart"],
    description: "LocalKart is a hyperlocal grocery discovery platform built to help users discover nearby local grocery stores. The project was developed as a mobile application using Flutter and Dart, giving me hands-on experience in mobile application development and building a user-focused interface for a local marketplace concept. Through this project, I worked with Flutter to turn the platform concept into a functional mobile experience.",
    links: [
      { label: "View Source", href: "https://github.com/SnehaMdhr/LocalKart" },
      { label: "Figma Design", href: "https://www.figma.com/design/yP0tqvEKDtngiDlGehJ5vR/LocalKart?node-id=0-1&p=f&t=jU1WZcCDQlAL3QU5-0" },
    ],
    image: "/localkart.png",
  },
  {
    title: "LinkIn",
    stack: ["MERN", "React.js"],
    description:
      "LinkIn is a social media link management platform that allows users to store their social media links in one place and share them through a public link or QR code. The project was developed using the MERN stack with React.js for the frontend, providing experience in building a complete web application around user profiles, link management, and public sharing. It demonstrates my experience working with React.js and full-stack web development.",
    links: [
      { label: "Live Demo", href: "https://link-in-two.vercel.app/" },
      { label: "View Source", href: "https://github.com/SnehaMdhr/LinkIn" },
    ],
    image: "/linkin.png",
  },
  {
    title: "GlamTok",
    stack: ["Data analysis", "Prediction"],
    description:
      "GlamTok is a data-driven analysis and prediction project focused on understanding social media post engagement based on posting time for local clothing businesses in Kathmandu Valley. The project combines data analysis and machine learning to explore engagement patterns and build a prediction system. I worked with Python and data-analysis technologies including Pandas and NumPy, and used XGBoost as part of the predictive modelling work.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/GlamTok" }],
    image: "/glamtok.png",
  },
  {
    title: "Learn Mates",
    stack: ["Kotlin", "Android", "Firebase"],
    description: "Learn Mates is a mobile learning companion application developed natively for Android using Kotlin. The project gave me practical experience with native Android development and building a mobile application using Kotlin. Firebase was also used as part of the technology stack, allowing me to gain experience working with a backend service within an Android application.",
    links: [{ label: "View Source", href: "https://github.com/apala-1/LearnMates" }],
    image: "/learnmates.png",
  },
  {
    title: "Event Management System",
    stack: ["Python", "Tkinter"],
    description: "The Event Management System is a desktop GUI application designed for creating and managing events with persistent storage. I developed the application using Python and Tkinter, gaining experience in building desktop interfaces and implementing application functionality around event management. The project also provided practical experience in working with persistent data within a desktop application.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/event_management_system" }],
    image: "/event.png",
  },
];

export const achievements: string[] = [
  "3rd Place - Code Crash Competition",
  "Understanding Prompt Engineering - Data Camp",
  "Project Management (20-hour certification)",
  "Data Analyst in Python (36-hour certification)",
  "Data Analytics with Tableau",
  "AWS Concepts - Data Camp",
  "Crime Investigation and Analysis",
  "MC Training Certificate",
];

export type EducationItem = {
  date: string;
  degree: string;
  institution: string;
};

export const education: EducationItem[] = [
  {
    date: "2023 - 2026",
    degree: "BSc (Hons) in Computing",
    institution: "Softwarica College of IT and E-commerce, in affiliation with Coventry University",
  },
  {
    date: "2021 - 2023",
    degree: "+2",
    institution: "National School of Sciences (NSS)",
  },
  {
    date: "- 2021",
    degree: "SEE",
    institution: "Swarnim School",
  },
];



export const socials = {
  name: "Sneha Manandhar",
  role: "Flutter Developer / Full Stack Developer",
  email: "snehamanandhar54@gmail.com",
  github: "https://github.com/SnehaMdhr",
  linkedin: "https://www.linkedin.com/in/sneha-manandhar-4b248a271",
};

/* Experience cards with icon colors for the 2x2 grid */
export type ExperienceCard = {
  title: string;
  role: string;
  iconBg: string;
  iconEmoji: string;
};

export const experienceCards: ExperienceCard[] = [
  {
    title: "Softwarica College",
    role: "BSc Computing Student",
    iconBg: "#7C3AED",
    iconEmoji: "🎓",
  },
  {
    title: "Flutter Developer",
    role: "Mobile & Web Apps",
    iconBg: "#A855F7",
    iconEmoji: "📱",
  },
  {
    title: "Full Stack Developer",
    role: "MERN Stack Projects",
    iconBg: "#6D28D9",
    iconEmoji: "💻",
  },
  {
    title: "Freelance Developer",
    role: "Client Projects",
    iconBg: "#8B5CF6",
    iconEmoji: "🚀",
  },
];
