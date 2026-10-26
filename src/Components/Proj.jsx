import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineCheckCircle, HiOutlineSparkles } from "react-icons/hi2";
import { PROJECTS, CONTACT } from '../constants';

const Proj = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-neutral-800/80 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3"
        >
          <span>04. FEATURED WORK</span>
        </motion.div>

        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
        >
          Featured Engineering{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-neutral-400 max-w-xl mx-auto"
        >
          A selection of projects reflecting distributed backend design, responsive mobile client engineering, and real-time IoT computation.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group p-6 sm:p-8 lg:p-10 rounded-3xl bg-neutral-900/30 border border-neutral-800/80 hover:border-purple-500/30 hover:bg-neutral-900/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-purple-950/15"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual / Screenshot Column */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-neutral-700/50 bg-neutral-950/80 p-2 group-hover:border-purple-500/40 transition-colors">
                    <div className="w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                        <HiOutlineSparkles className="text-xs" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-7 flex flex-col ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="text-xs font-mono text-purple-400 tracking-wider uppercase mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-neutral-950/40 border border-neutral-800/80">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <HiOutlineCheckCircle className="text-cyan-400 text-base flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-medium text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links / Action Buttons */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-md active:scale-95"
                      >
                        <FaGithub className="text-base" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-purple-600/30 active:scale-95"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* GitHub Contributions Terminal Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 max-w-5xl mx-auto rounded-3xl bg-neutral-900/40 border border-neutral-800/80 p-6 sm:p-10 backdrop-blur-md shadow-xl"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-neutral-800/80 text-white text-2xl border border-neutral-700">
              <FaGithub />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                GitHub Contributions
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Continuous open-source commits and project repositories
              </p>
            </div>
          </div>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs sm:text-sm font-medium text-purple-300 hover:text-white border border-neutral-700/60 transition-colors"
          >
            <span>@shobhit-glitch</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>

        {/* Scrollable calendar view */}
        <div className="w-full overflow-x-auto py-2 flex justify-center">
          <GitHubCalendar 
            username="shobhit-glitch" 
            blockSize={14} 
            blockMargin={5} 
            colorScheme="dark"
            fontSize={14} 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Proj;