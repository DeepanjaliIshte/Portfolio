export const portfolioData = {
  personalInfo: {
    name: "Deepanjali Ishte",
    formalName: "Deepanjali R. Ishte",
    roles: [
      "Java Developer",
      "Software Developer",
      "Backend Developer",
      "Spring Boot Developer",
      "Full Stack Developer"
    ],
    heroHeadline: "Java Developer | Software Developer",
    quote: "Building scalable enterprise applications, robust backend architectures, and meaningful digital experiences.",
    location: "Rajgurunagar, Pune, Maharashtra",
    phone: "+91 7498545921",
    email: "deepanjalishte@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepanjali-ishte-071691201",
    github: "https://github.com/DeepanjaliIshte",
    instagram: "https://www.instagram.com/deepcodewarriors/",
    portfolioUrl: "https://portfolio-lemon-phi-47.vercel.app",
    status: "Available for Opportunities",
    targetRoles: "Seeking Junior Java Developer or Associate Software Engineer opportunity",
    resumeUrl: "/resume/Deepanjali_Ishte_Java_Developer_Resume.pdf",
    resumeDownloadName: "Deepanjali_Ishte_Java_Developer_Resume.pdf",
    aboutSummary: "MCA graduate and Software Developer Intern with hands-on experience contributing to web and mobile application development, backend REST API integration, database management, debugging, and testing. Technical skills include Core Java, Spring Boot, Python, React.js, SQL, and MySQL.",
    aboutParagraphs: [
      "I am an MCA graduate from P.E.S. Modern College of Engineering, Pune (2024–2026) and a BCA graduate from Rajmata Jijau Shikshan Prasarak Mandal ACS College (2018–2021), with a solid grounding in computer science fundamentals, DBMS, and Data Structures & Algorithms (DSA).",
      "My engineering expertise is centered on Core Java (OOP, Collections Framework, Exception Handling, Multithreading), enterprise backend development with Spring Boot, JSP, Servlets, JDBC, REST APIs, and project lifecycle management with Maven.",
      "During my internship at Landmark Techedge Pvt. Ltd. (December 2025 – June 2026), I contributed to web and mobile application development using Flutter and React, built backend APIs using Python and integrated REST APIs into workflows, managed database persistence with Firebase and Supabase, and used Git for version control while collaborating within an agile team.",
      "I have built distributed systems and full-stack applications including a full-stack Java Education Website (Next.js, React.js, Spring Boot, REST APIs, MySQL), the FlowMaster distributed workflow orchestrator (Java, Spring Boot, Kafka, Docker), an automated Algo Trading System (Python, Pandas, NumPy, REST APIs, MySQL), and a Java Swing VPN Client Simulator engineered with object-oriented principles."
    ],
    metrics: [
      { label: "Primary Role", value: "Java Developer", sub: "Core Java • Spring Boot • SQL" },
      { label: "Education", value: "MCA Graduate", sub: "P.E.S. Modern College of Engg." },
      { label: "Experience", value: "Landmark Techedge", sub: "Software Developer Intern" },
      { label: "Objective", value: "Junior Java Dev", sub: "Associate Software Engineer" }
    ]
  },

  experience: [
    {
      role: "Software Developer Intern",
      company: "Landmark Techedge Pvt. Ltd.",
      period: "December 2025 – June 2026",
      location: "Pune, Maharashtra",
      type: "Internship",
      description: "Contributed to web and mobile application development, backend REST API integration, database management, debugging, and testing within an engineering team.",
      highlights: [
        "Contributed to web and mobile application development using Flutter and React.",
        "Built backend APIs using Python and integrated REST APIs into application workflows.",
        "Managed application data using Firebase and Supabase databases.",
        "Used Git for version control while collaborating with the development team.",
        "Participated in debugging, testing, and enhancing application features."
      ],
      technologies: [
        "Java",
        "React.js",
        "Flutter",
        "Python REST APIs",
        "Firebase",
        "Supabase",
        "Git",
        "GitHub",
        "Debugging & Testing"
      ]
    }
  ],

  skills: {
    coreJava: {
      title: "Core Java",
      description: "Object-oriented design, Collections, Multithreading, Exception Handling, and Data Structures & Algorithms.",
      skills: ["Core Java", "OOP", "Collections Framework", "Multithreading", "Exception Handling", "Data Structures & Algorithms (DSA)"]
    },
    backend: {
      title: "Java & Backend Technologies",
      description: "Enterprise backend development, microservices, and high-performance server logic.",
      skills: ["Spring Boot", "REST APIs", "JDBC", "Servlets", "JSP", "Maven", "Python"]
    },
    database: {
      title: "Databases & Data Systems",
      description: "Relational persistence, schema modeling, and real-time cloud datastores.",
      skills: ["SQL", "MySQL", "Firebase", "Supabase", "DBMS"]
    },
    web: {
      title: "Web Technologies",
      description: "Modern, responsive, and accessible interactive interfaces and web applications.",
      skills: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Bootstrap"]
    },
    tools: {
      title: "Tools & IDEs",
      description: "Industry-standard developer environments, version control, and API testing platforms.",
      skills: ["IntelliJ IDEA", "Eclipse IDE", "VS Code", "Git", "GitHub", "Postman"]
    },
    cloud: {
      title: "Cloud & CS Fundamentals",
      description: "Cloud compute, object storage, identity access, and core computer science fundamentals.",
      skills: ["AWS EC2", "Amazon S3", "AWS IAM (Basic)", "DBMS", "DSA"]
    }
  },

  projects: [
    {
      id: "java-education-website",
      title: "Java Education Website",
      tagline: "Full-Stack Learning & Interview Preparation Platform",
      description: "Built a full-stack educational platform for Java programming concepts and interview preparation. Developed responsive frontend interfaces using Next.js and React.js and backend REST APIs using Spring Boot. Integrated MySQL for content and user data management; deployed the frontend via Vercel.",
      technologies: ["Next.js", "React.js", "Spring Boot", "REST APIs", "MySQL", "Java"],
      liveDemo: "https://v0-java-education-website.vercel.app",
      github: "https://github.com/DeepanjaliIshte",
      featured: true,
      badge: "Full-Stack Spring Boot & Next.js",
      stats: "Spring Boot • MySQL • Vercel",
      visualTheme: "code"
    },
    {
      id: "flowmaster",
      title: "FlowMaster",
      tagline: "Distributed Workflow Orchestration & Task Execution Engine",
      description: "A resilient distributed workflow orchestration platform engineered for decoupled, event-driven task execution. Leverages Apache Kafka for asynchronous task message queuing, PostgreSQL for persistent execution state tracking, Docker Compose for containerized clustering, and Spring Boot worker services with automated retry semantics.",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "REST APIs"],
      liveDemo: null,
      github: "https://github.com/DeepanjaliIshte",
      featured: true,
      badge: "Distributed Architecture",
      stats: "Kafka Events • Dockerized",
      visualTheme: "workflow"
    },
    {
      id: "algo-trading-system",
      title: "Algo Trading System",
      tagline: "Automated Strategy Execution & Market Data Analysis",
      description: "Developed an algorithmic trading system to automate buy/sell decisions using predefined strategies. Implemented market-data analysis using technical indicators and integrated APIs to fetch and process trading data.",
      technologies: ["Python", "Pandas", "NumPy", "REST APIs", "MySQL"],
      liveDemo: "https://trading.landmarksol.com/",
      github: null,
      featured: true,
      badge: "FinTech & Automated Trading",
      stats: "Technical Indicators • REST APIs",
      visualTheme: "trading"
    },
    {
      id: "vpn-client-simulator",
      title: "VPN Client Simulator",
      tagline: "Desktop Network Client Simulator with OOP Architecture",
      description: "Built a Java Swing VPN client simulator with server selection and connection monitoring. Implemented data-usage tracking and a dashboard; applied object-oriented programming principles to structure the application.",
      technologies: ["Java", "Swing", "OOP", "Multithreading", "Networking"],
      liveDemo: null,
      github: "https://github.com/DeepanjaliIshte/Java-VPN-Project",
      featured: true,
      badge: "Core Java Desktop App",
      stats: "Java Swing • Connection Monitoring",
      visualTheme: "network"
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "P.E.S. Modern College of Engineering, Pune",
      affiliation: "Pune, Maharashtra",
      period: "2024 – 2026",
      credential: "Master's Degree",
      highlight: "Specialized in Core Java, Spring Boot, REST APIs, Web Technologies, Database Management Systems (DBMS), and Software Engineering."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Rajmata Jijau Shikshan Prasarak Mandal ACS College",
      affiliation: "Pune, Maharashtra",
      period: "2018 – 2021",
      credential: "Bachelor's Degree",
      highlight: "Comprehensive foundation in Computer Science, Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), and Relational Databases."
    }
  ],

  certifications: [
    {
      name: "Spring Boot Java Programming",
      issuer: "Infosys",
      category: "Enterprise Java & Backend",
      verified: true
    },
    {
      name: "Full Stack Java Developer",
      issuer: "Udemy",
      category: "Full-Stack Java Development",
      verified: true
    },
    {
      name: "Python Programming Language",
      issuer: "ATOS Syntel",
      category: "Programming & Scripting",
      verified: true
    }
  ]
};
