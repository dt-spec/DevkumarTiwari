import { motion } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  {
    title: "The Future of Computer Science Education in the AI Era",
    excerpt: "Exploring how artificial intelligence is reshaping computer science education and what students need to know to stay ahead.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "AI & Education",
    tags: ["AI", "Education", "Computer Science"],
    content: `The landscape of computer science education is undergoing a profound transformation, driven by the rapid advancement of artificial intelligence. As AI tools become more sophisticated and accessible, they're not just changing how we teach programming—they're redefining what it means to be a computer scientist.

In this article, I explore how AI is reshaping computer science education and what this means for current and future students. From automated code generation to AI-powered learning assistants, we're seeing a fundamental shift in how programming is taught and learned.

Key points covered:
• The impact of AI coding assistants on learning
• New skills needed in the AI era
• How universities are adapting their curricula
• The future of programming education`,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI in Career Development: A Student's Guide",
    excerpt: "How AI is transforming career paths in technology and what students should do to prepare for the future job market.",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Career Development",
    tags: ["AI", "Career", "Technology"],
    content: `The job market is evolving at an unprecedented pace, with AI playing a central role in this transformation. For computer science students, understanding these changes is crucial for career planning and development.

This guide explores how AI is creating new opportunities while also disrupting traditional career paths. I share insights from industry experts and provide actionable advice for students looking to build successful careers in the age of AI.

Topics covered:
• Emerging AI-related career paths
• Skills that will remain valuable
• How to leverage AI in your job search
• Building a future-proof career strategy`,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Learning to Code in the Age of AI",
    excerpt: "A personal journey of adapting to AI-powered development tools and maintaining core programming skills.",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Learning",
    tags: ["AI", "Programming", "Learning"],
    content: `As AI coding assistants become more sophisticated, the way we learn and practice programming is changing dramatically. In this article, I share my experience of learning to code in an era where AI can generate code, debug issues, and even explain complex concepts.

I discuss the challenges and opportunities that AI presents for new programmers, and how to maintain a strong foundation in programming fundamentals while leveraging AI tools effectively.

Key insights:
• Balancing AI assistance with fundamental learning
• Developing critical thinking in programming
• Using AI to accelerate learning
• Maintaining coding independence`,
    color: "from-green-500 to-emerald-500"
  }
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">AI & Technology Blog</h1>
          <p className="text-gray-400">Exploring the intersection of AI, education, and career development</p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => setExpandedPost(expandedPost === post.title ? null : post.title)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${post.color} text-white`}>
                  {post.category}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedPost === post.title ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700">
                  <div className="prose prose-invert max-w-none">
                    {post.content.split('\n\n').map((paragraph, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-gray-300 mb-4"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 text-center">
                <span className="text-sm text-purple-400">
                  {expandedPost === post.title ? "Click to collapse" : "Click to read more"}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog; 