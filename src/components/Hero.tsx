import { TypingAnimation } from "./TypingAnimation";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Cosmic floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse cosmic-glow"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700 cosmic-glow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-300 cosmic-glow"></div>
      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-500/15 rounded-full blur-lg animate-pulse delay-1000 star-glow"></div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Dev Tiwari
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in delay-300">
            CS student who loves building cool things with code.
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-8 animate-fade-in delay-500">
            Always curious. Occasionally caffeinated.
          </p>
        </div>
        
        <div className="h-16 flex items-center justify-center mb-8">
          <TypingAnimation />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 glass-button rounded-lg font-semibold text-white hover:text-blue-400 transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
