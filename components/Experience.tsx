import ExperienceCard from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      title: 'Database Developer Intern',
      company: 'Global Cleantech Directory',
      location: 'Remote',
      period: 'September 2025 – Present',
      isRemote: true,
      achievements: [
        'Designed and implemented a scalable SQL database for public cleantech company data, improving query efficiency by 25% through optimized indexing and schema design',
        'Developed and optimized queries for high-frequency data retrieval, reducing average query runtime from 2.5s to 0.4s under sample load testing',
        'Validated database performance under simulated workloads, demonstrating scalability to handle projected data growth'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Polytechnique Montréal',
      location: 'Montreal, QC',
      period: 'May 2025 – August 2025',
      isRemote: false,
      achievements: [
        'Collaborated with industry partners Desjardins, BNC, Qohash, and Mondata to develop an insider-threat detection model, achieving 85% detection accuracy by translating operational requirements into process-mining pipelines and OPA policy bundles',
        'Designed and implemented a workflow-based access control (WBAC) system on top of OPA and OPAL, extending ABAC with process-aware constraints that reduced unauthorized task execution by 40% during testing',
        'Engineered real-time dynamic authorization pipeline using OPAL and OPA, by containerizing in Docker and automating Git-backed Rego policy distribution, resulting in consistent authorization across all services'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'JamSocial',
      location: 'Remote',
      period: 'March 2025 – May 2025',
      isRemote: true,
      achievements: [
        'Developed and refactored 15+ modular, responsive email templates and components with React and Tailwind CSS, reducing styling redundancy and ensuring 100% rendering consistency across desktop and mobile clients',
        'Built Node.js/Express/TypeScript backend API for subscription/opt-out workflows and click/open tracking, improving subscription processing efficiency by 35% and enabling real-time engagement analytics for 1k+ active users',
        'Developed and maintained Postman and MongoDB Compass integration tests to validate API endpoints and database operations, reducing production defects by 35% and increasing system reliability ahead of deployments'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and achievements</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              achievements={exp.achievements}
              isRemote={exp.isRemote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}