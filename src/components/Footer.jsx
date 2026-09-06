import React from 'react'
import wedglowImg from '../assets/img/wedglow.PNG'

const Footer = () => {
  return (
    <footer className="bg-zinc-900 bg-opacity-80 p-6 mt-20 rounded-t-lg shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={wedglowImg}
            alt="The WedGlow Studio"
            className="w-20 h-20 rounded-full border-2 border-indigo-500 shadow-md"
            loading="lazy"
          />
        </div>
        
        {/* Contact and Credits */}
        <div className="text-gray-300 text-center md:text-left space-y-1 text-sm">
          <p className="font-semibold">thewedglowstudio@gmail.com &nbsp; | &nbsp; +91 8368060390</p>
        </div>

        {/* Social Icons placeholders - you may add actual link icons here */}
        <div className="flex justify-center gap-6 text-gray-400">
          <a href="https://www.instagram.com/thewedglowstudio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-400 transition">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
