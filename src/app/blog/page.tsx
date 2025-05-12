'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Temporary mock data
const posts = [
  {
    id: 1,
    title: 'Building a Modern Portfolio with Next.js',
    excerpt: 'Learn how to create a stunning portfolio website using Next.js, Tailwind CSS, and Framer Motion.',
    date: '2024-03-20',
    likes: 42,
    views: 156,
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: '2024-03-18',
    likes: 28,
    views: 98,
  },
  // Add more mock posts as needed
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const blogPost = {
  title: "const curious = true; — Why I Fell in Love with Full-Stack Development",
  date: "March 2024",
  content: `For a long time, I've felt lost. Not in a dramatic way—just in that quiet, restless way where nothing really clicks, even when you're doing all the "right" things. I bounced between ideas, majors, paths… but deep down, I always knew one thing:

I wanted to create something.

That itch to build, to make, to bring something into the world—that never went away. I just didn't know how to channel it.

Then I found coding.

It didn't start with some textbook or CS lecture. It started with curiosity. I'd open developer tools on random websites just to peek behind the curtain. I had no clue what I was looking at, but I wanted to know. Every time something clicked, it felt like I was discovering a new superpower.

That curiosity led me into web dev, and eventually, full-stack development—a space where I could actually create something end-to-end, from the design the user sees to the database holding it all together.`
}

export default function Blog() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <main className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h1>

        <motion.article 
          className="bg-gray-800 rounded-lg p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-purple-400">{blogPost.title}</h2>
            <span className="text-sm text-gray-400">{blogPost.date}</span>
          </div>

          <AnimatePresence>
            {isExpanded ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="prose prose-invert max-w-none">
                  {blogPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  ))}
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
        </motion.article>
      </div>
    </main>
  )
} 