'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (targetId: string) => {
    setIsOpen(false); // Close menu on mobile after clicking
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Nafay Tashfeen
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-4 flex flex-col gap-4">
          <a 
            href="#home" 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-purple-400 transition-colors py-2 transform hover:translate-x-2 transition-transform"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-purple-400 transition-colors py-2 transform hover:translate-x-2 transition-transform"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={() => scrollToSection('experience')}
            className="text-gray-300 hover:text-purple-400 transition-colors py-2 transform hover:translate-x-2 transition-transform"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={() => scrollToSection('projects')}
            className="text-gray-300 hover:text-purple-400 transition-colors py-2 transform hover:translate-x-2 transition-transform"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => scrollToSection('contact')}
            className="text-gray-300 hover:text-purple-400 transition-colors py-2 transform hover:translate-x-2 transition-transform"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}