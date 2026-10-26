import projectLiken from "../assets/About.png";
import projectAdmission from "../assets/admissionform.png";
import projectEmbedded from "../assets/embeddedc.jpeg";

export const HERO_CONTENT = `Software Development Engineer 1 at Clappia specializing in distributed cloud microservices, serverless architectures, and real-time systems. Experienced in architecting S3 event-driven pipelines, WebSocket document generation, mobile Capacitor modernizations, and production security mitigations using AWS Lambda, DynamoDB, MySQL, TypeScript, Angular, and Node.js.`;

export const ABOUT_TEXT = `I am a Software Development Engineer 1 at Clappia with a B.Tech in Information Technology from Manipal Institute of Technology (2021–2025). Over the past year, I have spearheaded mission-critical initiatives including the end-to-end on-premise readiness program across 4 core microservices, mitigating live production spam attacks via Google reCAPTCHA and AWS WAF, architecting real-time WebSocket PDF generation to overcome 29-second timeout ceilings, and designing an S3-triggered HEIC pipeline that slashed cloud compute costs by 40%. With deep hands-on expertise in AWS (Lambda, DynamoDB, S3, CloudWatch), MySQL, TypeScript, Angular (14→20 migration), and Capacitor 8, I thrive on taking full end-to-end ownership of resilient distributed systems and production-grade software.`;

