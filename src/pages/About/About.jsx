import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/my-img.webp';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 md:p-16">
      <div className="max-w-6xl w-full">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-12 md:mb-16 text-center md:text-left"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          MERN Stack Developer, <br /> Creative & Lifelong Learner
        </motion.h1>

        <div className="flex flex-col md:flex-row items-start gap-10">
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-auto max-w-sm mx-auto md:max-w-none md:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Mahmudul Karim - MERN Stack Developer"
                className="w-full h-115 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-8 text-black text-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>
              Hi! I'm Mahmudul Karim, a passionate MERN Stack Web Developer from
              Bangladesh. I specialize in creating modern, responsive, and
              scalable web applications that help businesses and individuals
              bring their ideas to life.
            </p>

            <p>
              My focus is on building user-friendly interfaces, optimizing
              performance, and writing clean, maintainable code. I am constantly
              learning new technologies and improving my skills to deliver
              high-quality web solutions.
            </p>

            <div className="border-l-4 text-black border-blue-500 pl-4 py-1 mt-6 text-base italic">
              <p className="mb-3">
                I am a lifelong learner and developer, driven by curiosity and
                passion for web development. I enjoy experimenting with new
                tools, frameworks, and techniques to create impactful digital
                experiences.
              </p>
              <p className="font-semibold not-italic text-black pt-2">
                Mahmudul Karim, MERN Stack Developer & Web Enthusiast
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
