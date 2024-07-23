import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";


const NavBar = () => {
  return <nav className="mb-20 flex  item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center justify-left pl-10">
       SHOBHIT SINGH
    </div>
    <div className='bold-text m-8 lg:pr-20 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/shobhit-glitch" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/shobhit-singh-b8212b234/" target="_blank"><FaLinkedin/></a>
        
        

    </div> 

  </nav>
}

export default NavBar
