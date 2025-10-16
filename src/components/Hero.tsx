interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient leading-tight">
              Morenikeji Abdulwaheed Ajisegiri
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 font-semibold">
              Frontend Engineer & Creative Problem Solver
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              Crafting beautiful, scalable, and responsive user interfaces with
              a focus on performance and usability.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                Explore My Work
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="portfolio/profile_pic.PNG"
                alt="profile_pic"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
