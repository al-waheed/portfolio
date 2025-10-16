import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Document manager",
      description:
        "Document manager is a powerful solution for managing documents and creating professional invoices in one place.",
      image: "/portfolio/05.png",
      githubUrl: "https://github.com/al-waheed/document-manager",
      liveUrl: "https://savedoc.netlify.app/",
      tags: ["React", "Redux Toolkit", "TailwindCss", "Vite"],
    },
    {
      id: 2,
      title: "Event Management Hub (Uncompleted)",
      description:
        "Event Management Hub is a simplified application to create, manage, and grow your events from registrations, verification to invitation.",
      image: "/portfolio/9.png",
      githubUrl: "https://github.com/al-waheed/event-management-hub",
      liveUrl: "https://eventmanagementhub.netlify.app/",
      tags: [
        "React",
        "React Query",
        "TailwindCss",
        "Vite",
        "Formik",
        "Firebase",
        "Firestore",
        "Framer Motion",
      ],
    },
    {
      id: 3,
      title: "ArenaDrip",
      description:
        "ArenaDrip is an E-commerce web app that facilitate online transactions of goods and services through means of the transfer of information and funds over the internet.",
      image: "/portfolio/02.jpg",
      githubUrl: "https://github.com/al-waheed/ArenaDrip",
      liveUrl: "https://arenadrip.netlify.app/",
      tags: ["React", "Context API", "Stripe"],
    },
    {
      id: 4,
      title: "Network Banner (NPM Package)",
      description:
        "A lightweight React component and hook to monitor network connectivity and display a customizable banner when your app goes offline, has poor connection, or comes back online.",
      image: "/portfolio/8.png",
      githubUrl: "https://github.com/al-waheed/react-network-banner",
      liveUrl: "https://www.npmjs.com/package/react-network-banner",
      tags: ["React", "Typescript", "TailwindCss"],
    },
    {
      id: 5,
      title: "Blog Hyper",
      description:
        "Blog Hyper share Your Story with the World by creating, editing, and sharing beautiful blog posts, adding comments, expressing your thoughts, and connecting with readers around the globe.",
      image: "/portfolio/01.png",
      githubUrl: "https://github.com/al-waheed/blog",
      liveUrl: "https://bloghyper.netlify.app/",
      tags: ["React", "TailwindCss", "Vite", "Redux Toolkit", "Formik"],
    },
    {
      id: 6,
      title: "Weather Info",
      description:
        "Weather Info is a simple app that helps you stay updated with real-time weather conditions anywhere in the world.",
      image: "/portfolio/03.jpg",
      githubUrl: "https://github.com/al-waheed/weatherforecast",
      liveUrl: "https://weathersinfo.netlify.app/",
      tags: ["React", "API"],
    },
    {
      id: 7,
      title: "Spender (Website)",
      description:
        "Spender is a demo website that showcases a simple platform for managing spending with card plans, low fees, quick signup, and rewards.",
      image: "/portfolio/07.png",
      githubUrl: "https://github.com/al-waheed/spender",
      liveUrl: "https://spender.netlify.app/",
      tags: ["React", "TailwindCss"],
    },
  ];

  return (
    <section className="min-h-screen w-full bg-slate-900 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>
        <p className="text-slate-400 text-center mb-16 text-lg">
          A showcase of my recent work and side projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 text-white rounded-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
