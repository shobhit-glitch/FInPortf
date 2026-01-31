import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
        Get In Touch
      </motion.h2>
      <div className='flex items-center justify-center gap-4 mb-8 text-3xl'>
          <a href="https://github.com/shobhit-glitch" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/shobhit-singh-b8212b234/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <FaLinkedin/>
          </a>
      </div> 
      <div className="text-center tracking-tighter">
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="my-4">
            {CONTACT.address}
          </motion.p>
          <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0}}
            transition={{ duration: 1 }}
            className="my-4">
            {CONTACT.phoneNo}
          </motion.p>
          <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-purple-500 transition-colors">
            {CONTACT.email}
          </a>
      </div>
    </div>
  )
}

export default Contacts
