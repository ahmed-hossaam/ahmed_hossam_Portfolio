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
  id: "mizan",
  title: "Mizan",
  description: "A private expense tracker for managing income, spending, monthly budgets, and category analysis in Egyptian pounds (EGP), with CSV export and secure per-account data.",
  problem: "Tracking personal finances with scattered notes or spreadsheets makes it hard to see where money goes, stay within a monthly budget, and keep financial data private.",
  solution: "Built a full-stack expense tracker where each user signs in securely and manages their own income and expenses, sets monthly budgets, analyzes spending by category, and exports records to CSV. Data access is scoped to the authenticated account on the API side.",
  techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Supabase Auth", "Vite", "Vercel"],
  keyFeatures: [
    "Income and expense tracking in EGP",
    "Monthly budgets",
    "Category-based spending analysis",
    "CSV export",
    "Secure authentication with Supabase Auth",
    "Per-account data isolation enforced by the API"
  ],
  githubLink: "https://github.com/ahmed-hossaam/mizan",
  liveDemo: "https://mizan-phi-nine.vercel.app/",
  image: "/images/project-placeholder-1.png"
},
       {
      id: "moshafak",
      title: "Moshafak",
      description: "An Islamic web application that provides easy access to the Holy Quran, Hadiths, Duas, Azkar, and prayer times through a clean, responsive, and user-friendly interface.",
      problem: "Accessing essential Islamic content across different platforms can be inconvenient, while unreliable external APIs may prevent users from accessing content when needed.",
      solution: "Developed an Islamic web application that brings essential religious content together in one place, focusing on intuitive navigation, responsive design, and a smooth user experience.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      keyFeatures: ["Holy Quran and Islamic content","Hadiths, Duas, and Azkar","Prayer times","Responsive user interface","Intuitive navigation and user experience"],
      githubLink: "https://github.com/ahmed-hossaam/moshafakk",
      liveDemo: "https://moshafk-two.vercel.app/",
      image: "/images/project-placeholder-2.png"
      },
    {
  id: "clinic-booking",
  title: "Clinic Appointment Booking System",
  description: "A full-stack appointment booking platform where patients browse doctors, book available time slots, and manage their appointments, while admins confirm or cancel bookings from a dedicated dashboard.",
  problem: "Booking clinic appointments by phone or in person leads to scheduling conflicts, double bookings, and extra manual work for clinic staff.",
  solution: "Built a full-stack booking system with doctor availability, patient self-service booking and cancellation, and an admin panel for managing appointments. Double bookings are prevented at the database level with a partial unique index on active slots, and sessions are secured with JWT in HTTP-only cookies.",
  techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Zod", "JWT"],
  keyFeatures: [
    "Patient signup and secure login (JWT in HTTP-only cookies, bcrypt-hashed passwords)",
    "Browse doctors and filter by specialty",
    "Real-time doctor availability and slot booking",
    "Patient appointment history and cancellation",
    "Admin dashboard to confirm or cancel appointments and filter by status",
    "Double-booking prevention enforced at the database level"
  ],
  githubLink: "https://github.com/ahmed-hossaam/clinic-booking",
  liveDemo: "https://clinic-booking-hub--ah2573079.replit.app/",
  image: "/images/project-placeholder-3.png"
},
    {
      id: "e-shopper",
      title: "E-Shopper",
      description: "A comprehensive e-commerce platform with robust inventory management, secure checkout, and a seamless user experience.",
      problem: "Needed a scalable solution to handle thousands of products with complex variations and real-time inventory tracking.",
      solution: "Implemented a Laravel backend for robust data handling paired with a responsive React frontend for optimal user engagement.",
      techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      keyFeatures: ["Real-time inventory", "Secure payment gateway integration", "Admin dashboard", "Responsive design"],
      githubLink: "https://github.com/ahmed-hossaam/e-shopper",
      liveDemo: "https://e-shopper25.byethost22.com/index.php",
      image: "/images/project-placeholder-4.png"
    },

      // {
      // id: "E-shopper-admin",
      // title: "E-Shopper | Admin Dashboard",
      // description: "An administrative dashboard for an e-commerce platform, designed to simplify store management through a centralized interface for managing products, orders, and other essential store operations.",
      // problem: "Managing an online store requires an organized way to oversee products, orders, and operational tasks without navigating multiple disconnected interfaces.",
      // solution: "Developed an admin dashboard that centralizes essential e-commerce management operations in an organized interface, aiming to improve usability and simplify store administration.",
      // techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      // keyFeatures: ["Admin authentication","E-commerce management interface","Organized administrative navigation","Product and order management","Centralized store administration"],
      // githubLink: "#",
      // liveDemo: "https://e-shopper25.byethost22.com/Admin/login.php",
      // image: "/images/project-placeholder-5.png"
      // }

  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "FlyRank AI",
      duration: "1 Month",
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
