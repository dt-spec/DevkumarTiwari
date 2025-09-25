import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ExperienceItem {
  company: string;
  position: string;
  type: string;
  duration: string;
  location: string;
  description?: string;
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "KRAFZEN",
    position: "Full-stack Developer Intern",
    type: "Contract Part-time",
    duration: "Sep 2025 - Present",
    location: "Remote",
    technologies: ["React.js", "Node.js", "TypeScript", "MongoDB"]
  },
  {
    company: "TeamUP Science",
    position: "Computer Science Workshop Assistant Director",
    type: "Part-time",
    duration: "Jul 2024 - Present",
    location: "Edmonton, Alberta, Canada",
    description: "Leading computer science workshops and mentoring students in programming fundamentals."
  },
  {
    company: "Headstarter AI",
    position: "Software Engineering Fellow",
    type: "Apprenticeship",
    duration: "Jul 2024 - Aug 2025",
    location: "Remote",
    description: "Intensive software engineering apprenticeship focusing on AI and machine learning applications.",
    technologies: ["Python", "Machine Learning", "AI", "Data Science"]
  },
  {
    company: "Cogent Integrated Business Solutions Inc.",
    position: "IT Content Writer",
    type: "Internship",
    duration: "May 2023 - Jul 2023",
    location: "Remote",
    description: "Created technical documentation and content for IT solutions and business processes."
  }
];

const education = {
  university: "University of Alberta",
  degree: "Bachelor of Science - BS, Computer Science",
  duration: "2022 - Present",
  location: "Edmonton, Alberta, Canada",
  description: "I am pursuing a Bachelor of Science in Computer Science, building a foundation in software engineering, object-oriented programming, and formal systems and logic, with an equal but primary focus on machine learning and artificial intelligence.",
  activities: "I am actively involved in several student groups at the University of Alberta, including the Undergraduate Artificial Intelligence Society (UAIS), AlbertaSat, Ada's Team, and the Formula One Student Club.",
  courses: [
    "Computer Organization and Architecture I (CMPUT 229)",
    "Formal Systems and Logic in Computing Science (CMPUT 272)",
    "Introduction to Artificial Intelligence (CMPUT 261)",
    "Introduction to the Foundations of Computation I (CMPUT 174)",
    "Introduction to the Foundations of Computation II (CMPUT 175)",
    "Machine Learning I (CMPUT 267)",
    "Practical Programming Methodology (CMPUT 201)"
  ]
};

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <p className="text-slate-400 text-lg">
            My professional journey and academic background
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Work Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-slate-700">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{exp.position}</CardTitle>
                      <p className="text-blue-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 text-right">
                      <Badge variant="secondary" className="mb-2">{exp.type}</Badge>
                      <p className="text-slate-400 text-sm">{exp.duration}</p>
                    </div>
                  </div>
                  <p className="text-slate-300">{exp.location}</p>
                </CardHeader>
                <CardContent>
                  {exp.description && (
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-blue-400 border-blue-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
          <Card className="glass-card border-slate-700">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-white text-xl">{education.degree}</CardTitle>
                  <p className="text-blue-400 font-semibold text-lg">{education.university}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-right">
                  <p className="text-slate-400 text-sm">{education.duration}</p>
                </div>
              </div>
              <p className="text-slate-300">{education.location}</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-4">{education.description}</p>
              <p className="text-slate-300 mb-4">{education.activities}</p>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Courses:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {education.courses.map((course, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
