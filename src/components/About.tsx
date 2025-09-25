import { Coffee, Code, Brain, Zap, Rocket, Lightbulb, Users, BookOpen, Car } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-2xl p-8 prose prose-lg max-w-none prose-invert">
          <p className="text-xl text-slate-300 mb-6">
            Hey, I'm Dev Tiwari 👋
          </p>

          <p className="text-slate-300 mb-6">
            I'm a Computer Science student at the University of Alberta, where I'm diving deep into software, AI, and cloud systems. I learn best by building things that actually work, which means most of my projects started with late-night "what if" ideas that turned into real apps.
          </p>

          <p className="text-slate-300 mb-6">
            I am currently an intern as a Full Stack Developer at <strong className="text-blue-400">Krafzen</strong> and before that I was a Software Engineer at <strong className="text-purple-400">Headstarter AI</strong>, where I shipped production-ready features, scaled backend systems, and led teams on projects like an AI-powered meal recommendation app and a real-time property recommendation system.
          </p>

          <p className="text-slate-300 mb-6">
            On campus, I'm part of the Undergraduate Artificial Intelligence Society (UAIS), work with the Formula One Racing team on autonomous systems, and help run TeamUp Science workshops to bring coding into local classrooms.
          </p>

          <p className="text-slate-300 mb-6">
            Lately, I've been building <strong className="text-blue-400">LogSwipe</strong>, a platform to help blue-collar workers connect, learn, and find better opportunities, mixing forums, jobs, and AI tools into one place.
          </p>

          <p className="text-slate-300 mb-12">
            Outside of code, you'll probably find me sketching startup ideas at 2AM, downing coffee in Cameron Library, or testing out ways to make tech more useful for real people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                Campus Involvement
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  Undergraduate AI Society (UAIS)
                </li>
                <li className="flex items-center">
                  <Car className="w-4 h-4 mr-2 text-blue-400" />
                  Formula One Racing Team - Autonomous Systems
                </li>
                <li className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-pink-400" />
                  TeamUp Science Workshops
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                  Bringing coding to local classrooms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-blue-400" />
                Currently Building
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-purple-400" />
                  LogSwipe - Blue-collar worker platform
                </li>
                <li className="flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-blue-400" />
                  AI-powered meal & property recommendations
                </li>
                <li className="flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-pink-400" />
                  Production-ready backend systems
                </li>
                <li className="flex items-center">
                  <Coffee className="w-4 h-4 mr-2 text-green-400" />
                  Late-night startup ideas at Cameron Library
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
