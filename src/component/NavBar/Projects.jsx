const Projects = () => {
  
  return (
    <>
    
      
      <main className="pt-24 pb-12 overflow-hidden">
        <section className="relative px-8 md:px-24 mb-32">
          <div className="space-y-12">
            <div>
              <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Featured Collection</span>
               <h1 className="text-7xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter uppercase">
               
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-400">
                Projects
              </span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
                A curated selection of digital experiences, visual systems, and interactive designs that push the boundaries of web aesthetics and user engagement.
              </p>
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
                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyYg_tMRq4iVXL1cytkxCbprG7PmgZ_7DVxiai3g73GXHlI3KNPl54fisdhrzlXIhDcZC9gIRuROd3qITf3xyq47UyuqAO_GvtnfGfyI7qpvxHMCPz_iot0pp_05ZN5cTSAdZfB6gTpL1RiEN5fF-8G32LGMpehmqLx_K7eihCwtRShhE7rUK29iOErQu-wnpgM2O1osR0_sY0Cn8URwd3NIEEZdbGWRUeEu6uc45numHuI4KwaOxIKR_DbqEn2SbmWrAqszOr8SD"
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
      </main>

    </>
  );
};

export default Projects;

