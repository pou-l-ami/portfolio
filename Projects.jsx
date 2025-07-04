import React from 'react';
import { motion } from 'framer-motion';
import examImage from '../assets/onlineexam.png';
import blogImage from '../assets/foodblog.png';
import sihImage from '../assets/sih.png';

const projects = [
  {
    title: 'Exam Portal',
    description:
      'Online examination system with quizzes, results, login & admin panel. Built using MERN & JWT.',
    image: examImage,
    source:"https://github.com/pou-l-ami/onlineExaminationSystem",
  },
  {
    title: 'Food Recipe Blog',
    description:
      'Recipe blog app with CRUD features, image upload (Multer), MongoDB backend and React UI.',
    image: blogImage,
    source:"https://github.com/pou-l-ami/foodblog",
  },
  {
    title: 'Smart India Hackathon',
    description:
      'AI-powered voice + translation tool for rural farmers. Presented in SIH hackathon.',
    image: sihImage,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#041421] text-white px-6 pt-28 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
    🚀 Projects & Participation
  </h2>
  {/* rest of your code */}


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
          
  key={index}
  className="bg-[#0b2239] rounded-xl shadow-md w-[250px] cursor-pointer"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={index}
  variants={fadeUpVariant}
  whileHover={{
    scale: 1.05,
    rotateX: -3,
    rotateY: 3,
    transition: { type: 'spring', stiffness: 300 },
  }}
>

            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-xl h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex justify-between">
                <a
  href={project.source}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm bg-cyan-600 hover:bg-cyan-700 px-3 py-1 rounded-md text-white"
>
  Source
</a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
