import React from 'react';
import graduationIcon from '../assets/graduation.png';

const educationData = [
  {
    period: '2017 – 2019',
    degree: 'Secondary Education',
    school: 'Kola Union Jogendra Girls High School',
  },
  {
    period: '2019 – 2021',
    degree: 'Higher Secondary Education',
    school: 'Kola Union High School',
  },
  {
    period: '2022 – 2026',
    degree: 'B.Tech (CSE)',
    school: 'College of Engineering and Management, Kolaghat',
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-[#041421] text-white px-6 py-16 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-12 animate-fadeInUp">
        🎓 Education
      </h2>

      <div className="space-y-8 w-full max-w-3xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`bg-[#0e2b3d] rounded-xl p-6 flex items-center gap-6 shadow-lg transform transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-cyan-500/30 opacity-0 animate-fadeInUp animate-delay-${index * 200}`}
            style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-cyan-500 rounded-full shadow-md">
              <img src={graduationIcon} alt="Graduation Icon" className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm text-cyan-400 font-semibold">{edu.period}</p>
              <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-gray-300">{edu.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
