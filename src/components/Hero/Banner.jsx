import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineFileDownload } from 'react-icons/md';
import resume from '../../assets/Mahmudul_Karim_Resume.pdf';
import img from '../../assets/my-img.webp';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa6';

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 text-gray-900">
      <motion.div
        className="flex flex-col space-y-6 max-w-lg md:mr-12 mb-10 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-3xl font-semibold text-blue-900">
          Hi, I'm Mahmudul Karim
        </p>

        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-900">
          MERN Stack <br /> Web Developer
        </h1>

        <p className="text-xl opacity-80 text-gray-700">
          I build modern & scalable web applications.
        </p>

        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <a
            href={resume}
            download
            className="flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300 shadow-xl hover:cursor-pointer"
          >
            <MdOutlineFileDownload className="text-xl" />
            Resume
          </a>

          <Link
            to="/projects"
            className="flex items-center gap-2 px-8 py-3 text-lg font-medium text-blue-900 bg-white rounded-lg hover:bg-gray-100 transition duration-300 shadow-xl hover:cursor-pointer"
          >
            <FaLaptopCode className="text-xl" />
            <span>View Projects</span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-[4rem] overflow-hidden shadow-2xl border-4 border-blue-400 p-1 cursor-pointer"
        initial={{ scale: 0, boxShadow: '0 0 0 #00ffff' }}
        animate={{ scale: 1, boxShadow: '0 0 40px #00ffff' }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 60px #00ffff, 0 0 20px #3B82F6',
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={img}
          alt="Prem - MERN Stack Web Developer"
          className="w-full h-full object-cover rounded-[3.75rem]"
        />
      </motion.div>
    </div>
  );
}
