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
        <FaLinkedin className="transition duration-300 hover:text-blue-600" />
        <FaGithub className="transition duration-300 hover:text-gray-600" />
        <FaInstagram className="transition duration-300 hover:text-pink-600" />
        <FaTwitterSquare className="transition duration-300 hover:text-blue-600" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
