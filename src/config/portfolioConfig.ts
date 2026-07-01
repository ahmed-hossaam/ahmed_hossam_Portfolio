export const portfolioConfig = {
  personal: {
    name: "Ahmed Hossam",
    title: "Full Stack Web Developer",
    headline: "Building scalable digital experiences with React, Laravel, Node.js, and modern web technologies.",
    subheadline: "Building scalable, responsive, and user-focused web applications with modern technologies.",
    profileImage: "/images/hero-img-1.jpg",
    AboutImage: "/images/hero-img-2.jpg",
  },
  social: {
    github: "https://github.com/ahmed-hossaam",
    linkedin: "https://www.linkedin.com/in/ahmed-hossam-9204602a1/",
    email: "a.h13900139@gmail.com",
    phone: "01557359110",
  },
  emailjs: {
    serviceId: "service_portfolio",
    templateId: "template_contact",
    publicKey: "PUBLIC_KEY_PLACEHOLDER", // Should be replaced with actual env var or real key
  },
  highlights: {
    projectsBuilt: 20,
    technologiesUsed: 12,
    certificationsEarned: 5,
    trainingPrograms: 3,
    graduationYear: 2026,
  },
  about: {
    story: [
      "I am a passionate Full Stack Web Developer currently completing my Applied Technology Diploma at WE School for Applied Technology.",
      "My journey is driven by a deep curiosity for how things work under the hood. From building scalable backend architectures with Laravel and Node.js to crafting precise, responsive user interfaces with React, I thrive at the intersection of design and logic.",
      "With hands-on experience in telecommunications infrastructure and entrepreneurship, I bring a holistic problem-solving mindset to every technical challenge. I am committed to continuous learning, growth, and building tools that make a meaningful impact."
    ],
    details: [
      { label: "Name", value: "Ahmed Hossam" },
      { label: "School", value: "WE School for Applied Technology" },
      { label: "Diploma", value: "Applied Technology, Full-Stack Web Dev" },
      { label: "Curriculum", value: "HTML, CSS, JS, React, PHP, Laravel, Node.js, MySQL" },
      { label: "Focus Themes", value: "Growth, Technical Expertise, Continuous Learning" },
    ]
  },
  skills: {
    featured: ["React.js", "Laravel", "Node.js", "JavaScript", "MySQL"],
    categories: [
      {
        title: "Frontend",
        items: [
          { name: "React", icon: "FaReact" },
          { name: "JavaScript", icon: "SiJavascript" },
          { name: "Tailwind CSS", icon: "SiTailwindcss" },
          { name: "Bootstrap", icon: "SiBootstrap" },
          { name: "HTML5", icon: "FaHtml5" },
          { name: "CSS3", icon: "FaCss3Alt" },
        ]
      },
      {
        title: "Backend",
        items: [
          { name: "Laravel", icon: "SiLaravel" },
          { name: "PHP", icon: "SiPhp" },
          { name: "Node.js", icon: "FaNode" },
        ]
      },
      {
        title: "Database",
        items: [
          { name: "MySQL", icon: "SiMysql" },
        ]
      },
      {
        title: "Tools & Others",
        items: [
          { name: "GitHub", icon: "SiGithub" },
          { name: "Testing", icon: "SiVitest" },
        ]
      }
    ]
  },
  projects: [
    {
      id: "e-shopper",
      title: "E-Shopper",
      description: "A comprehensive e-commerce platform with robust inventory management, secure checkout, and a seamless user experience.",
      problem: "Needed a scalable solution to handle thousands of products with complex variations and real-time inventory tracking.",
      solution: "Implemented a Laravel backend for robust data handling paired with a responsive React frontend for optimal user engagement.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      keyFeatures: ["Real-time inventory", "Secure payment gateway integration", "Admin dashboard", "Responsive design"],
      githubLink: "https://github.com/ahmed-hossaam/e-shopper",
      liveDemo: "#", // Placeholder
      image: "/images/project-placeholder-1.png"
    },
    {
      id: "moshafak",
      title: "Moshafak",
      description: "An innovative web application addressing specific user pain points with real-time data processing and intuitive UI.",
      problem: "Users struggled with complex workflows in existing solutions, leading to high drop-off rates.",
      solution: "Designed a streamlined, single-page application using modern JavaScript frameworks to reduce friction and improve task completion speed.",
      techStack: ["Node.js", "React", "Express", "MongoDB"],
      keyFeatures: ["Real-time updates", "Intuitive workflow", "User analytics", "High performance"],
      githubLink: "https://github.com/ahmed-hossaam/moshafak",
      liveDemo: "#", // Placeholder
      image: "/images/project-placeholder-2.png"
    },
    {
      id: "task-manager",
      title: "TaskFlow Pro",
      description: "A productivity tool for teams to manage tasks, track progress, and collaborate effectively.",
      problem: "Teams needed a lightweight yet powerful tool for daily task management without the bloat of enterprise software.",
      solution: "Built a highly responsive React frontend with a scalable Node.js/Express REST API.",
      techStack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      keyFeatures: ["Drag-and-drop boards", "Team collaboration", "Role-based access", "Activity logging"],
      githubLink: "https://github.com/ahmed-hossaam",
      liveDemo: "#",
      image: "/images/project-placeholder-3.png"
    }
  ],
  experience: [
    {
      role: "Frontend Developer Intern (Expected)",
      company: "FlyRank AI",
      duration: "Upcoming",
      description: "Working with React.js and Tailwind CSS, collaborating with development teams to build scalable, high-performance user experiences for AI-driven applications."
    },
    {
      role: "Entrepreneurship & Innovation Trainee",
      company: "CREATIVA – Damanhur Innovation Hub | ICEALEX",
      duration: "1 Month (56-hour program)",
      description: "Completed comprehensive training covering business models, branding, startup fundamentals, and innovation strategies to bridge the gap between technical solutions and market needs."
    },
    {
      role: "Technical Trainee – Data Infrastructure",
      company: "Telecom Egypt (WE)",
      duration: "Past",
      description: "Gained hands-on experience with data infrastructure, transmission systems, copper cabling, and fiber optics, building a strong foundation in networking and systems architecture."
    }
  ],
  learningJourney: [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Recent",
    },
    {
      title: "PHP Back-End Development",
      issuer: "freeCodeCamp",
      date: "Recent",
    },
    {
      title: "React.js Complete Course",
      issuer: "Udemy (Mohamed Nagy)",
      date: "Recent",
    },
    {
      title: "HTML CSS Bootstrap Complete Course",
      issuer: "Elzero Web School",
      date: "Recent",
    },
    {
      title: "JavaScript Complete Course",
      issuer: "Elzero Web School",
      date: "Recent",
    }
  ],
  currentFocus: {
    currentlyLearning: ["Next.js App Router", "Advanced System Design", "TypeScript Patterns"],
    currentlyBuilding: ["A microservices-based SaaS prototype", "Personal portfolio iterations"],
    careerGoals: "To become a Lead Full Stack Engineer shaping high-impact products and architecting scalable systems at a global tech company.",
    technologiesExplored: ["Docker", "GraphQL", "AWS"]
  },
  testimonials: [
    {
      quote: "Ahmed is a highly motivated developer who consistently delivers quality code. His ability to grasp complex concepts quickly is impressive.",
      author: "Senior Developer",
      role: "Mentor"
    },
    {
      quote: "Working with Ahmed during the innovation hub program showed his unique blend of technical capability and business acumen.",
      author: "Program Director",
      role: "CREATIVA"
    }
  ],
  sections: [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]
};
