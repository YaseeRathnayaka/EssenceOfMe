import { motion } from 'framer-motion';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -250 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', stiffness: 120 }} 
      className="flex items-center justify-between py-6 mb-20 text-white"
    >
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href="/about" className="text-gray-400 hover:text-gray-600">About Me</a>
        <a href="/projects" className="text-gray-400 hover:text-gray-600">Projects</a>
        <a href="/experience" className="text-gray-400 hover:text-gray-600">Experience</a>
        <a href="/certifications" className="text-gray-400 hover:text-gray-600">Certifications</a>
        <a href="/contact" className="text-gray-400 hover:text-gray-600">Contact Me</a>
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <FaLinkedin className="text-blue-400 hover:text-blue-600" />
        <FaGithub className="text-gray-400 hover:text-gray-600" />
        <FaInstagram className="text-pink-400 hover:text-pink-600" />
        <FaTwitterSquare className="text-blue-400 hover:text-blue-600" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
