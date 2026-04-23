const Home = () => {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 rounded-b-none bg-[#0e0e0e]/70 backdrop-blur-xl border-b border-fuchsia-500/10 shadow-[0_8px_32px_0_rgba(243,130,255,0.05)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-full">
          <div className="text-2xl font-black tracking-widest text-fuchsia-500 uppercase font-headline">
            AETHER
          </div>
          <div className="hidden md:flex items-center space-x-8 font-headline tracking-tighter">
            <a className="text-fuchsia-400 font-bold border-b-2 border-fuchsia-500 pb-1" href="#">
              Projects
            </a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors" href="#">
              Experience
            </a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors" href="#">
              Tech
            </a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors" href="#">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-fuchsia-400 hover:bg-fuchsia-500/10 p-2 rounded-full transition-all">
              terminal
            </button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(243,130,255,0.4)]">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 max-w-7xl mx-auto">
          <div className="absolute -top-20 -left-20 w-96 h-96 glow-back-primary opacity-50"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 space-y-8 z-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-secondary-container/30 border border-secondary/20 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-secondary text-sm font-medium tracking-widest uppercase">
                  Available for freelance
                </span>
              </div>
              <h1 className="text-7xl lg:text-[7rem] font-black font-headline leading-[0.9] tracking-tighter">
                ELENA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  EDITORIAL
                </span>
                <br />
                DESIGNER
              </h1>
              <p className="text-on-surface-variant text-xl max-w-lg font-light leading-relaxed">
                &amp; Art Director crafting high-fidelity digital experiences that live at the intersection of kinetic motion and high-tech typography.
              </p>
              <div className="flex gap-6 pt-4">
                <button className="group flex items-center gap-3 bg-white text-background px-8 py-4 rounded-xl font-bold transition-all hover:pr-12">
                  View Folio
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl rounded-full opacity-30"></div>
              <div className="relative w-full aspect-[4/5] chamfered overflow-hidden border border-white/5">
                <img
                  alt="Elena Art Director"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3Tpsg6Of0W1Q--4m3S_q8KdpIqfUPVZWHDRPg3TIYIbrEehjmVK9sKoqJYoHu2fAITWqVMdZAhEOwdXsssdT2HcvbMvOgvwaX7Mlz1_CNTHOACyMiAKFwHDNlGATSBayT9zfN_RfsmZh2lLWoINAs8Dfr-v-yxux9hR7e2-bSLtTTNQnf0j3I4mGuLJR2nA2fxQ630JAz8jFqwFd84359sjf9mXtG-Nh5zQjYK94Be22BuA26rxRzs9eRhi7-lSJargoj0NFPtQUL"
                />
              </div>
              {/* Aesthetic floating elements */}
              <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-lg border border-primary/20 shadow-2xl">
                <div className="text-primary font-headline text-4xl font-black">12+</div>
                <div className="text-zinc-500 text-xs tracking-widest uppercase">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Portfolio Grid */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-20">
              <div className="space-y-2">
                <span className="text-primary font-headline font-bold text-sm tracking-[0.3em] uppercase">
                  Featured Works
                </span>
                <h2 className="text-5xl font-black font-headline">SELECTED PROJECTS</h2>
              </div>
              <div className="text-on-surface-variant text-right hidden md:block">
                <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Curation Vol. 04</p>
                <p className="font-headline font-bold">2023 — 2024</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large Feature */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLYXCh_mXmabcbOEOHP_qwli-G5AcKSOM2fjcFFActhk5CNFcw891wW9sbE_UPgCjhRo4PH2ApVe1pDvjqhmSVgFm50G7zT8jfcRxLUatHp5m5ZLhfRrJvQ0-Kg2Jma1Oypfp0KZH1s5xPcOwtGHwgNOnHHjd1I0F50qNqym1LuWdy0pZTbniBc4IGfI2FtgYlqRmgS9-3XDHybHFhdpdZQ9bV2lBFLKykE50HUr-lOzl1_I3gd80ZvJQ9O9nM15JTWwONRXv_sVv"
                    alt="NEON VORTEX project"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-10 w-full flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black font-headline">NEON VORTEX</h3>
                    <p className="text-on-surface-variant">Editorial Brand Identity &amp; 3D Motion</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary p-4 rounded-full border border-primary/20 bg-primary/5">
                    north_east
                  </span>
                </div>
              </div>

              {/* Small Sidebar */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <div className="h-full w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyYg_tMRq4iVXL1cytkxCbprG7PmgZ_7DVxiai3g73GXHlI3KNPl54fisdhrzlXIhDcZC9gIRuROd3qITf3xyq47UyuqAO_GvtnfGfyI7qpvxHMCPz_iot0pp_05ZN5cTSAdZfB6gTpL1RiEN5fF-8G32LGMpehmqLx_K7eihCwtRShhE7rUK29iOErQu-wnpgM2O1osR0_sY0Cn8URwd3NIEEZdbGWRUeEu6uc45numHuI4KwaOxIKR_DbqEn2SbmWrAqszOr8SD"
                    alt="KINETIC TYPE project"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-bold font-headline">KINETIC TYPE</h3>
                  <p className="text-sm text-on-surface-variant">Interactive Web Design</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDRjni0vJoEMtLxkauQJOdFauZEZnFJvaBjFJSa95lWLU7kobhN59xBSXluzyL6EKVjLGfhRpuLaMUA9YeYY36NHGWUynn_4CTraPaUhaqKRzCkxrv-PilRt5SnD1XiQG4PLDzF1zlQs_fiD4x4qciRIi0CmXXSr3qDTe5Tb3M2hCJGnpSQlJZIVCEvZEhpJbo4W5j31gXDeeBb3zN2cJIJM-66iqaHxa-Ch1W1cElpxvdJy91W7EolEmxPHdohuDAbXtzIurDHnq"
                    alt="LUMINAL SYSTEM project"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-xl font-bold font-headline">LUMINAL SYSTEM</h3>
                  <p className="text-sm text-on-surface-variant">UX Framework</p>
                </div>
              </div>

              <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5">
                <div className="aspect-[21/9] w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVoppIgNClQzatpApeh0mUwrAZXfnYLi_FsG3fbKU2hVai-yuvWgElJbu6CJjdvKvrQoneHhkXffvVqkK4sPiIXtM80fX1jnrYinS_R6fThm-N_I8FpXZFMXPuprQILcxAMm1s8bOdshjuTV9P_NENQ_ZtBQ2KyYFbTEp4diUGDaddwkxbPxywzAjKSGA0GUasGkdKk9rIU6szU5XHLwQPMVodzTGl3ana989C4mp90-v92NGbmpoE1bwGSuU6n_51cUQa9Npp3t7a"
                    alt="AETHER SPACES project"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-center">
                  <h3 className="text-xl font-bold font-headline">AETHER SPACES</h3>
                  <p className="text-sm text-on-surface-variant">Art Direction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech & Process */}
        <section className="py-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-20 bg-secondary/10 blur-[100px] rounded-full"></div>
              <div className="relative space-y-12">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black font-headline leading-tight">
                    MASTERING THE <br />
                    <span className="text-primary">DIGITAL MEDIUM</span>
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                    My approach combines rigorous grid systems with unpredictable kinetic motion to create interfaces that feel alive.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-surface-container-high border-b-2 border-primary/50">
                    <span
                      className="material-symbols-outlined text-primary mb-4"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      diamond
                    </span>
                    <h4 className="font-bold text-lg mb-1">Art Direction</h4>
                    <p className="text-xs text-on-surface-variant">Visual storytelling &amp; brand strategy.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container-high border-b-2 border-secondary/50">
                    <span
                      className="material-symbols-outlined text-secondary mb-4"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      token
                    </span>
                    <h4 className="font-bold text-lg mb-1">UI Engineering</h4>
                    <p className="text-xs text-on-surface-variant">High-fidelity prototyping &amp; logic.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                {/* Tech Tags */}
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-secondary font-medium border border-secondary/10">
                  Figma
                </div>
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-primary font-medium border border-primary/10">
                  After Effects
                </div>
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-white font-medium border border-white/10">
                  Cinema 4D
                </div>
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-secondary font-medium border border-secondary/10">
                  Webflow
                </div>
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-primary font-medium border border-primary/10">
                  Tailwind CSS
                </div>
                <div className="px-6 py-3 bg-surface-container-highest rounded-full text-white font-medium border border-white/10">
                  React
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="mt-12 space-y-8">
                <div className="group flex justify-between items-center py-6 border-b border-white/5 transition-all hover:pl-4">
                  <div>
                    <h4 className="text-xl font-bold font-headline">Senior Art Director</h4>
                    <p className="text-on-surface-variant text-sm">Vogue Global Media</p>
                  </div>
                  <span className="text-primary font-mono text-sm">2021 — PRESENT</span>
                </div>
                <div className="group flex justify-between items-center py-6 border-b border-white/5 transition-all hover:pl-4">
                  <div>
                    <h4 className="text-xl font-bold font-headline">Visual Designer</h4>
                    <p className="text-on-surface-variant text-sm">TechNova Labs</p>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm">2018 — 2021</span>
                </div>
                <div className="group flex justify-between items-center py-6 border-b border-white/5 transition-all hover:pl-4">
                  <div>
                    <h4 className="text-xl font-bold font-headline">Lead Motion Artist</h4>
                    <p className="text-on-surface-variant text-sm">Studio Flux</p>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm">2015 — 2018</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-16 border border-primary/10 relative overflow-hidden text-center">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
            <h2 className="text-6xl font-black font-headline mb-8 relative z-10">
              START A <span className="italic text-primary">PROJECT?</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto relative z-10">
              Always looking for bold clients who aren't afraid to push the boundaries of digital aesthetics.
            </p>
            <a
              className="inline-block bg-primary text-on-primary px-12 py-5 rounded-full text-xl font-bold hover:shadow-[0_0_40px_rgba(243,130,255,0.6)] transition-all relative z-10"
              href="mailto:hello@aether.design"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#131313] w-full py-12 px-8">
        <div className="bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent h-[1px] mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0 font-['Inter'] text-sm tracking-wide">
          <div className="text-lg font-bold text-fuchsia-500">Kinetic Luminary</div>
          <div className="text-zinc-500">© 2024 Kinetic Luminary. All rights reserved.</div>
          <div className="flex space-x-8">
            <a className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1" href="#">
              Github
            </a>
            <a className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1" href="#">
              LinkedIn
            </a>
            <a className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1" href="#">
              Dribbble
            </a>
            <a className="text-zinc-500 hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1" href="#">
              Source
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
