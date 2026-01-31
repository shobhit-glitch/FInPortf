import project1 from "../assets/admissionform.png";
import project2 from "../assets/embeddedc.jpeg";
import project3 from "../assets/project-1.jpg";
import project4 from "../assets/project-1.jpg";

export const HERO_CONTENT = `I am a passionate software developer with a focus on full-stack web development and scalable systems. Currently working as an SDE 1 at Clappia, I specialize in building robust backend services using microservices and serverless architectures. My goal is to leverage my expertise in React, Node.js, and AWS to create innovative solutions that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a passion for creating efficient and user-friendly applications. With experience ranging from full-stack web development to mobile framework migrations and serverless architectures, I have worked with a variety of technologies including React, Node.js, AWS, and MongoDB. My journey in technology began with a deep curiosity for how things work, leading me to pursue a B.Tech in Information Technology at Manipal Institute of Technology. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.`;

export const EXPERIENCES = [
  {
    year: "August 2025 - Present",
    role: "Software Development Engineer 1",
    company: "Clappia",
    description: `Architected dynamic variable support in form components using formula parsing. Built intelligent Google Sheets integration with real-time WebSocket sync status. Engineered Microsoft 365 file and print template support with OAuth management. Upgraded mobile framework (Ionic, Angular, Capacitor) while maintaining backward compatibility. Developed hierarchical single-selectors and established CloudWatch alarms for service monitoring.`,
    technologies: ["TypeScript", "AWS Lambda", "Node.js", "Angular", "Ionic", "WebSockets"],
  },
  {
    year: "February 2025 - July 2025",
    role: "Software Development Intern",
    company: "Clappia",
    description: `Worked on microservices and serverless architecture using AWS Lambda and API Gateway. Implemented ICICI EazyPay payment gateway integration. Enhanced multi-select and bulk edit operations with custom validation blocks. Enabled Gantt chart rendering and export functionality in mobile applications.`,
    technologies: ["AWS Lambda", "API Gateway", "Node.js", "React", "Mobile Development"],
  },
  {
    year: "June 2023 - July 2023",
    role: "Summer Intern",
    company: "Reliance Jio",
    description: `Developed an image validation and duplicate detection system reducing duplicate submissions by 40%. Designed MongoDB schemas reducing redundancy by 25%. Improved image processing speed by 20% and reduced file sizes by 30% via compression.`,
    technologies: ["Node.js", "Express", "MongoDB", "Sharp"],
  },
];

export const PROJECTS = [
  {
    title: "Liken - Social Media App",
    image: project3,
    description:
      "A user-friendly blogging platform prioritizing ease of use and intuitive navigation. Built with Kotlin/Java, Firebase, and XML, Liken ensures a seamless experience across devices with robust authentication and interactive community features.",
    technologies: ["Android Studio", "Firebase", "XML", "Java"],
  },
  {
    title: "Admission Form - MERN",
    image: project1,
    description:
      "A comprehensive college admission website using Node.js, Express, MongoDB, and Multer. Features intuitive data submission, secure image uploads, and optimized storage using Sharp for image deduplication.",
    technologies: ["ExpressJs", "MongoDB", "Multer", "NodeJs", "Sharp"],
  },
  {
    title: "Air Quality Monitoring System",
    image: project2,
    description:
      "An advanced air quality monitoring system using LPC1768 microcontroller and MQ-135 sensor. Detects pollutants like CO2 and ammonia, calculating and displaying AQI in real-time on an LCD screen.",
    technologies: ["Embedded C", "ARM", "LPC 1768", "MQ-135"],
  },
];

export const CONTACT = {
  address: "Vashi, Navi Mumbai, Maharashtra, India",
  phoneNo: "+91-826-8222-674",
  email: "shobhitsinghid@gmail.com",
};
