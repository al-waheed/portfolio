export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-slate-900 py-32 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate developer who loves creating innovative solutions to complex problems.
              With a keen eye for design and a strong foundation in modern web technologies, I build
              experiences that are both beautiful and functional.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech began with curiosity and has evolved into a career dedicated to
              continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-slate-300 text-lg">
                  Building the future, one line of code at a time
                </p>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
