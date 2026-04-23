const Projects = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 rounded-b-none bg-[#0e0e0e]/70 backdrop-blur-xl border-b border-fuchsia-500/10 shadow-[0_8px_32px_0_rgba(243,130,255,0.05)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-full">
          <div className="text-2xl font-black tracking-widest text-fuchsia-500 uppercase font-headline">AETHER</div>
          <div className="hidden md:flex items-center space-x-12 font-headline">
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors hover:bg-fuchsia-500/10 transition-all duration-300 px-3 py-1 rounded-md" href="#">Projects</a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors hover:bg-fuchsia-500/10 transition-all duration-300 px-3 py-1 rounded-md" href="#">Experience</a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors hover:bg-fuchsia-500/10 transition-all duration-300 px-3 py-1 rounded-md" href="#">Tech</a>
            <a className="text-zinc-400 font-medium hover:text-fuchsia-300 transition-colors hover:bg-fuchsia-500/10 transition-all duration-300 px-3 py-1 rounded-md" href="#">Contact</a>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-zinc-400 active:scale-95 transition-transform">
              <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
            </button>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 overflow-hidden">
        <section className="relative px-8 md:px-24 mb-32">
          <div className="space-y-12">
            <div>
              <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Featured Collection</span>
              <h1 className="font-headline text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
                PROJECT <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">GALLERY</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
                A curated selection of digital experiences, visual systems, and interactive designs that push the boundaries of web aesthetics and user engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project Card 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5 hover:border-primary/30 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATLYXCh_mXmabcbOEOHP_qwli-G5AcKSOM2fjcFFActhk5CNFcw891wW9sbE_UPgCjhRo4PH2ApVe1pDvjqhmSVgFm50G7zT8jfcRxLUatHp5m5ZLhfRrJvQ0-Kg2Jma1Oypfp0KZH1s5xPcOwtGHwgNOnHHjd1I0F50qNqym1LuWdy0pZTbniBc4IGfI2FtgYlqRmgS9-3XDHybHFhdpdZQ9bV2lBFLKykE50HUr-lOzl1_I3gd80ZvJQ9O9nM15JTWwONRXv_sVv"
                    alt="NEON VORTEX"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black font-headline mb-2">NEON VORTEX</h3>
                  <p className="text-on-surface-variant text-sm">Editorial Brand Identity &amp; 3D Motion</p>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5 hover:border-secondary/30 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJyYg_tMRq4iVXL1cytkxCbprG7PmgZ_7DVxiai3g73GXHlI3KNPl54fisdhrzlXIhDcZC9gIRuROd3qITf3xyq47UyuqAO_GvtnfGfyI7qpvxHMCPz_iot0pp_05ZN5cTSAdZfB6gTpL1RiEN5fF-8G32LGMpehmqLx_K7eihCwtRShhE7rUK29iOErQu-wnpgM2O1osR0_sY0Cn8URwd3NIEEZdbGWRUeEu6uc45numHuI4KwaOxIKR_DbqEn2SbmWrAqszOr8SD"
                    alt="KINETIC TYPE"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black font-headline mb-2">KINETIC TYPE</h3>
                  <p className="text-on-surface-variant text-sm">Interactive Web Design</p>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5 hover:border-primary/30 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDRjni0vJoEMtLxkauQJOdFauZEZnFJvaBjFJSa95lWLU7kobhN59xBSXluzyL6EKVjLGfhRpuLaMUA9YeYY36NHGWUynn_4CTraPaUhaqKRzCkxrv-PilRt5SnD1XiQG4PLDzF1zlQs_fiD4x4qciRIi0CmXXSr3qDTe5Tb3M2hCJGnpSQlJZIVCEvZEhpJbo4W5j31gXDeeBb3zN2cJIJM-66iqaHxa-Ch1W1cElpxvdJy91W7EolEmxPHdohuDAbXtzIurDHnq"
                    alt="LUMINAL SYSTEM"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black font-headline mb-2">LUMINAL SYSTEM</h3>
                  <p className="text-on-surface-variant text-sm">UX Framework</p>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="group relative overflow-hidden rounded-xl bg-surface-container-high border border-white/5 hover:border-secondary/30 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVoppIgNClQzatpApeh0mUwrAZXfnYLi_FsG3fbKU2hVai-yuvWgElJbu6CJjdvKvrQoneHhkXffvVqkK4sPiIXtM80fX1jnrYinS_R6fThm-N_I8FpXZFMXPuprQILcxAMm1s8bOdshjuTV9P_NENQ_ZtBQ2KyYFbTEp4diUGDaddwkxbPxywzAjKSGA0GUasGkdKk9rIU6szU5XHLwQPMVodzTGl3ana989C4mp90-v92NGbmpoE1bwGSuU6n_51cUQa9Npp3t7a"
                    alt="AETHER SPACES"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-black font-headline mb-2">AETHER SPACES</h3>
                  <p className="text-on-surface-variant text-sm">Art Direction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#131313] w-full py-12 px-8">
        <div className="bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent h-[1px] mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0 font-['Inter'] text-sm tracking-wide">
          <div className="text-lg font-bold text-fuchsia-500 font-headline uppercase">AETHER</div>
          <div className="flex space-x-8 text-zinc-500">
            <a className="hover:text-fuchsia-400 transition-colors duration-200" href="#">Github</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200" href="#">LinkedIn</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200" href="#">Dribbble</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200" href="#">Source</a>
          </div>
          <p className="text-zinc-500">© 2024 Kinetic Luminary. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Projects;
