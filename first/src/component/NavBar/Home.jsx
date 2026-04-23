import React from 'react';
const Hero = () => {
  return (
    <main className="pt-24 overflow-x-hidden bg-[#0e0e0e] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-8 max-w-7xl mx-auto">
        {/* Glow Background Effect */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fuchsia-600/20 blur-[120px] opacity-50 rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-8 z-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full">
              <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse"></span>
              <span className="text-fuchsia-400 text-sm font-medium tracking-widest uppercase">
                Available for freelance
              </span>
            </div>
            
            <h1 className="text-7xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase">
              ELENA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-400">
                EDITORIAL
              </span>
              <br />
              DESIGNER
            </h1>
            
            <p className="text-zinc-400 text-xl max-w-lg font-light leading-relaxed">
              & Art Director crafting high-fidelity digital experiences that live at the intersection of kinetic motion and high-tech typography.
            </p>
            
            <div className="flex gap-6 pt-4">
              <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold transition-all hover:pr-12">
                View Folio
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 blur-2xl rounded-full opacity-30"></div>
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                alt="Elena Art Director"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Tpsg6Of0W1Q--4m3S_q8KdpIqfUPVZWHDRPg3TIYIbrEehjmVK9sKoqJYoHu2fAITWqVMdZAhEOwdXsssdT2HcvbMvOgvwaX7Mlz1_CNTHOACyMiAKFwHDNlGATSBayT9zfN_RfsmZh2lLWoINAs8Dfr-v-yxux9hR7e2-bSLtTTNQnf0j3I4mGuLJR2nA2fxQ630JAz8jFqwFd84359sjf9mXtG-Nh5zQjYK94Be22BuA26rxRzs9eRhi7-lSJargoj0NFPtQUL"
              />
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl border border-fuchsia-500/20 shadow-2xl">
              <div className="text-fuchsia-500 text-4xl font-black">12+</div>
              <div className="text-zinc-500 text-xs tracking-widest uppercase">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Portfolio Grid */}
      <section className="py-32 px-8 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div className="space-y-2">
              <span className="text-fuchsia-500 font-bold text-sm tracking-[0.3em] uppercase">
                Featured Works
              </span>
              <h2 className="text-5xl font-black uppercase">Selected Projects</h2>
            </div>
            <div className="text-zinc-500 text-right hidden md:block">
              <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Curation Vol. 04</p>
              <p className="font-bold text-white">2023 — 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
                  alt="NEON VORTEX project"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                <div className="space-y-2">
                  <h3 className="text-3xl font-black uppercase">NEON VORTEX</h3>
                  <p className="text-zinc-400">Editorial Brand Identity & 3D Motion</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-fuchsia-500 p-4 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5">
                  north_east
                </span>
              </div>
            </div>

            {/* Small Sidebar */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
              <div className="h-full w-full overflow-hidden min-h-[300px]">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   src="https://i.pinimg.com/1200x/ad/61/2d/ad612d593c5f6548daf186d55280d207.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold uppercase">KINETIC TYPE</h3>
                <p className="text-sm text-zinc-400">Interactive Web Design</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVoppIgNClQzatpApeh0mUwrAZXfnYLi_FsG3fbKU2hVai-yuvWgElJbu6CJjdvKvrQoneHhkXffvVqkK4sPiIXtM80fX1jnrYinS_R6fThm-N_I8FpXZFMXPuprQILcxAMm1s8bOdshjuTV9P_NENQ_ZtBQ2KyYFbTEp4diUGDaddwkxbPxywzAjKSGA0GUasGkdKk9rIU6szU5XHLwQPMVodzTGl3ana989C4mp90-v92NGbmpoE1bwGSuU6n_51cUQa9Npp3t7a"
//                     alt="AETHER SPACES project"
                  alt="LUMINAL SYSTEM project"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-xl font-bold uppercase">LUMINAL SYSTEM</h3>
                <p className="text-sm text-zinc-400">UX Framework</p>
              </div>
            </div>

            <div className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5">
              <div className="aspect-[21/9] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLYXCh_mXmabcbOEOHP_qwli-G5AcKSOM2fjcFFActhk5CNFcw891wW9sbE_UPgCjhRo4PH2ApVe1pDvjqhmSVgFm50G7zT8jfcRxLUatHp5m5ZLhfRrJvQ0-Kg2Jma1Oypfp0KZH1s5xPcOwtGHwgNOnHHjd1I0F50qNqym1LuWdy0pZTbniBc4IGfI2FtgYlqRmgS9-3XDHybHFhdpdZQ9bV2lBFLKykE50HUr-lOzl1_I3gd80ZvJQ9O9nM15JTWwONRXv_sVv"
                  alt="AETHER SPACES project"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-center">
                <h3 className="text-xl font-bold uppercase">AETHER SPACES</h3>
                <p className="text-sm text-zinc-400">Art Direction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech & Process Section */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -inset-20 bg-fuchsia-600/10 blur-[100px] rounded-full"></div>
            <div className="relative space-y-12">
              <div className="space-y-4">
                <h2 className="text-5xl font-black leading-tight uppercase">
                  Mastering the <br />
                  <span className="text-fuchsia-500">Digital Medium</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                  My approach combines rigorous grid systems with unpredictable kinetic motion to create interfaces that feel alive.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-zinc-900 border-b-2 border-fuchsia-500/50">
                  <span className="material-symbols-outlined text-fuchsia-500 mb-4">diamond</span>
                  <h4 className="font-bold text-lg mb-1">Art Direction</h4>
                  <p className="text-xs text-zinc-500">Visual storytelling & brand strategy.</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border-b-2 border-purple-500/50">
                  <span className="material-symbols-outlined text-purple-500 mb-4">token</span>
                  <h4 className="font-bold text-lg mb-1">UI Engineering</h4>
                  <p className="text-xs text-zinc-500">High-fidelity prototyping & logic.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              {['Figma', 'React', 'Tailwind CSS', 'Django', 'After Effects', 'Python'].map((tech) => (
                <div key={tech} className="px-6 py-3 bg-zinc-900 rounded-full text-zinc-300 font-medium border border-white/10 hover:border-fuchsia-500 transition-colors">
                  {tech}
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            <div className="mt-12 space-y-8">
              {[
                { role: "Senior Art Director", comp: "Vogue Global Media", year: "2021 — PRESENT" },
                { role: "Visual Designer", comp: "TechNova Labs", year: "2018 — 2021" },
                { role: "Lead Motion Artist", comp: "Studio Flux", year: "2015 — 2018" }
              ].map((job, i) => (
                <div key={i} className="group flex justify-between items-center py-6 border-b border-white/5 transition-all hover:pl-4">
                  <div>
                    <h4 className="text-xl font-bold">{job.role}</h4>
                    <p className="text-zinc-500 text-sm">{job.comp}</p>
                  </div>
                  <span className="text-fuchsia-500 font-mono text-sm">{job.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto bg-zinc-900/50 backdrop-blur-md rounded-[3rem] p-16 border border-fuchsia-500/10 relative overflow-hidden text-center">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full"></div>
          <h2 className="text-6xl font-black mb-8 relative z-10 uppercase">
            Start a <span className="italic text-fuchsia-500">Project?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
            Always looking for bold clients who aren't afraid to push the boundaries of digital aesthetics.
          </p>
          <a
            className="inline-block bg-fuchsia-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:shadow-[0_0_40px_rgba(217,70,239,0.4)] transition-all relative z-10"
            href="mailto:hello@aether.design"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
};

export default Hero;