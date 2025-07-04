import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">
          My Portfolio
        </div>
        <div className="space-x-6 text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-cyan-400 font-semibold'
                : 'hover:text-cyan-300 transition-colors duration-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) =>
              isActive
                ? 'text-cyan-400 font-semibold'
                : 'hover:text-cyan-300 transition-colors duration-300'
            }
          >
            Education
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? 'text-cyan-400 font-semibold'
                : 'hover:text-cyan-300 transition-colors duration-300'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'text-cyan-400 font-semibold'
                : 'hover:text-cyan-300 transition-colors duration-300'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-cyan-400 font-semibold'
                : 'hover:text-cyan-300 transition-colors duration-300'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
