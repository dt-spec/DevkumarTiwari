'use client'

import { motion } from 'framer-motion'

const sections = [
  {
    icon: "🛠️",
    title: "Building",
    items: [
      "LogSwipe – a networking platform to help blue-collar workers transition into new job opportunities",
      "A personal portfolio (this site!) using Next.js, Tailwind CSS, and Framer Motion",
      "An AI voice assistant as part of the Headstarter accelerator, combining LLMs + speech tech",
      "Internal tools like a notification manager and job-matching system using modern web stacks"
    ]
  },
  {
    icon: "📚",
    title: "Reading",
    items: [
      "Atomic Habits by James Clear (staying consistent > being perfect)",
      "The Pragmatic Programmer (leveling up my engineering mindset)",
      "YC and startup blogs on product-market fit, shipping fast, and staying scrappy"
    ]
  },
  {
    icon: "🧠",
    title: "Learning",
    items: [
      "Advanced TypeScript and patterns for scalable frontends",
      "Building apps with OAuth, MongoDB, and Socket.IO",
      "Improving at system design, resume writing, and technical communication"
    ]
  },
  {
    icon: "💭",
    title: "Thinking",
    items: [
      "How we can make tech more useful for non-technical communities",
      "What it takes to go from project builder to product founder",
      "How to build software that feels fast, clean, and human"
    ]
  }
]

export default function Now() {
  return (
    <main className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <span>🕒</span> Now
          </h1>
          <p className="text-gray-400">
            Last updated: May 8, 2025
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-purple-400">{section.title}</h2>
              </div>
              
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="text-purple-400 mr-2">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
} 