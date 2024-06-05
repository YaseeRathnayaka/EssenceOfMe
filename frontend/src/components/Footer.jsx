import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT } from '../constants';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1 }} 
      className="py-8 mt-16 text-center text-white bg-gray-800"
    >
      <h2 className="my-4 text-4xl font-semibold">Contact</h2>
      <div className="container flex flex-col items-center justify-center mx-auto space-y-4 md:flex-row md:space-x-8 md:space-y-0">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-blue-400" />
          <p>{CONTACT.address}</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-green-400" />
          <p>{CONTACT.phoneNo}</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-yellow-400" />
          <p>{CONTACT.email}</p>
        </div>
      </div>
      <p className="mt-8">&copy; {new Date().getFullYear()} Yasindu Rathnayaka. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
