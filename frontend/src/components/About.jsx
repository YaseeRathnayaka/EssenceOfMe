import { motion } from 'framer-motion';
import { ABOUT_TEXT } from '../constants';
import profilePic from '../assets/kevinRushProfile.png';

const About = () => {
  return (
    <motion.div 
      initial={{ x: '-100vw' }} 
      animate={{ x: 0 }} 
      transition={{ type: 'spring', stiffness: 120 }} 
      className="flex flex-col items-center my-16 text-center text-white lg:flex-row lg:text-left"
    >
      <div className="lg:w-1/3">
        <img className="w-2/3 mx-auto rounded-full lg:w-full" src={profilePic} alt="profile" />
      </div>
      <div className="lg:w-2/3 lg:pl-12">
        <h2 className="my-4 text-4xl font-semibold">About Me</h2>
        <p className="text-lg leading-relaxed">{ABOUT_TEXT}</p>
      </div>
    </motion.div>
  );
};

export default About;
