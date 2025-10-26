interface ProjectCardProps {
  title?: string;
  description?: string;
  technologies?: string[];
  achievements?: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
}

export default function ProjectCard({ 
  title = 'Project Title', 
  description = 'Project description', 
  technologies = [], 
  achievements = [], 
  githubUrl = null, 
  liveUrl = null 
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col p-6 cursor-pointer">
      
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-2 mb-4 flex-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                <svg className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Technologies */}
        <div className="flex gap-2 flex-wrap mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:scale-110 hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm">Code</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Bottom gradient line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
    </div>
  );
}