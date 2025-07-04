import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { motion, useScroll } from "framer-motion";

import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';

function App() {
   const { scrollYProgress } = useScroll();
  return (
    

    <Router>
       <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="app-wrapper flex flex-col min-h-screen bg-[#041421]">

        <Navbar />
         <div className="page-transition flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
