import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineMapPin, HiOutlineCheckCircle } from "react-icons/hi2";
import { EXPERIENCES } from '../constants';
import jioLogo from '../assets/jiologo.jpeg';

const Exo = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 border-b border-neutral-800/80 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-3"
        >
          <span>03. WORK EXPERIENCE</span>
        </motion.div>

        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Engineering Career &{" "}
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Milestones
          </span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-neutral-400 max-w-xl mx-auto"
        >
          Proven track record of architecting scalable microservices, high-throughput cloud endpoints, and cross-platform clients.
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Timeline Stem Line */}
        <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/40 to-neutral-800" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isJio = exp.company.toLowerCase().includes("jio");

            return (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col sm:flex-row gap-6 sm:gap-10 sm:pl-16 group"
              >
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex absolute left-8 -translate-x-1/2 top-6 w-9 h-9 rounded-full bg-neutral-950 border-2 border-purple-500 items-center justify-center shadow-md shadow-purple-500/30 z-10 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 group-hover:bg-cyan-400 transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="w-full p-6 sm:p-8 rounded-3xl bg-neutral-900/30 border border-neutral-800/80 hover:border-purple-500/30 hover:bg-neutral-900/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-950/10">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        {isJio && (
                          <img 
                            src={jioLogo} 
                            alt="Jio" 
                            className="w-7 h-7 rounded-lg object-contain bg-white/10 p-0.5"
                          />
                        )}
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                        <span className="font-semibold text-purple-400 text-base">
                          {exp.company}
                        </span>
                        <span className="text-neutral-600">•</span>
                        <span className="flex items-center gap-1 text-xs text-neutral-400">
                          <HiOutlineMapPin className="text-sm text-neutral-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/60 text-xs font-mono text-neutral-300">
                        <HiOutlineCalendar className="text-purple-400" />
                        {exp.year}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 sm:text-right">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-neutral-300/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {exp.description}
                  </p>

                  {/* Highlight Achievements */}
                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="mb-6 space-y-2 pt-4 border-t border-neutral-800/60">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                        Key Accomplishments
                      </span>
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <HiOutlineCheckCircle className="text-emerald-400 text-base flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/60">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300 hover:text-purple-300 hover:border-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Exo;