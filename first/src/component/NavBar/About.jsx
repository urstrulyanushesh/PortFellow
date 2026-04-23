import React from "react";

const About = () => {
  return (
    <>
      {/* Changed bg-[#121212] to your core bg-[#0e0e0e] */}
      <main className="pt-24 pb-12 overflow-hidden bg-[#0e0e0e] text-white">
        <section className="relative px-8 md:px-24 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 z-10">
              {/* Changed text-primary to #C800DE */}
              <span className="font-headline text-[#C800DE] tracking-[0.4em] uppercase text-xs mb-4 block">The Kinetic Luminary</span>
              <h1 className="font-headline text-6xl md:text-8xl font-black leading-none mb-8 tracking-tighter">
                TRANSCENDING <br/>
                {/* Changed gradient to match your Login/Blog style */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C800DE] to-fuchsia-400">DIGITAL VOIDS</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Aether is a multidisciplinary studio focused on high-fidelity visual engineering and atmospheric digital experiences. We don't build sites; we craft digital portals.
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-bold text-[#C800DE]">12+</span>
                  <span className="text-xs uppercase tracking-widest text-zinc-600">Years Exp</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-headline font-bold text-white">250+</span>
                  <span className="text-xs uppercase tracking-widest text-zinc-600">Projects Done</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              {/* Glow matches your brand color */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#C800DE]/20 rounded-full blur-[100px] glow-behind"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-white/5 rotate-2 shadow-2xl">
                <img alt="Abstract high-tech portrait" className="w-full h-[600px] object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdedDAER8HdsQlRVfCRUD8iRu1J5eWNLi3hQq2N11pkoBOBd8Gup8L5NHZ7QCgHRahP5LpgbyMlYKqu5UeLFl7O_8nwTNV3fZY1Q_e2a29DCmdCMSGL9AZrtD33zKisXHkegKYSG11zpYtL-t1nMI3FxaFmyy65esbDZtndNc-NXnBErVgdOvDpJd0IcF5hiTQKCrrrYYkarG1yxSSYwvrto6WiaxyW-x6DSVZ6Hwnt2LG5V3NDpukEK6Qxnr43MZs5-_FAioiQMkh"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Changed bg to zinc-900/50 for the Bento feel */}
        <section className="bg-zinc-900/30 py-32 px-8 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight uppercase">CRAFTING <span className="text-[#C800DE]">SYSTEMS</span></h2>
              <p className="text-zinc-500 max-w-sm text-sm uppercase tracking-wider">Our methodology relies on intentional asymmetry and tonal depth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Card Style: bg-zinc-900, rounded-3xl, border-white/5 */}
              <div className="md:col-span-2 bg-zinc-900 p-10 rounded-[2rem] border border-white/5 hover:border-[#C800DE]/30 transition-all group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-[#C800DE] text-4xl">architecture</span>
                  <span className="text-zinc-800 font-black text-4xl italic">01</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-[#C800DE] transition-colors uppercase">Visual Engineering</h3>
                <p className="text-zinc-400 leading-relaxed">Developing robust design systems that scale across platforms while maintaining an atmospheric soul.</p>
              </div>

              <div className="md:col-span-1 bg-zinc-900 p-10 rounded-[2rem] border border-white/5 hover:border-[#C800DE]/30 transition-all group">
                <div className="flex justify-between items-start mb-12">
                  <span className="material-symbols-outlined text-[#C800DE] text-4xl">deployed_code</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-[#C800DE] transition-colors uppercase">Tech Stack</h3>
                <p className="text-zinc-500 text-sm">Next.js, Tailwind, GLSL, and GSAP form our core development toolkit.</p>
              </div>

              <div className="md:col-span-1 bg-gradient-to-br from-[#C800DE]/20 to-purple-900/20 p-10 rounded-[2rem] border border-white/5 flex flex-col justify-end min-h-[300px]">
                <h3 className="text-xl font-headline font-bold mb-2 uppercase italic">Join the Collective</h3>
                <p className="text-sm text-zinc-400 mb-6 font-mono">INQUIRE_Q4_2026</p>
                <button className="bg-[#C800DE] py-3 rounded-2xl hover:bg-fuchsia-500 transition-all font-headline font-bold uppercase text-xs tracking-[0.2em]">Connect</button>
              </div>

              <div className="md:col-span-1 bg-zinc-900 p-10 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center text-center group">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_#C800DE] transition-all">
                  <span className="material-symbols-outlined text-[#C800DE]">auto_awesome</span>
                </div>
                <h4 className="font-headline font-bold uppercase tracking-widest text-xs">Innovation</h4>
              </div>

              <div className="md:col-span-3 overflow-hidden rounded-[2rem] relative min-h-[300px] border border-white/5">
                <img alt="Data visualization background" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmjOwLA1U4Bso-EPZqbLj-dPRFutdr8kWiURVSQukYwJenFJUoCYp_pR-8nmWWDJtLYBAnWau-pfrLcuFwdYPvNfsNaEFoEGQJhg8mvVF3wfD4-mlyzTm1srbXcr1lBxjUwbTRbD1MZX30UtF9khcyJw9fWOvRzqJcXk-f-NCYv2BhDaq65pKfjBWW-k7oMlXpshZUcnUWdpFX-MR34mMO4n1eoIsc_oGIt-MQVEU9qyGFd4N0l-8aqhmfBRYcixZYwaDbHJ_hiFQv"/>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-headline font-black mb-4 uppercase tracking-tighter text-[#C800DE]">Atmospheric Interfaces</h3>
                  <p className="max-w-md text-zinc-300">We prioritize luminance over lines. Our interfaces feel like physical layers floating in a high-fidelity void.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-zinc-900 rounded-[2rem] overflow-hidden p-1 border border-white/10 transform -rotate-3">
                <img alt="Server hardware" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" src="https://i.pinimg.com/1200x/f8/4c/15/f84c15f0c7b514f30385842def32ecf5.jpg"/>
              </div>
              <div className="absolute -bottom-10 -right-10 w-72 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl transform rotate-3 shadow-2xl">
                <p className="text-xs uppercase tracking-tighter font-headline text-[#C800DE] mb-2 font-bold">Process_Log</p>
                <p className="text-sm italic text-zinc-400 leading-relaxed font-mono">"Transition must feel like physical material, not a drawn line."</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-headline text-5xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">THE MISSION IS <br/> <span className="text-[#C800DE]">CLARITY.</span></h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#C800DE] shadow-[0_0_10px_#C800DE]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2 uppercase tracking-wide">Kinetic Motion</h4>
                    <p className="text-zinc-500 text-sm">We use movement to guide intent, ensuring the user is never lost in the dark.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2 uppercase tracking-wide text-white">Luminous Hierarchy</h4>
                    <p className="text-zinc-500 text-sm">Importance is defined by light. Higher priority items glow with purpose.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#C800DE] shadow-[0_0_10px_#C800DE]"></div>
                  <div>
                    <h4 className="font-headline font-bold mb-2 uppercase tracking-wide">Geometric Precision</h4>
                    <p className="text-zinc-500 text-sm">Mathematical layouts ensure consistency across creative visions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;