export const EXPERIENCES = [
  {
    year: "August 2025 - Present",
    role: "Software Development Engineer 1",
    company: "Clappia",
    location: "Bangalore, India",
    type: "Full-Time",
    description: `Architect and scale enterprise low-code platform microservices supporting thousands of customer workflows. Led the end-to-end on-premise readiness program across 4 core backend services and mobile app builds. Rebuilt mobile PDF document generation over WebSockets to eliminate hard 29-second failure limits. Designed an S3-triggered HEIC-to-JPEG conversion pipeline in FileManagementService, cutting Lambda compute costs by ~40% and resolving broken previews on mobile. Mitigated an active production attack by deploying Google reCAPTCHA and configuring AWS WAF traffic filtering. Diagnosed and resolved the DynamoDB 400KB item-size UTF-8 multi-byte spillover bug. Resolved 129+ on-call production incidents with zero downtime.`,
    highlights: [
      "Production Attack Defense: Mitigated active spam attack via Google reCAPTCHA & AWS WAF rule enforcement",
      "Real-Time WebSocket Printing: Rebuilt mobile PDF generation flow over WebSockets, removing 29s timeout ceilings",
      "Automated S3 HEIC Pipeline: Slashed monthly cloud compute costs by ~40% via event-driven upload conversion",
      "Capacitor 8 & Angular Migration: Upgraded 6+ native plugins (Apple Sign-In on Android, Barcode Scanner, Auth) and leading ongoing Angular 14→20 UI migration",
      "On-Premise Readiness: Led end-to-end on-premise deployment across 4 microservices and mobile builds",
      "DynamoDB 400KB Fix: Resolved Telugu & multi-byte UTF-8 character length undercounting near DynamoDB item limits",
      "Client Log Archival: Built S3 Glacier Deep Archive retention system ensuring long-term audit & compliance data preservation",
      "129+ On-Call Incidents Resolved: Fixed production decrypt failures (InvalidCiphertextException), ElasticSearch breaks, and iOS offline sync"
    ],
    technologies: ["AWS Lambda", "DynamoDB", "MySQL", "TypeScript", "Node.js", "WebSockets", "Angular", "Capacitor 8", "AWS WAF", "Google reCAPTCHA", "S3 Glacier"],
  },
  {
    year: "February 2025 - July 2025",
    role: "Software Development Intern",
    company: "Clappia",
    location: "Bangalore, India",
    type: "Internship",
    description: `Owned end-to-end reliability of Google Sheets and Microsoft 365 (OneDrive, Excel) integrations supporting 100+ concurrent synchronizations with real-time WebSocket status updates and resilient error handling. Integrated ICICI EazyPay payment gateway into Design App for in-app customer collections. Migrated Lambda functions to AWS Graviton (ARM64) architecture and optimized CloudWatch log retention policies, substantially reducing infrastructure compute and storage overhead. Shipped native mobile Gantt chart rendering on iOS and Android.`,
    highlights: [
      "Google Sheets & M365 Sync Engine: Supported 100+ concurrent synchronizations with two-way sheet-to-submission sync",
      "AWS Graviton (ARM64) Migration: Optimized Lambda execution cost-efficiency and CloudWatch log lifecycle retention",
      "Mobile Gantt Chart Module: Delivered native interactive schedule visualizer with cross-platform export support"
    ],
    technologies: ["AWS Lambda", "Node.js", "MySQL", "DynamoDB", "React", "REST APIs", "CloudWatch", "Graviton ARM64"],
  },
  {
    year: "June 2023 - July 2023",
    role: "Summer Intern",
    company: "Reliance Jio",
    location: "Mumbai, India",
    type: "Internship",
    description: `Built an automated image validation and duplicate detection system using Node.js, Express, MongoDB, and Sharp. Reduced duplicate user submissions by 40% via perceptual hashing algorithms, restructured document schemas to eliminate 25% structural redundancy, accelerated image processing speeds by 20%, and reduced asset storage requirements by 30%.`,
    highlights: [
      "Curtailed duplicate submissions by 40% via automated perceptual hashing validation",
      "Eliminated 25% redundant schema fields in high-scale document databases",
      "Cut asset storage requirements and ingest latency by 30% via Sharp compression pipelines"
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Sharp", "Image Processing", "REST APIs"],
  },
];

export const PROJECTS = [
  {
    title: "NABH Healthcare Accreditation & Grading Portal",
    category: "Enterprise Cloud Application",
    featured: true,
    image: projectAdmission,
    description:
      "A high-security institutional accreditation portal facilitating healthcare grading workflows, candidate submissions, and administrative reviews. Engineered secure time-bound signed URL public APIs for private S3 document access and integrated ICICI EazyPay payment collections.",
    highlights: [
      "Time-bound signed URL public API for secure private S3 document retrieval",
      "ICICI EazyPay payment gateway integration with idempotent webhook validation",
      "Role-based administrative dashboards for institutional candidate evaluation"
    ],
    technologies: ["Node.js", "Express.js", "AWS S3", "AWS Lambda", "ICICI EazyPay", "REST APIs"],
    githubUrl: "https://github.com/shobhit-glitch",
    liveUrl: null,
  },
  {
    title: "Liken - Social Media & Blogging App",
    category: "Mobile Application",
    featured: true,
    image: projectLiken,
    description:
      "A responsive, community-driven social networking and blogging platform built for seamless mobile storytelling. Implemented Firebase authentication, real-time database synchronization, dynamic user feeds, and smooth gesture transitions.",
    highlights: [
      "Real-time post sync and user comment threads via Firebase",
      "Granular user authentication and session persistence",
      "Custom Android XML UI designed for low-latency scrolling"
    ],
    technologies: ["Android Studio", "Kotlin", "Java", "Firebase", "XML UI"],
    githubUrl: "https://github.com/shobhit-glitch",
    liveUrl: null,
  },
  {
    title: "College Admission Management Platform",
    category: "Full-Stack Web App",
    featured: false,
    image: projectAdmission,
    description:
      "An end-to-end institutional admission portal facilitating candidate registration, document upload workflows, and administrative verifications. Features secure multipart uploads via Multer and automated document deduplication using Sharp.",
    highlights: [
      "Sharp-powered document deduplication and compression engine",
      "Role-based administrative dashboards with filtering and status updates",
      "Optimized document schemas for rapid applicant query retrieval"
    ],
    technologies: ["Node.js", "Express.js", "MySQL", "Multer", "Sharp", "REST API"],
    githubUrl: "https://github.com/shobhit-glitch",
    liveUrl: null,
  },
  {
    title: "Air Quality Monitoring System",
    category: "Embedded IoT & Hardware",
    featured: false,
    image: projectEmbedded,
    description:
      "An embedded environmental monitoring station utilizing the ARM Cortex-M3 (LPC1768) microcontroller and MQ-135 electrochemical sensor. Computes real-time pollutant concentrations (CO2, ammonia, benzene) and outputs live AQI readings to an LCD display.",
    highlights: [
      "Calibrated analog-to-digital sensor conversion for accurate AQI metrics",
      "Low-level register programming in Embedded C on ARM LPC1768",
      "Real-time interrupt-driven LCD telemetry updates"
    ],
    technologies: ["Embedded C", "ARM Cortex-M3", "LPC1768", "MQ-135 Sensor", "UART"],
    githubUrl: "https://github.com/shobhit-glitch",
    liveUrl: null,
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Cloud & Backend",
    skills: [
      { name: "AWS Lambda & Serverless", level: "Expert" },
      { name: "Node.js & Express", level: "Expert" },
      { name: "AWS DynamoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "WebSockets & Real-Time Sync", level: "Advanced" },
      { name: "Google reCAPTCHA & AWS WAF", level: "Advanced" },
      { name: "AWS S3 & Glacier", level: "Advanced" },
      { name: "CloudWatch & Step Functions", level: "Advanced" },
    ]
  },
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "TypeScript", level: "Expert" },
      { name: "Angular (14 to 20)", level: "Advanced" },
      { name: "Capacitor 8 & Ionic", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Proficient" },
    ]
  },
  {
    title: "Core & Systems",
    skills: [
      { name: "C++", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Java", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "Git", level: "Advanced" },
      { name: "Sharp Image Processing", level: "Advanced" },
    ]
  }
];

export const CONTACT = {
  address: "Vashi, Navi Mumbai / Bangalore, India",
  phoneNo: "+91-826-8222-674",
  email: "shobhitsinghid@gmail.com",
  github: "https://github.com/shobhit-glitch",
  linkedin: "https://www.linkedin.com/in/shobhit-singh-b8212b234/",
};
