import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Now from './pages/Now'
import TreeAnimation from './components/TreeAnimation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <nav className="fixed top-0 w-full z-50 glass-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.a
                href="/"
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                &lt;Dev/&gt;
              </motion.a>
              <div className="flex space-x-8">
                {['Projects', 'Blog', 'Now'].map((item) => (
                  <motion.a
                    key={item}
                    href={`/#/${item.toLowerCase()}`}
                    className="nav-link text-gray-300 hover:text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Tree Animation */}
      <TreeAnimation />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-500/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 mb-8 glow"
        >
          <motion.h1 
            className="text-6xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Dev Tiwari
          </motion.h1>
          
          <motion.div
            className="code-block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            const curious = true;
          </motion.div>
          
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Computer Science student at the University of Alberta — building modern, human-centered software with curiosity and intent.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/blog"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Read Blog
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="px-6 py-3 rounded-lg border border-purple-500 text-purple-400 font-medium hover:bg-purple-500/10 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default App 