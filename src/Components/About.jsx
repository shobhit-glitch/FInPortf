import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineSparkles, HiOutlineCpuChip } from "react-icons/hi2";
import SplineWrapper from './SplineWrapper';
import { ABOUT_TEXT } from "../constants";

const keyPillars = [
  {
    icon: <HiOutlineBriefcase className="text-xl text-purple-400" />,
    title: "SDE 1 @ Clappia",
    description: "Architecting on-prem readiness, real-time WebSocket generation, and active spam defenses."
  },
  {
    icon: <HiOutlineCpuChip className="text-xl text-cyan-400" />,
    title: "Cloud & Databases",
    description: "Hands-on engineering with AWS Lambda, DynamoDB, MySQL, S3 Glacier, and CloudWatch."
  },
  {
    icon: <HiOutlineAcademicCap className="text-xl text-indigo-400" />,
    title: "B.Tech in IT",
    description: "Manipal Institute of Technology — strong foundation in data structures, systems, and algorithms."
  },
  {
    icon: <HiOutlineSparkles className="text-xl text-fuchsia-400" />,
    title: "Systems Ownership",
    description: "Resolved 129+ on-call incidents, slashed cloud compute costs by 40%, and led Angular 14→20 upgrades."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 border-b border-neutral-800/80 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-3"
        >
          <span>01. ABOUT ME</span>
        </motion.div>
        
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Engineering Scalable Systems With A{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Product Mindset
          </span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-neutral-400 max-w-xl mx-auto"
        >
          From low-level microcontrollers to enterprise cloud microservices, I build software engineered for resilience and performance.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: 3D Scene with Scroll Safe Wrapper + Profile Badge */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-center"
        >
          <div className="relative w-full max-w-[420px] h-[340px] sm:h-[400px] rounded-3xl p-1 bg-gradient-to-b from-cyan-500/20 via-neutral-900/40 to-transparent border border-white/10 shadow-2xl overflow-hidden">
            <SplineWrapper 
              scene="https://prod.spline.design/nBWpWdc3UL7h-kzg/scene.splinecode" 
              className="w-full h-full rounded-[22px]"
            />
            
          </div>
        </motion.div>

        {/* Right Column: Bio Narrative & Four Pillars */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-sm mb-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Background & Architectural Approach
            </h3>
            <p className="text-neutral-300 leading-relaxed text-base mb-4 font-normal">
              {ABOUT_TEXT}
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              At Clappia, I collaborate closely with product and infrastructure teams to handle high-concurrency event ingestion, dynamic schema parsing, and low-latency mobile client synchronization.
            </p>
          </div>

          {/* Key Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyPillars.map((pillar, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-neutral-800/80 border border-neutral-700/40">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-1">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
