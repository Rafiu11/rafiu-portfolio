export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: string;
  technologies: string[];
  features: string[];
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationMilestone {
  period: string;
  title: string;
  institution: string;
  description: string;
  topics: string[];
}

export const portfolioOwner = {
  fullName: "Md All Rafiu Biswash",
  displayName: "Rafiu Biswash",
  profession: "Software Engineering Student & Aspiring Web Developer",
  secondaryTitle: "Creative Developer | Technology Enthusiast",
  university: "Daffodil International University, Bangladesh",
  degree: "B.Sc. in Software Engineering (Currently Studying)",
  location: "Bangladesh",
  heroHeadline: ["I BUILD.", "I CREATE.", "I EXPLORE."],
  tagline: "Turning Creative Ideas into Meaningful Digital Experiences.",
  shortIntro:
    "Hi, I'm Rafiu, a Software Engineering student at Daffodil International University who is passionate about web development, creative technology, and turning imaginative ideas into practical digital experiences.",
  aboutMe: [
    "I'm a Software Engineering student at Daffodil International University, Bangladesh. I enjoy web development, experimenting with modern technologies, and creating meaningful digital solutions.",
    "For me, software development is more than writing code. It combines creativity, problem-solving, continuous learning, and the challenge of turning an idea into a working product.",
    "Through personal and academic projects, I am expanding my technical knowledge, exploring modern development practices, and improving my ability to design and build useful web applications.",
    "I believe every project is an opportunity to learn something new and become a better developer."
  ],
  motto: "Learning Every Day. Building with Purpose. Creating Beyond Limits.",
  availability: "Open to Learning, Collaboration & Opportunities.",
  heroPortrait: "/assets/aistudio/1000100892_ee7953cf.jpeg",
  contact: {
    email: "rafiu241-35-006@diu.edu.bd",
    whatsapp: "+8801329577408",
    whatsappUrl: "https://wa.me/8801329577408",
    github: "https://github.com/Rafiu11",
    instagram: "https://www.instagram.com/rafiubiswas"
  }
};

export const featuredProjects: Project[] = [
  {
    id: "campus-skill-exchange",
    title: "Campus Skill Exchange Platform",
    category: "Full-Stack Web Development",
    summary:
      "A web-based platform designed to help university students share skills, discover mentors, exchange knowledge, and connect through collaborative learning opportunities.",
    description:
      "Built to bridge the knowledge gap among university peers, Campus Skill Exchange Platform lets students register, list skills they want to teach or acquire, search through mentor profiles, book exchange sessions, and review collaborative experiences. With an integrated AI assistant, dynamic recommendation engine, and Firebase database persistence, it rethinks peer learning for university communities.",
    liveUrl: "https://campusskillexchangeplatfrom.netlify.app/",
    githubUrl: "https://github.com/Rafiu11/campus-skill-exchange-platform",
    image: "/assets/projects/campus-skill-exchange.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express.js",
      "Firebase",
      "Tailwind CSS"
    ],
    features: [
      "User registration and authenticated login flows",
      "Interactive skill sharing and searchable directory",
      "Peer-to-peer exchange requests and matchmaking",
      "Session booking functionality and schedule management",
      "Student reviews and rating system",
      "Administrative dashboard for platform governance",
      "AI assistant and intelligent recommendation engine",
      "Firebase real-time database and secure authentication",
      "Responsive high-contrast dark mode interface"
    ],
    highlights: [
      "Real-world campus utility",
      "Full-stack architecture",
      "Authentication & database integration"
    ]
  },
  {
    id: "find-doctor",
    title: "Find Doctor",
    category: "Healthcare Web Application",
    summary:
      "A healthcare-focused web application project exploring how digital platforms can make discovering medical professionals and accessing doctor-related information more convenient.",
    description:
      "Find Doctor simplifies patient access to healthcare information. Patients can search doctors by medical specialty, location, and rating, review professional qualifications and available consultation timetables, and navigate medical clinic details through a streamlined, mobile-responsive user interface.",
    liveUrl: "https://find-doctor-test-1.vercel.app/",
    githubUrl: "https://github.com/Rafiu11/FindDoctor",
    image: "/assets/projects/find-doctor.jpg",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Responsive Design"
    ],
    features: [
      "Doctor and specialist directory discovery",
      "Medical specialty and rating filter system",
      "Doctor profile details with credentials and experience",
      "Consultation timetable and slot exploration",
      "Accessible clinic location and contact information",
      "Fast, lightweight client-side navigation",
      "Mobile-first responsive healthcare interface"
    ],
    highlights: [
      "Intuitive patient search flow",
      "Clean clinical visual hierarchy",
      "Optimized client-side rendering"
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Web & Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Vite",
      "HTML5 / Modern CSS",
      "Responsive Web Development",
      "Front-End Architecture"
    ]
  },
  {
    title: "Backend & Services",
    skills: [
      "Node.js",
      "Express.js",
      "Firebase Auth & Firestore",
      "RESTful API Integration"
    ]
  },
  {
    title: "Creative & Engineering Interests",
    skills: [
      "UI & Interaction Design",
      "Web Design Fundamentals",
      "Creative Problem Solving",
      "Interactive Web Experiences",
      "Exploring Emerging Technologies"
    ]
  },
  {
    title: "Version Control & Tooling",
    skills: ["Git", "GitHub", "npm", "VS Code", "Vercel / Netlify Deployment"]
  }
];

export const educationMilestones: EducationMilestone[] = [
  {
    period: "Currently Studying",
    title: "B.Sc. in Software Engineering",
    institution: "Daffodil International University, Bangladesh",
    description:
      "Acquiring strong academic foundations in software design patterns, object-oriented programming, data structures, algorithms, and collaborative software engineering methodologies.",
    topics: [
      "Data Structures & Algorithms",
      "Software Design & Architecture",
      "Database Systems",
      "Web Technologies & Systems"
    ]
  },
  {
    period: "Continuous Practice",
    title: "Self-Directed Web & Creative Development",
    institution: "Independent Projects & Modern Web Ecosystem",
    description:
      "Hands-on experimentation with modern React ecosystems, full-stack prototyping, interactive animations, and building functional applications that solve concrete peer and community needs.",
    topics: [
      "React Ecosystem & Hooks",
      "TypeScript Best Practices",
      "Full-Stack State & Auth (Firebase / Node)",
      "Micro-Interactions & Animation"
    ]
  }
];

export const creativePrinciples = [
  {
    number: "01",
    title: "Build with Real Purpose",
    description:
      "Every project should solve a tangible user challenge. Whether helping classmates share technical skills or making medical information accessible, software earns its place when it serves people."
  },
  {
    number: "02",
    title: "Clean Architecture & Simplicity",
    description:
      "Code should be readable, predictable, and modular. Prioritizing clear component structures, typed interfaces, and maintainable state flows prevents technical debt and speeds up iteration."
  },
  {
    number: "03",
    title: "Craft & Micro-Interactions",
    description:
      "Great web experiences feel tactile and alive. Subtle physics-based motion, intentional whitespace, and rapid visual feedback elevate simple utility into memorable digital craft."
  },
  {
    number: "04",
    title: "Continuous Curiosity & Growth",
    description:
      "Technology moves rapidly. Learning every single day, embracing feedback, reading open-source code, and experimenting with new paradigms is how I evolve as an engineer."
  }
];
