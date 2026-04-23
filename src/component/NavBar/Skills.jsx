import React from 'react';

const Skills = () => {
  
  const creativeSuites = [
    { name: "Adobe Creative Cloud", level: "95%", tools: "Ps, Ai, Id, Ae, Pr" },
    { name: "Figma / UI Design", level: "90%", tools: "Prototyping, Design Systems" },
    { name: "3D & Motion", level: "85%", tools: "Cinema 4D, Spline, Blender" },
    { name: "Digital Publishing", level: "92%", tools: "Editorial Layouts, Typography" }
  ];

  const designDomains = [
    {
      title: "Art Direction",
      desc: "Overseeing the visual style and imagery in magazines, newspapers, and product packaging.",
      details: ["Conceptual Strategy", "Visual Storytelling", "Photography Direction", "Color Theory"]
    },
    {
      title: "Editorial Design",
      desc: "Crafting high-fidelity layouts for digital and print media with a focus on typography.",
      details: ["Grid Systems", "Hierarchy", "Micro-Typography", "Print Production"]
    },
    {
      title: "Visual Identity",
      desc: "Creating cohesive brand ecosystems that maintain integrity across all touchpoints.",
      details: ["Logo Systems", "Brand Guidelines", "Asset Libraries", "Iconography"]
    },
    {
      title: "Motion & Interaction",
      desc: "Bringing static designs to life through kinetic typography and smooth UI transitions.",
      details: ["Keyframe Animation", "Lottie Files", "Interaction Design", "Prototyping"]
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-[#0e0e0e] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* SECTION 1: THE VISION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
          <div className="lg:col-span-8">
            <span className="text-fuchsia-500 tracking-[0.5em] uppercase text-xs font-bold block mb-6">Expertise Matrix</span>
            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.85]">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">VISUAL</span> <br />
              STANDARDS
            </h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <p className="text-zinc-500 text-lg border-l border-fuchsia-500/30 pl-6 leading-relaxed">
              My methodology balances Swiss-style grid discipline with experimental kinetic motion, ensuring every pixel serves a narrative purpose.
            </p>
          </div>
        </div>

        {/* SECTION 2: SOFTWARE MASTERY (Progress Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
          <div className="space-y-12">
            <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-400">Technical Proficiency</h2>
            <div className="space-y-8">
              {creativeSuites.map((suite, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-lg">{suite.name}</span>
                    <span className="text-fuchsia-500 font-mono text-sm">{suite.level}</span>
                  </div>
                  <div className="h-[2px] w-full bg-zinc-800">
                    <div 
                      className="h-full bg-fuchsia-600 transition-all duration-1000" 
                      style={{ width: suite.level }}
                    ></div>
                  </div>
                  <p className="text-xs text-zinc-600 uppercase tracking-widest">{suite.tools}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-zinc-900/30 p-12 rounded-[3rem] border border-white/5 flex flex-col justify-center">
            <h3 className="text-3xl font-black mb-6">"Design is not just what it looks like; it's how it functions within the cultural context."</h3>
            <p className="text-fuchsia-500 uppercase tracking-widest text-sm font-bold">— Editorial Philosophy</p>
          </div>
        </div>

        {/* SECTION 3: DESIGN DOMAINS (Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designDomains.map((domain, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-fuchsia-500/20 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-black uppercase italic group-hover:text-fuchsia-500 transition-colors">
                  {domain.title}
                </h3>
                <span className="text-zinc-800 font-black text-5xl">0{index + 1}</span>
              </div>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                {domain.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                {domain.details.map((detail, dIndex) => (
                  <span 
                    key={dIndex} 
                    className="px-4 py-2 rounded-full bg-black border border-white/10 text-xs uppercase tracking-widest font-bold text-zinc-500 group-hover:border-fuchsia-500/40 group-hover:text-zinc-200 transition-all"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION 4: WEB SKILLS (Developer Side) */}
        <div className="mt-40 pt-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="max-w-md">
              <h2 className="text-4xl font-black mb-6">THE DEVELOPER <br /><span className="text-fuchsia-500">EDGE</span></h2>
              <p className="text-zinc-500">
                Unlike traditional designers, I bridge the gap between Figma and the browser. My expertise in **React** and **Tailwind CSS** allows me to implement pixel-perfect layouts without loss of fidelity.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['React.js', 'Vite', 'Python', 'Django', 'PostgreSQL', 'Framer Motion', 'Tailwind', 'Git', 'Vercel'].map((tech) => (
                <div key={tech} className="p-4 bg-zinc-900 rounded-xl border border-white/5 text-center text-sm font-mono hover:text-fuchsia-400 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Skills;