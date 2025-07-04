import React from 'react';
import {
  FaEnvelope, FaPhoneAlt, FaTwitter, FaGithub, FaLinkedin, FaInstagram,
  FaMedium, FaBlogger, FaYoutube, FaReddit, FaStackOverflow,
  FaCube, FaGitlab, FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#041421] text-white px-8 py-16 flex flex-col md:flex-row justify-center items-center gap-10">
      
      {/* Left Side - Contact Form */}
      <div className="w-full max-w-md animate-fadeInUp">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-10">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-cyan-300 mb-1 text-lg">Name</label>
            <input
              type="text"
              placeholder="Poulami Acharya"
              className="w-full px-4 py-3 bg-transparent border-2 border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <div>
            <label className="block text-cyan-300 mb-1 text-lg">Email</label>
            <input
              type="email"
              placeholder="poulamiacharya22@gmail.com"
              className="w-full px-4 py-3 bg-transparent border-2 border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <div>
            <label className="block text-cyan-300 mb-1 text-lg">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full px-4 py-3 bg-transparent border-2 border-cyan-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all duration-300"
          >
            Send <FaPaperPlane />
          </button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="flex flex-col gap-6 w-full max-w-md animate-fadeInUp" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-cyan-400 text-2xl" />
          <span>poulamiacharya22@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-cyan-400 text-2xl" />
          <span>8653467060</span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 mt-6">
          {[FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaMedium, FaBlogger, FaYoutube, FaReddit, FaStackOverflow, FaCube, FaGitlab].map((Icon, i) => (
            <Icon
              key={i}
              className="text-cyan-400 text-3xl cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
