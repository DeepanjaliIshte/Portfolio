export const portfolioData = {
  personalInfo: {
    name: "Deepanjali R. Ishte",
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
    resumeUrl: "/resume/Deepanjali_Ishte_7498545921_java developer.pdf",
    resumeDownloadName: "Deepanjali_Ishte_7498545921_java developer.pdf",
    aboutSummary: "MCA graduate and Software Developer Intern with hands-on experience contributing to web and mobile application development, backend REST API integration, database management, debugging, and testing. Technical skills include Core Java, Spring Boot, Python, React.js, SQL, and MySQL.",
    aboutParagraphs: [
      "I am an MCA graduate from P.E.S. Modern College of Engineering, Pune (2024–2026) and a BCA graduate from Rajmata Jijau Shikshan Prasarak Mandal ACS College (2018–2021), with a solid grounding in computer science fundamentals, DBMS, and Data Structures & Algorithms (DSA).",
      "My engineering expertise is centered on Core Java (OOP, Collections Framework, Exception Handling, Multithreading), enterprise backend development with Spring Boot, JSP, Servlets, JDBC, REST APIs, and project lifecycle management with Maven.",
      "During my internship at Landmark Techedge Pvt. Ltd. (December 2025 – June 2026), I contributed to web and mobile application development using Flutter and React, built backend APIs using Python and integrated REST APIs into workflows, managed database persistence with Firebase and Supabase, and used Git for version control while collaborating within an agile team.",
      "I have built distributed systems and full-stack applications including DeepCodeWarriors (full-stack Java learning & interview preparation platform with Next.js, Spring Boot, and MySQL), the FlowMaster distributed workflow orchestrator (Java, Spring Boot, Kafka, Docker), an automated Algo Trading System (Python, Pandas, NumPy, REST APIs, MySQL), and a Java Swing VPN Client Simulator engineered with object-oriented principles."
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
      id: "deepcodewarriors",
      title: "DeepCodeWarriors",
      tagline: "Programming Education & Java Interview Preparation Platform",
      problem: "Aspiring developers frequently navigate fragmented learning resources without a unified system that connects core object-oriented principles, hands-on practice, and structured interview preparation.",
      solution: "Engineered a full-stack educational web application providing interactive Java topic roadmaps, curated interview question banks, responsive UI with Next.js/React, and modular backend REST services powered by Spring Boot and MySQL.",
      description: "DeepCodeWarriors is a comprehensive educational platform for Java programming concepts and interview preparation. Built with responsive Next.js and React.js frontend interfaces communicating with Spring Boot REST APIs, and integrated with MySQL for curriculum management and persistence.",
      technologies: ["Next.js", "React.js", "Spring Boot", "REST APIs", "MySQL", "Java"],
      liveDemo: "https://v0-java-education-website.vercel.app",
      github: "https://github.com/DeepanjaliIshte",
      featured: true,
      badge: "Flagship Educational Platform",
      stats: "Spring Boot • MySQL • Vercel",
      visualTheme: "code",
      architectureSummary: "Next.js 16 App Router UI ⇄ Spring Boot 3 REST Controllers ⇄ Hibernate/JDBC ⇄ MySQL 8.0 Persistence",
      keyFeatures: [
        "Interactive Java programming modules covering OOP, Collections, Multithreading, and Exception Handling",
        "Curated interview preparation question bank categorized by difficulty and enterprise relevance",
        "High-performance REST API services built with Spring Boot for rapid content delivery",
        "Responsive, mobile-optimized interface deployed seamlessly on Vercel"
      ]
    },
    {
      id: "flowmaster",
      title: "FlowMaster",
      tagline: "Distributed Workflow Orchestration & Task Execution Engine",
      problem: "Monolithic, synchronous job dispatchers create critical system bottlenecks and lack fail-safe recovery mechanisms when coordinating multi-stage asynchronous enterprise workloads.",
      solution: "Architected a decoupled, event-driven workflow engine utilizing Apache Kafka for asynchronous task queuing, PostgreSQL for immutable state tracking, Docker Compose for multi-service containerization, and Spring Boot worker pools with automated retry semantics.",
      description: "A resilient distributed workflow orchestration platform engineered for decoupled, event-driven task execution. Leverages Apache Kafka for asynchronous task message queuing, PostgreSQL for persistent execution state tracking, Docker Compose for containerized clustering, and Spring Boot worker services with automated retry semantics.",
      technologies: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "REST APIs"],
      liveDemo: null,
      github: "https://github.com/DeepanjaliIshte",
      featured: true,
      badge: "Distributed Architecture",
      stats: "Kafka Events • Dockerized",
      visualTheme: "workflow",
      architectureSummary: "Task Producer ⇄ Apache Kafka [tasks topic] ⇄ Spring Boot Worker Pool ⇄ PostgreSQL State Store",
      keyFeatures: [
        "Event-driven task ingestion with Kafka distributed message streaming",
        "Idempotent task execution semantics with automatic failure retries and exponential backoff",
        "Transactional PostgreSQL persistence tracking end-to-end task lifecycle transitions",
        "Containerized multi-node orchestration powered by Docker Compose"
      ]
    },
    {
      id: "algo-trading-system",
      title: "Algo Trading System",
      tagline: "Automated Strategy Execution & Market Data Analysis",
      problem: "Discretionary trading analysis introduces manual calculation latency and psychological bias during fast-moving intraday market setups.",
      solution: "Engineered an automated quantitative trading system analyzing live market data feeds with Pandas and NumPy, executing predefined algorithmic trading strategies, and managing orders via financial broker REST APIs.",
      description: "Developed an algorithmic trading system to automate buy/sell decisions using predefined strategies. Implemented market-data analysis using technical indicators and integrated APIs to fetch and process trading data.",
      technologies: ["Python", "Pandas", "NumPy", "REST APIs", "MySQL"],
      liveDemo: "https://trading.landmarksol.com/",
      github: null,
      featured: true,
      badge: "FinTech & Automated Trading",
      stats: "Technical Indicators • REST APIs",
      visualTheme: "trading",
      architectureSummary: "Market Feeds ⇄ Pandas/NumPy Indicator Engine ⇄ Execution Signal Validator ⇄ Broker REST APIs",
      keyFeatures: [
        "Automated rule-based order execution based on quantitative indicator triggers",
        "Vectorized time-series analysis for trend and volatility detection using Pandas and NumPy",
        "Sub-second market telemetry capture and historical execution logging in MySQL",
        "Live operational dashboard for strategy performance tracking"
      ]
    },
    {
      id: "vpn-client-simulator",
      title: "VPN Client Simulator",
      tagline: "Desktop Network Client Simulator with OOP Architecture",
      problem: "Understanding network socket communication, multithreaded connection lifecycles, and client-server handshakes is difficult without hands-on simulation tools.",
      solution: "Engineered a desktop simulation client using Core Java Swing and strict object-oriented principles, featuring dynamic server selection, simulated encrypted tunnel states, and real-time bandwidth usage telemetry.",
      description: "Built a Java Swing VPN client simulator with server selection and connection monitoring. Implemented data-usage tracking and a dashboard; applied object-oriented programming principles to structure the application.",
      technologies: ["Java", "Swing", "OOP", "Multithreading", "Networking"],
      liveDemo: null,
      github: "https://github.com/DeepanjaliIshte/Java-VPN-Project",
      featured: true,
      badge: "Core Java Desktop App",
      stats: "Java Swing • Connection Monitoring",
      visualTheme: "network",
      architectureSummary: "Swing GUI Event Loop ⇄ Background Worker Threads ⇄ Virtual Network Adapter ⇄ Telemetry Store",
      keyFeatures: [
        "Multithreaded connection handling preventing UI thread starvation during state changes",
        "Object-oriented domain modeling separating network protocol mocks, models, and UI",
        "Dynamic server node selection and simulated handshake negotiation",
        "Real-time bandwidth throughput calculation and connection duration dashboard"
      ]
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
