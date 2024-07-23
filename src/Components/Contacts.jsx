import { motion } from "framer-motion"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Contacts = () => {
  return <div className="border-b border-neutral-500 pb-20">
    <motion.h2 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:0.5}}
    className="my-10 text-center text-4xl ">Get In Touch</motion.h2>
    <div className='bold-text m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/shobhit-glitch" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shobhit-singh-b8212b234/" target="_blank"><FaLinkedin/></a>
        
        

    </div> 
    <div className="text-center tracking-tighter">
        <p className="my-4">Vashi , Navi Mumbai , Pincode :- 400703</p>
        <p className="my-4">Phone Number : +91-8268222674</p>
        <p>E-MAIL : <a href="mailto:shobhitsinghid@gmail.com" className="border-b">shobhitsinghid@gmail.com</a></p>
    </div>
  </div>
}

export default Contacts
