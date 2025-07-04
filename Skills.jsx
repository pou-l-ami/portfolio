import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import react from '../assets/react.png';
import java from '../assets/java.png';
import mernstack from '../assets/mernstack.png';
import javascript from '../assets/javascript.png';
import sql from '../assets/sql.png';

const skills = [
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'React', icon: react },
  { name: 'Java', icon: java },
  { name: 'MernStack', icon: mernstack },
  { name: 'Javascript', icon: javascript },
  { name: 'SQL', icon: sql },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#111] text-white px-6 py-16 text-center">
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-12">Skills</h2>

      <div className="overflow-hidden w-full">
        <div className="flex gap-8 animate-marquee w-max">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 w-36 h-44 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 mx-4"
              style={{ boxShadow: '0 0 20px 2px rgba(34, 211, 238, 0.3)' }}
            >
              <img src={skill.icon} alt={skill.name} className="w-20 h-20 mb-3" />
              <p className="text-cyan-300 font-medium text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
