import React from 'react';
import project1 from "../assets/admissionform.png";
import es from "../assets/embeddedc.jpeg";
import ap from "../assets/About.png";
import { motion } from "framer-motion";
import GitHubCalendar from 'react-github-calendar';

const Proj = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">
        PROJECTS
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full flex flex-col items-center lg:w-1/4">
          <img src={ap} alt="" width={150} height={150} className="mb-6 rounded" />
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">Liken - Social Media App</h6>
          <p className="mb-4 text-neutral-400 text-justify">
            Liken is a user-friendly blogging platform designed to prioritize ease of use and intuitive navigation, making it accessible to users of all levels. Built with Kotlin/Java, Firebase, and XML, Liken ensures a seamless experience across devices. Robust authentication safeguards user data, while interactive features like comments and likes foster a vibrant community. By combining a clean interface with powerful technology, Liken enables bloggers to focus on creating and sharing their stories effortlessly.
          </p>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">Android Studio</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">Firebase</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">XML</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">Java</span>
        </motion.div>
      </div>
      {/* copy till here for another project */}
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full flex flex-col items-center lg:w-1/4">
          <img src={project1} alt="" width={150} height={150} className="mb-6 rounded" />
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">Admission Form - MERN</h6>
          <p className="mb-4 text-neutral-400 text-justify">
          I developed a comprehensive college admission website using Node.js, Express, MongoDB, and Multer, showcasing my full-stack development expertise. The application features an intuitive form for candidates to submit personal data and images, with Multer ensuring secure and efficient image uploads. Utilizing Sharp for image deduplication, I optimized storage by preventing duplicate submissions. Leveraging MongoDB and Mongoose, I implemented robust data management and modeling solutions. This project highlights my ability to create dynamic, secure, and user-friendly applications using modern web technologies.
            </p>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">ExpressJs</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">MongoDB</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">Multer</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">NodeJs</span>
        </motion.div>
      </div>
      {/* copy till here for another project */}
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-100}}
          transition={{duration:0.5}}
          className="w-full flex flex-col items-center lg:w-1/4">
          <img src={es} alt="" width={150} height={150} className="mb-6 rounded" />
        </motion.div>
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:100}}
          transition={{duration:1}}
          className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">Air Quality Monitoring System - EmbeddedC</h6>
          <p className="mb-4 text-neutral-400 text-justify">
            The project titled "Air Quality Monitoring System with LPC1768 and MQ-135 Sensor" aims to create an advanced yet affordable system for real-time air quality monitoring. Utilizing the LPC1768 microcontroller and MQ-135 sensor, the system detects pollutants such as carbon dioxide, ammonia, methane, and volatile organic compounds, processing this data to determine the Air Quality Index (AQI) which is then displayed on a 16x2 LCD screen. Designed to be user-friendly, it features optional data recording and addresses issues like sensor calibration, interface design, and noise reduction. The system is intended for monitoring indoor air quality, industrial environments, and personal health, providing reliable information to enhance safety and health in various settings.
          </p>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">Embedded C</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">ARM</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">LPC 1768</span>
          <span className="mr-2 rounded bg-neutral-500 px-2 py-1 text-sm font-medium text-purple-800">MQ-135</span>
        </motion.div>
      </div>
      <div className="my-20 flex justify-center">
        <GitHubCalendar 
          username="shobhit-glitch" 
          blockSize={15} 
          blockMargin={5} 
          color="#6a0dad" 
          fontSize={16} 
        />
      </div>
    </div>
  )
}

export default Proj;