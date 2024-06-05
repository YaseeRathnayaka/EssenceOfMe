import { motion } from 'framer-motion';
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaJava, FaNodeJs, FaGithub, FaFigma, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiExpress, SiTensorflow, SiJupyter, SiArduino, SiCplusplus } from 'react-icons/si';

const technologyIcons = {
  React: <FaReact className="text-6xl text-blue-500" />,
  CSS: <FaCss3Alt className="text-6xl text-blue-700" />,
  Tailwind: <SiTailwindcss className="text-6xl text-teal-500" />,
  Python: <FaPython className="text-6xl text-yellow-500" />,
  Java: <FaJava className="text-6xl text-red-600" />,
  MongoDB: <SiMongodb className="text-6xl text-green-500" />,
  MySQL: <SiMysql className="text-6xl text-blue-500" />,
  PostgreSQL: <SiPostgresql className="text-6xl text-blue-700" />,
  Firebase: <SiFirebase className="text-6xl text-yellow-500" />,
  ExpressJS: <SiExpress className="text-6xl text-gray-500" />,
  NodeJS: <FaNodeJs className="text-6xl text-green-600" />,
  TensorFlow: <SiTensorflow className="text-6xl text-orange-500" />,
  Jupyter: <SiJupyter className="text-6xl text-orange-600" />,
  Arduino: <SiArduino className="text-6xl text-blue-500" />,
  "C++": <SiCplusplus className="text-6xl text-blue-700" />,
  GitHub: <FaGithub className="text-6xl text-black" />,
  HTML: <FaHtml5 className="text-6xl text-orange-500" />,
  Figma: <FaFigma className="text-6xl text-purple-500" />,
  PHP: <FaPhp className="text-6xl text-purple-700" />,
};

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }} 
      className="my-16 text-white"
    >
      <h2 className="my-4 text-4xl font-semibold text-center">Technologies</h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Object.keys(technologyIcons).map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center p-4 transition-transform transform bg-gray-800 rounded-lg hover:scale-105"
          >
            {technologyIcons[tech]}
            <span className="mt-2 text-lg">{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
