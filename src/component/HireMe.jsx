import React from 'react';

const HireMe = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path or URL
    const resumeUrl = "/path-to-your-resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-12 px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section 1: The Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black tracking-tighter mb-6">
              RESUME & <br />
              <span className="text-fuchsia-500 italic">EXPERTISE</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Full-Stack Developer focused on building high-fidelity web applications. 
              From the logic of **Django** backends to the smooth animations of **React** frontends.
            </p>
            
            {/* Download Button */}
            <button 
              onClick={handleDownload}
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold transition-all hover:bg-fuchsia-600 hover:text-white"
            >
              Download CV
              <span className="material-symbols-outlined group-hover:animate-bounce">
                download
              </span>
            </button>
          </div>

          {/* Section 2: Skills Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest">Frontend</span>
              <h3 className="text-xl font-bold mt-2">React & Vite</h3>
              <p className="text-zinc-500 text-sm mt-1">Tailwind, Framer Motion, Redux</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest">Backend</span>
              <h3 className="text-xl font-bold mt-2">Django</h3>
              <p className="text-zinc-500 text-sm mt-1">REST API, PostgreSQL, Python</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest">Creative</span>
              <h3 className="text-xl font-bold mt-2">UI/UX Design</h3>
              <p className="text-zinc-500 text-sm mt-1">Figma, Motion Graphics</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5">
              <span className="text-fuchsia-500 font-mono text-xs uppercase tracking-widest">AI & Data</span>
              <h3 className="text-xl font-bold mt-2">ML Ops</h3>
              <p className="text-zinc-500 text-sm mt-1">NLP, Image Classification</p>
            </div>
          </div>
        </div>

        {/* Section 3: Experience Timeline */}
        <div className="border-t border-white/5 pt-16">
          <h2 className="text-3xl font-black mb-12">WORK HISTORY</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between gap-4 group">
              <div>
                <h4 className="text-2xl font-bold group-hover:text-fuchsia-400 transition-colors">Full-Stack Developer Intern</h4>
                <p className="text-zinc-500 uppercase tracking-widest text-sm">Aether Designs • 2024 - Present</p>
              </div>
              <p className="text-zinc-400 max-w-md">
                Developing emotion-aware AI chatbots and high-performance React dashboards with fuchsia-themed branding.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 group">
              <div>
                <h4 className="text-2xl font-bold group-hover:text-fuchsia-400 transition-colors">Web Developer</h4>
                <p className="text-zinc-500 uppercase tracking-widest text-sm">Freelance • 2023 - 2024</p>
              </div>
              <p className="text-zinc-400 max-w-md">
                Successfully delivered 10+ custom web solutions for local clients using React and Tailwind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;