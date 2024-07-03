import logo from "../assets/SaidVagapLogo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center"><img className ="mx-1 w-32" src={logo} alt="logo" /></div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      
      <a href="https://www.linkedin.com/in/said-vagap-6b261b190/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/robotflame" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        
      </div>
    </nav>
  )
}

export default Navbar
