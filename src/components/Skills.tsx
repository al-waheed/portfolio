import { Code2, Database, Layout, Server, GitBranch } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        "React",
        "Redux Tookit/Context Api",
        "JavaScript/HTML/CSS",
        "React Query",
        "Webflow",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      skills: ["Firebase", "Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      skills: ["MongoDB", "Firebase", "Firestore"],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Design & Opimization",
      skills: [
        "Figma",
        "Responsive Design",
        "User Research",
        "SEO",
        "Google Analytics",
        "Google Tag Manager",
      ],
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "Notion",
        "Linear",
        "Trello",
        "VS Code",
        "CI/CD",
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full bg-slate-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
          Skills & Expertise
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-slate-300 group/item hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover/item:scale-150 transition-transform"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
