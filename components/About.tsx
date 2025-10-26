export default function About() {
  const skills = {
    languages: ['TypeScript', 'Python', 'Java', 'C', 'SQL (PostgreSQL)', 'NoSQL (MongoDB)', 'HTML/CSS'],
    frameworks: ['React', 'Node.js', 'Express', 'Flask', 'JavaFX', 'TailwindCSS'],
    tools: ['Git', 'Docker', 'Bash', 'Unix/Linux', 'Postman', 'Supabase', 'Vercel', 'Render'],
    libraries: ['Mongoose', 'pandas', 'scikit-learn']
  };

  return (
    <section id="about" className="py-20 px-8 bg-slate-900/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know more about my background and expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Education & Bio */}
          <div>
            <div className="mb-8">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">University of Toronto</h3>
                  <p className="text-purple-400 mb-2">Honours Bachelor of Science (HBSc)</p>
                  <p className="text-gray-300 mb-1">Computer Science Specialist, Minor in Mathematics</p>
                  <p className="text-gray-400 text-sm">September 2023 – May 2027</p>
                  <p className="text-gray-400 text-sm mt-2">Mississauga, ON</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a third-year Computer Science Specialist at the University of Toronto. I have experience working in cybersecurity and full stack development. I have experience working with TypeScript, Python, Java, C, React, Express, Flask, PostgreSQL and MongoDB.
            </p>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Recently, I interned in cybersecurity at Polytechnique Montréal, where I'm helping translate industry needs into an insider-threat detection prototype and a real-time policy distribution system. Previously, I worked in full-stack development at JamSocial, where I engineered a scalable email communication system, developing modular React/Tailwind components and a TypeScript/Node.js backend API to support upcoming event notifications, reminders, and user engagement campaigns.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Problem Solver</h3>
                  <p className="text-gray-400">Optimizing systems for performance and scalability</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-purple-500/50 hover:scale-105 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Security Focused</h3>
                  <p className="text-gray-400">Building secure, reliable systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {/* Languages */}
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:scale-110 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Developer Tools */}
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Developer Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:scale-110 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Libraries */}
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.libraries.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}