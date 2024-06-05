import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <Parallax speed={-3}>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }} 
        className="my-16 text-white"
      >
        <h2 className="my-4 text-4xl font-semibold text-center">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="flex flex-col p-4 transition duration-300 rounded-lg lg:flex-row hover:bg-gray-800">
              <div className="lg:w-1/4">
                <h3 className="text-2xl font-semibold">{experience.role}</h3>
                <p className="text-xl">{experience.year}</p>
              </div>
              <div className="lg:w-3/4">
                <h4 className="text-xl font-semibold">{experience.company}</h4>
                <p className="my-2">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-sm bg-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Parallax>
  );
};

export default Experience;
