import { Mail, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 mb-12 text-lg">
            Got a cool project idea? Want to chat about tech? Or just want to say hi? I'm always excited to connect with fellow builders and dreamers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <a
              href="mailto:devkumar@ualberta.ca"
              className="group glass-card p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-slate-300 text-sm">devkumar@ualberta.ca</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dev-tiwari-99a047209/"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <Linkedin className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-slate-300 text-sm">Connect professionally</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dt-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card p-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <Github className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-slate-300 text-sm">Check out my code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
