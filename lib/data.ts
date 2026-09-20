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
      "Restaurant discovery app with location-based search. Built the full stack - REST API, MongoDB models, Next.js frontend, and Flutter mobile client.",
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
      "Job and task listing platform. Led all frontend development with React, integrated with a Node/Express backend and PostgreSQL.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/Kaam-Daam" }],
    image: "/kaamdaam.png",
  },
  {
    title: "LocalKart",
    stack: ["Flutter", "Dart"],
    description: "A hyperlocal grocery discovery platform built using Flutter and Dart.",
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
      "A platform to store all your social media links in one place and share them publicly via a QR code or link.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/LinkIn" }],
    image: "/linkin.png",
  },
  {
    title: "GlamTok",
    stack: ["Data analysis", "Prediction"],
    description:
      "A data-driven analysis and prediction of social media post engagement, based on posting time, for local clothing businesses in Kathmandu Valley.",
    links: [{ label: "View Source", href: "https://github.com/SnehaMdhr/GlamTok" }],
    image: "/glamtok.png",
  },
  {
    title: "Learn Mates",
    stack: ["Kotlin", "Android", "Firebase"],
    description: "A mobile learning companion app built natively for Android using Kotlin.",
    links: [{ label: "View Source", href: "https://github.com/apala-1/LearnMates" }],
    image: "/learnmates.png",
  },
  {
    title: "Event Management System",
    stack: ["Python", "Tkinter"],
    description: "A desktop GUI application for creating and managing events, with persistent storage.",
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
    degree: "+2 Science",
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
