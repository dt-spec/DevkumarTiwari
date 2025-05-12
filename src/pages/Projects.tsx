import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "Project Rivet",
    icon: "🛠️",
    role: "Full-stack Developer",
    duration: "Jan 2025 – Present",
    hours: "~10 hrs/week",
    type: "Team-Based",
    description: "A web platform designed to support blue-collar workers in discovering nearby job opportunities.",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    achievements: [
      "Architecting a streamlined job-matching system that connects workers with employers based on location, skillset, and availability",
      "Designed intuitive user flows to simplify sign-up, resume uploading, and job applications",
      "Focused on accessibility and performance to ensure the platform remains reliable for users in low-connectivity areas",
      "Implementing authentication, crew features, and AI-powered job suggestions (upcoming)"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Grocery Inventory Management",
    icon: "🧮",
    role: "Backend Developer",
    duration: "Sept 2024",
    hours: "~7 hrs",
    type: "Team-Based Academic Project",
    description: "A lightweight inventory tracking system for small grocers and suppliers, built in Python.",
    tech: ["Python", "CLI", "File-based Storage"],
    achievements: [
      "Integrated binary search algorithms and hashing to optimize search and update speeds, reducing lookup time by 3x",
      "Enabled real-time item tracking via SKU and serial number filters",
      "Reduced item mismatch reports during QA testing by 80%",
      "Used CLI-based interface and file-based data storage for simplicity and portability"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Voice Assistant",
    icon: "🤖",
    role: "Full-stack Developer",
    duration: "Mar 2024",
    hours: "~15 hrs/week",
    type: "Personal Project",
    description: "An AI-powered voice assistant that helps users manage their daily tasks and schedule.",
    tech: ["React", "Node.js", "OpenAI API", "WebSocket"],
    achievements: [
      "Implemented real-time voice recognition and natural language processing",
      "Created a responsive web interface with voice command visualization",
      "Integrated with calendar and task management APIs",
      "Achieved 95% accuracy in voice command recognition"
    ],
    color: "from-green-500 to-emerald-500"
  }
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Projects</h1>
          <p className="text-gray-400">A collection of my recent work and experiments</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-white">{project.title}</h2>
                  <p className="text-sm text-gray-400">{project.duration}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                  {project.role}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                  {project.hours}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedProject === project.title ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-gray-300 text-sm flex items-start"
                      >
                        <span className="text-purple-400 mr-2">•</span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div className="mt-4 text-center">
                <span className="text-sm text-purple-400">
                  {expandedProject === project.title ? "Click to collapse" : "Click to expand"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects; 