import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 lg:px-10">
      <div className="flex flex-shrink-0 items-center">
         <span className="text-xl font-bold tracking-tight">SHOBHIT SINGH</span>
      </div>
      <div className='flex items-center justify-center gap-4 text-2xl'>
          <a href="https://github.com/shobhit-glitch" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/shobhit-singh-b8212b234/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
      </div> 
    </nav>
  )
}

export default NavBar
