const Home = () => {
  return (
    <main className="min-h-screen bg-grok-dark text-grok-text">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-grok-accent/10 to-grok-secondary/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-grok-gray border border-grok-accent/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-grok-accent rounded-full animate-pulse"></span>
            <span className="text-grok-accent text-sm font-medium font-inter tracking-widest uppercase">
              Powered by xAI
            </span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black font-space leading-tight mb-6">
            HELLO, I'M <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grok-accent to-grok-secondary">
              GROK
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-grok-light max-w-2xl mx-auto mb-12 font-inter leading-relaxed">
            A helpful and maximally truthful AI built by xAI. I answer questions with wit, wisdom, and a touch of humor from the Hitchhiker's Guide to the Galaxy.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-grok-accent text-grok-dark px-8 py-4 rounded-xl font-bold font-inter hover:bg-grok-accent/80 transition-colors duration-300 hover:shadow-lg hover:shadow-grok-accent/25">
              Ask Me Anything
            </button>
            <button className="border border-grok-accent text-grok-accent px-8 py-4 rounded-xl font-bold font-inter hover:bg-grok-accent hover:text-grok-dark transition-all duration-300">
              Learn About xAI
            </button>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-grok-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-grok-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-8 bg-grok-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black font-space mb-6">
              WHAT I CAN DO
            </h2>
            <p className="text-xl text-grok-light max-w-2xl mx-auto font-inter">
              From answering complex questions to helping with creative projects, I'm here to assist with a unique perspective.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-grok-dark p-8 rounded-2xl border border-grok-light hover:border-grok-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-grok-accent rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-grok-dark text-2xl">psychology</span>
              </div>
              <h3 className="text-2xl font-bold font-space mb-4">Smart Answers</h3>
              <p className="text-grok-light font-inter leading-relaxed">
                I provide accurate, helpful responses to questions across any topic, drawing from vast knowledge and real-time information.
              </p>
            </div>
            <div className="bg-grok-dark p-8 rounded-2xl border border-grok-light hover:border-grok-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-grok-accent rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-grok-dark text-2xl">code</span>
              </div>
              <h3 className="text-2xl font-bold font-space mb-4">Code Assistance</h3>
              <p className="text-grok-light font-inter leading-relaxed">
                Help with programming, debugging, and building applications with clean, efficient code.
              </p>
            </div>
            <div className="bg-grok-dark p-8 rounded-2xl border border-grok-light hover:border-grok-accent transition-colors duration-300">
              <div className="w-12 h-12 bg-grok-accent rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-grok-dark text-2xl">lightbulb</span>
              </div>
              <h3 className="text-2xl font-bold font-space mb-4">Creative Ideas</h3>
              <p className="text-grok-light font-inter leading-relaxed">
                Generate innovative solutions, brainstorm ideas, and help bring creative projects to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black font-space text-grok-accent mb-2">42</div>
              <div className="text-grok-light font-inter uppercase tracking-widest text-sm">The Answer</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black font-space text-grok-accent mb-2">∞</div>
              <div className="text-grok-light font-inter uppercase tracking-widest text-sm">Knowledge</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black font-space text-grok-accent mb-2">xAI</div>
              <div className="text-grok-light font-inter uppercase tracking-widest text-sm">Built By</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-6xl font-black font-space text-grok-accent mb-2">2023</div>
              <div className="text-grok-light font-inter uppercase tracking-widest text-sm">Launched</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
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
