import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiGlobe } from 'react-icons/fi';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';

const ProjectCard = ({ image, title, description, codeLink, liveLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="w-full bg-blue-900 rounded-3xl border border-gray-700 overflow-hidden
      shadow-xl hover:shadow-2xl hover:border-gray-500 duration-300 flex flex-col md:flex-row"
    >
      <div className="md:w-[55%] w-full p-6 flex items-center justify-center bg-blue-900/20">
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover max-h-[350px] w-full shadow-lg"
        />
      </div>

      <div className="border-l-3 border-blue-500 pl-4 my-5 text-base italic"></div>

      <div className="md:w-[45%] flex flex-col justify-between p-6 space-y-5">
        <div>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="text-gray-300 mt-3 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-8 pt-3">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg font-semibold border-b border-transparent hover:border-white duration-200"
          >
            <FiGithub className="text-xl" /> Code
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-lg font-semibold border-b border-transparent hover:border-white duration-200"
          >
            <FiGlobe className="text-xl" /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      image: project1,
      title: 'Book Haven',
      description:
        'Book Haven is a full MERN stack application featuring Firebase Authentication, protected routes, and MongoDB CRUD operations. Users can browse the latest books, view detailed information, sort and filter collections, and easily manage their favorite books and reading lists.',
      codeLink: 'https://github.com/mahmudulkarim420/ph-tenth-assignment.git',
      liveLink: 'https://ph-tenth-assignment-7c08c.web.app/',
    },
    {
      image: project2,
      title: 'SkillSwap',
      description:
        'SkillSwap is a fully responsive single-page application where users can browse and book skill sessions, view top-rated providers, authenticate via Email/Google, update profiles, and enjoy a modern UI with smooth animations and persistent navigation. It also includes filtering and sorting on the All Items page and is fully responsive across devices.',
      codeLink: 'https://github.com/mahmudulkarim420/ph-ninth-assignment.git',
      liveLink: 'https://ph-ninth-assignment-da6b4.web.app/',
    },
  ];

  return (
    <motion.div
      className="min-h-screen text-white px-6 md:px-20 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } },
      }}
    >
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-16">
        My Projects
      </h1>

      <div className="space-y-24">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
