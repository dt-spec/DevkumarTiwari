'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { particlesConfig } from '@/config/particles-config'
import 'particles.js'

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function Home() {
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    const text = 'const curious = true;'
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(true)
        clearInterval(typingInterval)
      }
    }, 100)

    // Initialize particles
    if (typeof window !== 'undefined') {
      window.particlesJS('particles-js', particlesConfig)
    }

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0" />
      
      {/* Hero section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.h1 
          className="text-6xl font-bold mb-8 cursor-pointer hover:text-purple-400 transition-colors glitch"
          data-text="Dev Tiwari"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Dev Tiwari
        </motion.h1>
        
        <motion.div
          className="text-2xl font-mono bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {typedText}
          <span className={`ml-1 ${isTyping ? 'animate-blink' : ''}`}>|</span>
        </motion.div>
        
        <motion.p 
          className="mt-8 text-xl text-gray-400 max-w-2xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Full-stack developer crafting digital experiences with modern technologies
        </motion.p>

        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a
            href="/blog"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Read Blog
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border border-purple-600 hover:bg-purple-600/20 rounded-lg transition-colors"
          >
               Projects
          </a>
        </motion.div>
      </div>
    </main>
  )
} 