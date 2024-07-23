import {RiReactjsLine} from "react-icons/ri"
import {RiTailwindCssLine} from "react-icons/ri"
import { SiCsswizardry } from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5"

import { DiBootstrap } from "react-icons/di";
import { PiFileSqlLight } from "react-icons/pi";
import { motion } from "framer-motion"

const iconvar=(duration)=>({
    initial:{y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" ,
        },
    },
});

const Techno = () => {
  return <div className="border-b border-neutral-800 pb-24">
    <h2 className='my-20  text-center text-4xl'>Technologies</h2>
    <motion.div 
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconvar(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconvar(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssLine className="text-7xl text-white-400"/>
        </motion.div>
        <motion.div 
        variants={iconvar(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiBootstrap className="text-7xl text-purple-400"/>
        </motion.div>
        <motion.div 
        variants={iconvar(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsswizardry className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
        variants={iconvar(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div 
        variants={iconvar(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <PiFileSqlLight className="text-7xl text-lightblue-400"/>
        </motion.div>
    </motion.div>
    </div>
  
}

export default Techno