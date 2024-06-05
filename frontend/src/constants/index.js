import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `Highly motivated and detail-oriented student pursuing a BSc (Hons) in
Computing and Information Systems. with a strong interest in project
management and software engineering. Experienced in managing small scale projects, collaborating with cross-functional teams, and utilizing
project management toolsand development technologies. Possess
excellent communication, organizational, and problem-solving skills, with a
keen ability to manage multiple tasks and deadlines effectively. Eager to
apply academic knowledge and gain hands-on experience in a dynamic
and fast-paced work environment.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "GeneratorX",
    image: project1,
    description:
      "GeneratorX is a team project done under my leadership for remote monitoring and manual fault detection support system for generators.GeneratorX include Service management, report generation more than to the main funtions.",
    technologies: ["React", "CSS", "Arduino", "C++", "Firebase"],
  },
  {
    title: "MunchMate",
    image: project2,
    description:
      "MunchMate is a interesting food ordering application which infused from popular food chain KFC. This project can be expelled as a updated web application to KFC",
    technologies: ["React", "CSS", "Express", "node","MongoDB"],
  },
  {
    title: "Cash Register",
    image: project3,
    description:
      "Developed a Cash Register App as part of a guided project, aimed at streamlining the checkout process for small businesses. The app allows cashier to give balance without calculating amount by showing what bills to give and amount of them. It features an intuitive user interface and integrates essential functionalities such as total, item amount and balance amount.it updates remaining currency units and their available unit amount",
    technologies: ["React", "CSS", "Express", "node","MongoDB"],
  },
  {
    title: "EssenseOfMe",
    image: project4,
    description:
      "EssenceOfMe is a simple project done using react library for the introduction of myself to the world.",
    technologies: ["React", "Tailwind CSS", "Framer-motion"],
  },
  {
    title: "De Manager",
    image: project4,
    description:
      "De Manager is a team project also done under my leadership introduced based the purpose to manage appointments and work in a locally established vehicle service station.",
    technologies: ["React", "CSS", "Express", "node","MongoDB"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
