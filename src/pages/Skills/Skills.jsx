import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { Cpu, Layout } from 'lucide-react';
import { motion } from 'framer-motion';


const frontendSkills = [
  { name: 'React', icon: <FaReact className="text-sky-400 text-xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-200 text-xl" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-300 text-xl" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-xl" /> },
];


const backendSkills = [
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-400 text-xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-xl" /> },
];

const uiuxSkills = [
  { name: 'Figma', icon: <SiFigma className="text-pink-400 text-xl" /> },
  { name: 'Responsive Design', icon: <Layout className="text-purple-300 text-xl" /> },
  { name: 'Prototyping', icon: <SiFigma className="text-orange-300 text-xl" /> },
];


const toolsSkills = [
  { name: 'Vs Code', icon: <TbBrandVscode className="text-blue-500 text-xl" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-300 text-xl" /> },
  { name: 'Vercel', icon: <SiVercel className="text-white text-xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-500 text-xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-xl" /> },
];

const SkillCard = ({ title, icon, skills, custom }) => (
  <motion.div
    className="
      relative
      bg-blue-900 border border-cyan-400/30 rounded-3xl p-8 backdrop-blur-xl
      shadow-[0_0_30px_rgba(0,255,255,0.25)]
      hover:shadow-[0_0_60px_rgba(0,255,255,0.7)]
      transition-all duration-300
    "
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay: custom * 0.2 }}
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="bg-white/5 p-5 rounded-2xl shadow-inner">{icon}</div>
      <h2 className="text-3xl font-semibold text-gray-200">{title}</h2>
    </div>

    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="
            flex items-center gap-2 bg-white/5 border border-cyan-400/20 
            px-5 py-2.5 rounded-full text-gray-200
            shadow-[0_0_12px_rgba(0,255,255,0.3)]
            hover:shadow-[0_0_20px_rgba(0,255,255,1)]
            hover:bg-white/10 transition-all duration-300 cursor-pointer
          "
        >
          {skill.icon} <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);


const Skills = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
    <SkillCard
      title="Frontend Development"
      icon={<FaReact className="text-sky-400 text-4xl" />}
      skills={frontendSkills}
      custom={0}
    />
    <SkillCard
      title="Backend Development"
      icon={<SiNodedotjs className="text-green-400 text-4xl" />}
      skills={backendSkills}
      custom={1}
    />
    <SkillCard
      title="UI/UX Design"
      icon={<SiFigma className="text-pink-400 text-4xl" />}
      skills={uiuxSkills}
      custom={2}
    />
    <SkillCard
      title="Tools & Technologies"
      icon={<Cpu className="text-cyan-400 text-4xl" />}
      skills={toolsSkills}
      custom={3}
    />
  </section>
);

export default Skills;
