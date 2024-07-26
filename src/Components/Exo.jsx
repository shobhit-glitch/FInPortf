import React from 'react'
import { motion } from "framer-motion"
import logo from "../assets/jiologo.jpeg"

const Exo = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:0.5}}
    className='my-20 text-center text-4xl'>Expirence</motion.h2>
    <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="w-full lg:w-1/4 ">
                <p className='mb-2 text-sm text-neutral-400 font-bold'>June, 2023 - July, 2023</p>
                <p><img src={logo} alt="" srcset="" width={150} height={150} className="mb-6 rounded py-10"/></p>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>Summer Intern-
                <span className='text-sm text-purple-100'>JIO</span></h6>
                <p className='mb-4 text-neutral-400 text-justify'>I developed a comprehensive college admission website using Node.js, Express, MongoDB, and Multer. The project features an intuitive form for candidates to submit personal data and pictures, with Multer ensuring secure and efficient image uploads. This project showcases my full-stack web development expertise, highlighting my ability to create dynamic, secure, and user-friendly applications using modern technologies like Mongoose and MongoDB.

</p>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>HTML</span>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>CSS</span>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>JavaScript</span>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>ExpressJs</span>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>NodeJs</span>
                <span className='mr-2 mt-4 rounded bg-neutral-500 px-2 py-1 text-sm text-purple-800'>MongoDB</span>
            </motion.div>
            
        </div>
    </div>
    </div>
  
}

export default Exo