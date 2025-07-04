import React from 'react';
import profilePic from '../assets/poulami.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="min-h-screen bg-[#041421] text-white px-6 py-12 text-center flex flex-col items-center justify-center">
      
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt="Poulami Acharya"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6 transition-transform duration-500 hover:scale-105"
      />

      {/* Name and Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-cyan-300 mb-2">
        Poulami Acharya
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mb-4">
        Computer Science Student | MERN Stack Developer | CEMK'26
      </p>

      {/* Typing Animation */}
      <TypeAnimation
        sequence={[
          "🚀 I'm a passionate CSE student exploring full-stack development.",
          1500,
          '💻 Skilled in MERN, Java, SQL, and solving DSA challenges.',
          1500,
          '📚 Currently building projects and learning every day!',
          1500,
        ]}
        wrapper="span"
        speed={60}
        className="max-w-2xl text-sm md:text-base text-gray-400 mb-6 leading-relaxed block"
        repeat={Infinity}
        cursor={true}
      />

      {/* Download CV Button */}
      <div className="flex gap-4 mb-12">
        <a
          href="/poulami_cv.pdf"
          download
          className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition"
        >
          <span>📄</span> <span>Download CV</span>
        </a>
      </div>

      {/* About Me Section - Without Box */}
      <motion.div
        className="max-w-3xl text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 text-center">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
          Hello! I'm Poulami Acharya, a Computer Science Engineering student at the College of Engineering and Management, Kolaghat. I'm passionate about full-stack development and work actively with the MERN stack. Alongside my academics, I enjoy solving DSA problems using Java and regularly practice on platforms like LeetCode.
        </p>
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          My focus is on building scalable web applications with great user experiences. I'm always exploring new technologies and continuously growing as a developer.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
