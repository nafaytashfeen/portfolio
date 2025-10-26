import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Flight Booking Web Application',
      description: 'A full-stack flight booking system with dynamic search, real-time availability, and seamless booking experience.',
      technologies: ['JavaScript', 'Python', 'Flask', 'Node.js', 'PostgreSQL'],
      achievements: [
        'Developed frontend interactivity with Node.js, creating a dynamic, user-friendly interface for easy flight searching and booking',
        'Implemented search functionality using Python and Flask, connecting frontend and backend seamlessly with RESTful APIs',
        'Improved search queries by 40% through efficient data retrieval strategies in PostgreSQL'
      ],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'MYSH Linux Shell',
      description: 'A custom Unix/Linux shell implementation with advanced features including pipelines, networking, and process management.',
      technologies: ['C', 'Bash', 'Unix/Linux', 'Sockets', 'Networking'],
      achievements: [
        'Delivered a Linux/Unix shell with built-in commands, pipelines, background jobs, and process management validated by automated tests',
        'Created networking commands enabling multi-client chat over TCP sockets with message routing and user IDs',
        'Engineered heap-based variable storage with safe allocation, validated with valgrind and gdb to eliminate memory leaks'
      ],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Weather Notification Script',
      description: 'Python-based application providing tailored weather notifications using OpenWeatherMap API with personalized messaging sent via Pushover.',
      technologies: ['Python', 'OpenWeatherMap API', 'Pushover API', 'OpenAI API', 'REST APIs'],
      achievements: [
        'Integrated multiple APIs (OpenWeatherMap, Pushover, OpenAI) to fetch weather data, generate personalized messages, and deliver notifications',
        'Implemented geocoding to retrieve latitude/longitude data and fetch accurate weather conditions including temperature, wind speed, and sky conditions',
        'Designed modular architecture supporting both AI-generated and preset messages for flexible notification customization'
      ],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Paint Application',
      description: 'Java-based painting application built with JavaFX following the Model-View-Controller architecture for improved modularity.',
      technologies: ['Java', 'JavaFX', 'MVC', 'Git'],
      achievements: [
        'Developed using MVC architecture, improving modularity and maintainability of the codebase',
        'Implemented collaborative version control workflows with Git using feature branches and pull requests, reducing merge conflicts by 30%',
        'Enhanced team productivity by introducing code reviews and Git branching strategies, cutting integration time by 25%'
      ],
      githubUrl: null,
      liveUrl: null
    },
    {
      title: 'Student Success Predictor',
      description: 'Machine learning model that predicts student course performance based on study habits, attendance, and extracurricular participation.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter', 'Random Forest'],
      achievements: [
        'Developed machine learning model using Random Forest Classifier to predict student pass/fail outcomes',
        'Improved baseline accuracy by 27% through hyperparameter fine-tuning and optimized feature selection',
        'Enabled real-time predictions to help users make informed decisions based on student performance metrics'
      ],
      githubUrl: null,
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-slate-900/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Showcasing my technical skills through real-world applications</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              achievements={project.achievements}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/nafaytashfeen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:from-purple-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}