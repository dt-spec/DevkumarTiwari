import { Coffee, Code, Brain, Zap, Rocket, Lightbulb } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none prose-invert">
          <p className="text-xl text-slate-300 mb-6">
            Hey — I'm Dev, a computer science student who likes breaking stuff (and then fixing it).
          </p>

          <p className="text-slate-300 mb-6">
            I've built all kinds of random projects — from AI voice bots to forums for trades workers — mostly because I wanted to see if I could. I'm still figuring out what kind of developer I want to be, but I know I love working on things that are actually useful.
          </p>

          <p className="text-slate-300 mb-6">
            Most of my work is in React, TypeScript, and Python. I've messed around with FastAPI, PostgreSQL, and recently started digging deeper into backend systems and AI stuff. I learn best when I have something real to build.
          </p>

          <p className="text-slate-300 mb-6">
            Right now I'm working on <strong className="text-blue-400">LogSwipe</strong>, a platform to help blue-collar workers connect, learn, and find better opportunities (with a bit of AI magic behind the scenes).
          </p>

          <p className="text-slate-300 mb-12">
            Still early in my journey, but I'm always down to build, learn, or just chat about tech that actually makes life better.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" />
                What I'm Into
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-purple-400" />
                  AI & voice stuff
                </li>
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-blue-400" />
                  Backend & full-stack projects
                </li>
                <li className="flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-pink-400" />
                  Useful automation
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                  Tech with actual impact
                </li>
                <li className="flex items-center">
                  <Rocket className="w-4 h-4 mr-2 text-green-400" />
                  Making cool ideas real
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-2 text-blue-400" />
                Currently
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <Code className="w-4 h-4 mr-2 text-purple-400" />
                  Working on LogSwipe (AI + forums + job stuff)
                </li>
                <li className="flex items-center">
                  <Brain className="w-4 h-4 mr-2 text-blue-400" />
                  Learning backend architecture + system design
                </li>
                <li className="flex items-center">
                  <Coffee className="w-4 h-4 mr-2 text-pink-400" />
                  Drinking too much coffee and thinking about ideas at 2AM
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
