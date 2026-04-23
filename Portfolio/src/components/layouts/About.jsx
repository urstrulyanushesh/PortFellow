const About = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs mb-4 block">The Kinetic Luminary</span>
              <h1 className="font-headline text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
                TRANSCENDING <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DIGITAL VOIDS</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Aether is a multidisciplinary studio focused on high-fidelity visual engineering and atmospheric digital experiences. We don't build sites; we craft digital portals.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-bold text-primary">12+</span>
                  <span className="text-xs uppercase tracking-widest text-outline-variant">Years Exp</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-bold text-secondary">250+</span>
                  <span className="text-xs uppercase tracking-widest text-outline-variant">Projects Done</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] glow-behind"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/5 rotate-2 shadow-2xl">
                <img alt="Abstract high-tech portrait" className="w-full h-[600px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" data-alt="Futuristic portrait of a designer with neon light reflections on a dark background, high contrast cinematic photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdedDAER8HdsQlRVfCRUD8iRu1J5eWNLi3hQq2N11pkoBOBd8Gup8L5NHZ7QCgHRahP5LpgbyMlYKqu5UeLFl7O_8nwTNV3fZY1Q_e2a29DCmdCMSGL9AZrtD33zKisXHkegKYSG11zpYtL-t1nMI3FxaFmyy65esbDZtndNc-NXnBErVgdOvDpJd0IcF5hiTQKCrrrYYkarG1yxSSYwvrto6WiaxyW-x6DSVZ6Hwnt2LG5V3NDpukEK6Qxnr43MZs5-_FAioiQMkh"/>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">CRAFTING <span className="text-secondary">SYSTEMS</span></h2>
              <p className="text-on-surface-variant max-w-sm text-sm">Our methodology relies on intentional asymmetry and tonal depth, moving away from boxed-in layouts.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2 bg-surface-container-high p-10 rounded-lg border border-white/5 hover:border-primary/30 transition-all group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-primary text-4xl" data-icon="architecture">architecture</span>
                  <span className="text-outline-variant font-headline">01</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">Visual Engineering</h3>
                <p className="text-on-surface-variant leading-relaxed">Developing robust design systems that scale across platforms while maintaining an atmospheric soul.</p>
              </div>
              <div className="md:col-span-1 bg-surface-container-high p-10 rounded-lg border border-white/5 hover:border-secondary/30 transition-all group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-secondary text-4xl" data-icon="deployed_code">deployed_code</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-secondary transition-colors">Tech Stack</h3>
                <p className="text-on-surface-variant text-sm">Next.js, Tailwind, GLSL, and GSAP form our core development toolkit.</p>
              </div>
              <div className="md:col-span-1 bg-gradient-to-br from-primary-container/20 to-secondary-container/20 p-10 rounded-lg border border-white/5 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-xl font-headline font-bold mb-2">Join the Collective</h3>
                <p className="text-sm text-on-surface-variant mb-6">Inquire about upcoming collaboration slots for Q4 2024.</p>
                <button className="bg-white/10 backdrop-blur-md border border-white/10 py-3 rounded-full hover:bg-white/20 transition-all font-headline font-bold uppercase text-xs tracking-widest">Connect</button>
              </div>
              <div className="md:col-span-1 bg-surface-container-high p-10 rounded-lg border border-white/5 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
                </div>
                <h4 className="font-headline font-bold">Innovation</h4>
              </div>
              <div className="md:col-span-3 overflow-hidden rounded-lg relative min-h-[300px] border border-white/5">
                <img alt="Data visualization background" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" data-alt="Digital representation of complex global data networks glowing in neon violet and blue on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjOwLA1U4Bso-EPZqbLj-dPRFutdr8kWiURVSQukYwJenFJUoCYp_pR-8nmWWDJtLYBAnWau-pfrLcuFwdYPvNfsNaEFoEGQJhg8mvVF3wfD4-mlyzTm1srbXcr1lBxjUwbTRbD1MZX30UtF9khcyJw9fWOvRzqJcXk-f-NCYv2BhDaq65pKfjBWW-k7oMlXpshZUcnUWdpFX-MR34mMO4n1eoIsc_oGIt-MQVEU9qyGFd4N0l-8aqhmfBRYcixZYwaDbHJ_hiFQv"/>
                <div className="absolute inset-0 bg-background/60 backdrop-blur-sm p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-headline font-black mb-4">ATMOSPHERIC INTERFACES</h3>
                  <p className="max-w-md text-on-surface-variant">We prioritize luminance over lines. Our interfaces feel like physical layers floating in a high-fidelity void.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden p-1 border border-white/10 transform -rotate-3">
                <img alt="Server hardware" className="w-full h-full object-cover grayscale opacity-80" data-alt="Close up shot of futuristic server hardware with glowing blue and pink led indicators in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT9IpgUT0ZD_cmxRFohzh5RCB4_iUuL2sAXFk9hxW4f_ArCSR1-sc_AWZitgIqAa07AFJzvIq5DpC45GoNUzoiEBnnQChLq4MU3uv30DA4-ezHHTkmif74EdQJI8ccEcphrY4ma7OzYf_HBLF-ApUpMKTImMo46Bcl5YcWAf1RfXJkfIZwpN4mamCfPn4aM5LP14kTNEJO892j-JiLVzsflru_heY6fe1dCq7gx6Nb1cK1bvWLYgPMyLA5w-4YPdQ6o-0kV3ZmogO"/>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 p-6 glass-panel border border-white/10 rounded-lg transform rotate-3 shadow-2xl">
                <p className="text-xs uppercase tracking-tighter font-headline text-primary mb-2">Process</p>
                <p className="text-sm italic text-on-surface-variant leading-relaxed">"The transition should feel like a change in physical material, not a drawn line."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-5xl font-black mb-8 leading-[0.9] tracking-tighter">THE MISSION IS <br/> <span className="text-primary">CLARITY.</span></h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#f382ff]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2">Kinetic Motion</h4>
                    <p className="text-on-surface-variant text-sm">We use movement to guide intent, ensuring the user is never lost in the dark.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#af88ff]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2">Luminous Hierarchy</h4>
                    <p className="text-on-surface-variant text-sm">Importance is defined by light. Higher priority items glow with purpose.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shadow-[0_0_10px_#ff51fa]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2">Geometric Precision</h4>
                    <p className="text-on-surface-variant text-sm">Mathematical layouts ensure consistency across the most chaotic of creative visions.</p>
                  </div>
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
            <a className="hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">Github</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">LinkedIn</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">Dribbble</a>
            <a className="hover:text-fuchsia-400 transition-colors duration-200 hover:translate-x-1 transition-transform" href="#">Source</a>
          </div>
          <p className="text-zinc-500">© 2024 Kinetic Luminary. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
