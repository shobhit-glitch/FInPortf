import { useState } from 'react';
import { motion } from "framer-motion";
import { 
  RiReactjsLine, 
  RiTailwindCssLine 
} from "react-icons/ri";
import { 
  SiTypescript, 
  SiAmazondynamodb,
  SiMysql,
  SiAngular,
  SiCplusplus,
  SiSocketdotio
} from "react-icons/si";
import { 
  FaNodeJs, 
  FaAws 
} from "react-icons/fa";
import { 
  HiOutlineShieldCheck, 
  HiOutlineCloudArrowUp 
} from "react-icons/hi2";

const skillsData = [
  {
    name: "AWS DynamoDB",
    category: "database",
    categoryLabel: "Databases & Cloud",
    icon: <SiAmazondynamodb className="text-3xl text-blue-500" />,
    level: "Advanced",
    description: "Key-value schema design, GSI indexing, and multi-byte UTF-8 400KB item-size spillover optimization."
  },
  {
    name: "MySQL",
    category: "database",
    categoryLabel: "Databases & Cloud",
    icon: <SiMysql className="text-3xl text-sky-400" />,
    level: "Advanced",
    description: "Relational data modeling, Knex.js migrations, transactional pipelines, and resilient connection pooling."
  },
  {
    name: "AWS Lambda & Serverless",
    category: "cloud",
    categoryLabel: "Backend & Cloud",
    icon: <FaAws className="text-3xl text-amber-400" />,
    level: "Expert",
    description: "Microservices architecture, S3 event triggers, Graviton (ARM64) migrations, and Step Functions."
  },
  {
    name: "Google reCAPTCHA & AWS WAF",
    category: "backend",
    categoryLabel: "Backend & Security",
    icon: <HiOutlineShieldCheck className="text-3xl text-emerald-400" />,
    level: "Advanced",
    description: "Mitigated live production spam attacks via Google reCAPTCHA deployment and AWS WAF traffic filtering."
  },
  {
    name: "WebSockets & Real-Time Sync",
    category: "backend",
    categoryLabel: "Backend & Cloud",
    icon: <SiSocketdotio className="text-3xl text-purple-400" />,
    level: "Advanced",
    description: "Asynchronous document generation over WebSockets (removing 29s timeout limits) and live sync feeds."
  },
  {
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Core & Languages",
    icon: <SiTypescript className="text-3xl text-blue-400" />,
    level: "Expert",
    description: "Strict typing, generic interfaces, formula parsing engines, and enterprise SaaS codebases."
  },
  {
    name: "Node.js & Express",
    category: "backend",
    categoryLabel: "Backend & Cloud",
    icon: <FaNodeJs className="text-3xl text-emerald-500" />,
    level: "Expert",
    description: "High-throughput microservices, on-premise service orchestration, and asynchronous batch workers."
  },
  {
    name: "Angular & Capacitor 8",
    category: "frontend",
    categoryLabel: "Frontend & Mobile",
    icon: <SiAngular className="text-3xl text-red-500" />,
    level: "Advanced",
    description: "Leading ClappiaUI migration from Angular 14 to 20; maintaining native mobile plugins for iOS & Android."
  },
  {
    name: "React",
    category: "frontend",
    categoryLabel: "Frontend & Mobile",
    icon: <RiReactjsLine className="text-3xl text-cyan-400" />,
    level: "Advanced",
    description: "Custom hooks, component state architecture, memoization, and performant user interfaces."
  },
  {
    name: "AWS S3 & Glacier Deep Archive",
    category: "cloud",
    categoryLabel: "Databases & Cloud",
    icon: <HiOutlineCloudArrowUp className="text-3xl text-amber-500" />,
    level: "Advanced",
    description: "Automated S3 HEIC-to-JPEG conversion (40% compute cut), signed URLs, and long-term compliance retention."
  },
  {
    name: "Tailwind CSS & Mobile Theming",
    category: "frontend",
    categoryLabel: "Frontend & Mobile",
    icon: <RiTailwindCssLine className="text-3xl text-cyan-400" />,
    level: "Expert",
    description: "Architected ClappiaNX mobile theming platform end-to-end, design tokens, and glassmorphic UI systems."
  },
  {
    name: "C++ & Core Algorithms",
    category: "languages",
    categoryLabel: "Core & Languages",
    icon: <SiCplusplus className="text-3xl text-indigo-400" />,
    level: "Advanced",
    description: "Data structures, memory optimization, CPU scheduling algorithms, and low-level firmware engineering."
  }
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "database", label: "Databases & Cloud" },
  { id: "backend", label: "Backend & Security" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "languages", label: "Core Languages" }
];

const Techno = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all"
    ? skillsData
    : activeTab === "database"
      ? skillsData.filter(s => s.category === "database" || s.category === "cloud")
      : activeTab === "backend"
        ? skillsData.filter(s => s.category === "backend" || s.category === "cloud")
        : activeTab === "frontend"
          ? skillsData.filter(s => s.category === "frontend")
          : skillsData.filter(s => s.category === "languages");

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-neutral-800/80 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3"
        >
          <span>02. TECHNICAL ARSENAL</span>
        </motion.div>

        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Technologies &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Capabilities
          </span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-neutral-400 max-w-xl mx-auto"
        >
          Engineered across high-scale AWS serverless backends, DynamoDB, MySQL, mobile plugin ecosystems, and real-time WebSocket pipelines.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12"
      >
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                : "bg-neutral-900/60 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Grid of Skill Cards */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            key={skill.name}
            className="group relative p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-purple-500/40 hover:bg-neutral-900/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-purple-950/20"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="p-3 rounded-xl bg-neutral-800/60 border border-neutral-700/40 group-hover:scale-105 group-hover:border-purple-500/30 transition-transform">
                {skill.icon}
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                skill.level === "Expert" 
                  ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                  : skill.level === "Advanced"
                    ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                    : "bg-neutral-800 text-neutral-400 border-neutral-700"
              }`}>
                {skill.level}
              </span>
            </div>

            <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
              {skill.name}
            </h3>

            <p className="text-xs text-neutral-400 leading-relaxed font-normal">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Techno;
