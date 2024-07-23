import aboutme from "../assets/aboutme.jpeg"
import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline';
const About = () => {
  return (
    <div className=" border-neutral-900  pb-4 ">
        <h2 className="my-20 text-center text-4xl">About  
        <span className="text-purple-800"> Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex items-center justify-center">
                    {/* <img src={aboutme} alt="" srcset="" className="w-full max-w-sm h-auto"/> */}
                    <Spline scene="https://prod.spline.design/nBWpWdc3UL7h-kzg/scene.splinecode" />


                </div>
                
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
             className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 maxw-xl h-auto text-justify py-20 pr-20 ">Motivated third-year IT student at Manipal Institute of Technology, committed to continuous learning and embracing emerging technologies. Dedicated to developing industry-friendly solutions with a strong ethical foundation. Eager to contribute to technology that ensures underprivileged communities have affordable access to essential services, making a positive societal impact.</p>
                    </div>
                </motion.div>

        </div>
    </div>
  )
}

export default About