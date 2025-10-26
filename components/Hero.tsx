'use client';

import Lottie from 'lottie-react';
import laptopAnimation from '../public/animations/Laptop.json';

export default function Hero() {
  const techStack = ['TypeScript', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Docker'];
  
  return (
    <section id="home" className="pt-32 pb-20 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 mb-6 hover:scale-105 transition-transform duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm">Open to Opportunities</span>
            </div>

            <h1 className="text-6xl font-bold text-white mb-4">
              Software
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-6">
              Computer Science Specialist @ UofT<span className="animate-pulse">|</span>
            </p>

            <p className="text-gray-300 text-lg mb-8">
              Building scalable web applications with modern technologies. Specializing in full-stack development, 
              database optimization, and cybersecurity solutions.
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-gray-300 hover:scale-110 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-700/50 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:from-purple-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com/nafaytashfeen" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-purple-500 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-purple-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/nafay-tashfeen" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-cyan-500 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-cyan-400"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:nafay.tashfeen@mail.utoronto.ca" 
                className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-purple-500 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-purple-400"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Lottie Animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl transition-all duration-700 opacity-50 scale-105"></div>
            <div className="w-full h-96 scale-110 md:scale-125 lg:scale-150">
              <Lottie 
                animationData={laptopAnimation} 
                loop={true}
                className="w-full h-full"
              />
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}