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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex items-center p-4 space-x-2 bg-gray-700 rounded-lg">
          <FaMapMarkerAlt className="text-blue-400" />
          <p className="text-white">{CONTACT.address}</p>
        </div>
        <div className="flex items-center p-4 space-x-2 bg-gray-700 rounded-lg">
          <FaPhone className="text-green-400" />
          <p className="text-white">{CONTACT.phoneNo}</p>
        </div>
        <div className="flex items-center p-4 space-x-2 bg-gray-700 rounded-lg">
          <FaEnvelope className="text-yellow-400" />
          <p className="text-white">{CONTACT.email}</p>
        </div>
      </div>
      <p className="mt-8 text-gray-400">
        Don't hesitate to contact me whenever you need assistance; I'm just a message away.
      </p>
      <p className="mt-4">&copy; {new Date().getFullYear()} Yasindu Rathnayaka. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
