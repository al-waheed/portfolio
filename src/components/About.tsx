export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-slate-900 py-32 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I build fast, responsive, and user-centered web interfaces that
              blend functionality with visual clarity. Using my tehnical skills,
              I focus on creating products that feel seamless, efficient, and
              enjoyable to use.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              With a background in Land Surveying, I bring precision and
              structure into software solving problems with clarity and
              intention. I take pride in transforming complex ideas into clean,
              intuitive designs that perform well on every device.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Over the years, I’ve contributed to fintech and SaaS projects,
              improving dashboards, onboarding systems, and transaction
              workflows. I also built and published react-network-banner, an
              open-source NPM package for monitoring real time network status.
            </p>
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
