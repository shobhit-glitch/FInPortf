import React from 'react';
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Hero = () => {
  return (
    <div className=" border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap h-full">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
          <div className="flex flex-col items-center lg:items-start p-4 lg:p-0 text-center lg:text-left">
            <motion.h1 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 pl-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Shobhit <span className='font-normal'>Singh</span>
            </motion.h1>
            <motion.span 
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent pl-10">
              Third Year B.Tech IT Student
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify tracking-tighter pl-10">
              Driven by a desire to innovate and solve complex problems. Eager to contribute to impactful projects in the tech industry.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
        
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-full max-w-sm h-auto justify-center mr-20"
          >
            <Spline scene="https://prod.spline.design/PjaLpTFEOcC2oBKs/scene.splinecode" />
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
