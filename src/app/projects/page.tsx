'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    ]
  },
  {
    title: "Grocery Inventory Management System",
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
    ]
  },
  {
    title: "Greenhouse Gas Simulator",
    icon: "🌱",
    role: "Solo Developer",
    duration: "Jul 2024",
    hours: "~7 hrs",
    type: "Independent Project",
    description: "A visual and interactive simulator that models greenhouse gas emission outputs across sectors.",
    tech: ["Java", "MVC", "Multithreading"],
    achievements: [
      "Applied OOP and MVC architecture to ensure clean code separation and extensibility",
      "Leveraged Java multithreading to reduce simulator response time by 40%",
      "Conducted user testing and gathered feedback to refine interface and controls",
      "Achieved a 65% improvement in user satisfaction and retention by iterating on features based on survey data"
    ]
  },
  {
    title: "NotifyHub",
    icon: "📬",
    role: "Front-end Developer",
    duration: "Jan 2024",
    hours: "~7 hrs",
    type: "Team-Based Project",
    description: "A unified notification management dashboard that consolidates alerts across multiple platforms.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "OAuth"],
    achievements: [
      "Developed responsive UI using Next.js, Tailwind CSS, and Shadcn UI",
      "Integrated OAuth-based APIs (Gmail, Reddit, GitHub) for secure and seamless data access",
      "Prioritized user privacy by avoiding credential storage and using token-based access",
      "Built notification filters and real-time sync to help users stay focused and organized"
    ]
  }
]

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>🛠️</span> Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg p-6 cursor-pointer border border-gray-700 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h2 className="text-2xl font-bold text-purple-400">{project.title}</h2>
                </div>
                <span className="text-sm text-gray-400">{project.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded text-sm">
                  {project.role}
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                  {project.hours}
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                  {project.type}
                </span>
              </div>

              <AnimatePresence>
                {expandedProject === project.title ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-600/10 text-purple-300 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h3>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 flex items-start">
                            <span className="text-purple-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-400"
                  >
                    Click to read more...
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 