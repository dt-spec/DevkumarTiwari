import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="glass-card rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Mental Health Voice Assistant</h3>
              <p className="text-slate-300 mb-4">
                A compassionate voice-based mental health assistant that provides emotional support through natural conversations. Features include mood tracking, guided exercises, and crisis support resources.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">TailwindCSS</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">ElevenLabs API</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Framer Motion</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dt-spec/mental-health-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="glass-card rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Property Recommendation System</h3>
              <p className="text-slate-300 mb-4">
                A machine learning-based system that recommends the top 3 most comparable properties for a given subject property. The system analyzes property features and provides explanations for its recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Data Analysis</span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Evaluation Metrics</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/dt-spec/PropertyRecommendationSystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
