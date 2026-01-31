import React from 'react';
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';
import { PROJECTS } from '../constants';

const Proj = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl">
        PROJECTS
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0}}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center lg:w-1/4">
              <img src={project.image} alt={project.title} width={150} height={150} className="mb-6 rounded" />
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-justify">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 border border-neutral-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="my-20 flex flex-col items-center justify-center">
        <h3 className="mb-8 text-2xl font-light">GitHub Contributions</h3>
        <div className="w-full flex justify-center overflow-x-auto">
          <GitHubCalendar 
            username="shobhit-glitch" 
            blockSize={15} 
            blockMargin={5} 
            colorScheme="dark"
            fontSize={16} 
          />
        </div>
      </div>
    </div>
  )
}

export default Proj;