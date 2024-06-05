import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/yaseeProfile.jpg';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }} 
      className="pb-4 overflow-hidden text-white border-b border-neutral-700 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-4xl font-semibold traking-tight lg:mt-16 lg:text-8xl">
              Yasindu Rathnayaka
            </h1>
            <span className="text-2xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
            DevOps Enthusiastic | Cloud Enthusiastic | Data Science Enthusiastic | Fullstack Developer | Undergraduate at SUSL faculty of computing


            </span>
            <p className="max-w-xl py-6 my-2 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img 
              className="rounded-lg" 
              src={profilePic} 
              alt="profilepic" 
              style={{ width: '500px', height: '500px', objectFit: 'cover', borderRadius: '20px' }} 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
