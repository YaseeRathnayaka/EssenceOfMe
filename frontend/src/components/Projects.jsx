import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <Parallax speed={-2}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="my-16 text-white"
      >
        <h2 className="my-4 text-4xl font-semibold text-center">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div key={index} className="p-4 transition-transform duration-300 bg-gray-800 rounded-lg hover:scale-105">
              <img className="mb-4 rounded-lg" src={project.image} alt={project.title} />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 text-sm bg-gray-700 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Parallax>
  );
};

export default Projects;
