import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-r from-[#010f1f] via-[#0c1c2c] to-[#010f1f] text-gray-300 py-6 mt-12 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; 2025 <span className="text-cyan-400 font-semibold">Poulami Acharya</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-lg">
            <a
              href="https://github.com/pou-l-ami"
              className="hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/poulami-acharya-4b0b46266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:poulamiacharya22@example.com"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll To Top Button */}
      <button
        onClick={handleScrollTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition duration-300 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
