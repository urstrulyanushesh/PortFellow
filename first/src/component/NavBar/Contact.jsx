import React from "react";

const Contact = () => {
  return (
    <>
      {/* Background matches your core [#0e0e0e] theme */}
      <main className="pt-24 pb-12 overflow-hidden bg-[#0e0e0e] text-white">
        <section className="relative px-8 md:px-24 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            {/* Left Content Column */}
            <div className="space-y-12">
              <div>
                <span className="font-headline text-[#C800DE] tracking-[0.4em] uppercase text-xs mb-4 block font-bold">
                  Get In Touch
                </span>
                <h1 className="font-headline text-6xl md:text-7xl font-black leading-none mb-8 tracking-tighter uppercase">
                  LET'S <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C800DE] to-fuchsia-400">
                    COLLABORATE
                  </span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                  Have a project in mind? Let's discuss how we can bring your vision to life with cutting-edge design and development.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#C800DE]/50 transition-all">
                    <span className="material-symbols-outlined text-[#C800DE]">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1 uppercase text-xs tracking-widest text-zinc-500">Email</h4>
                    <a href="mailto:hello@aether.design" className="text-white hover:text-[#C800DE] transition-colors font-mono">hello@aether.design</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#C800DE]/50 transition-all">
                    <span className="material-symbols-outlined text-[#C800DE]">phone</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1 uppercase text-xs tracking-widest text-zinc-500">Phone</h4>
                    <a href="tel:+1234567890" className="text-white hover:text-[#C800DE] transition-colors font-mono">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:border-[#C800DE]/50 transition-all">
                    <span className="material-symbols-outlined text-[#C800DE]">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1 uppercase text-xs tracking-widest text-zinc-500">Location</h4>
                    <p className="text-white font-mono">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="relative">
              {/* Subtle brand glow behind form */}
              <div className="absolute -inset-4 bg-[#C800DE]/10 blur-3xl rounded-full opacity-30"></div>
              
              <form className="relative bg-zinc-900 p-10 md:p-12 rounded-[2.5rem] border border-white/5 space-y-8 shadow-2xl">
                <div>
                  <label className="block text-xs font-headline font-bold mb-3 uppercase tracking-widest text-zinc-500">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-black rounded-2xl border border-white/10 focus:border-[#C800DE] focus:outline-none transition-all text-white placeholder-zinc-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold mb-3 uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-black rounded-2xl border border-white/10 focus:border-[#C800DE] focus:outline-none transition-all text-white placeholder-zinc-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold mb-3 uppercase tracking-widest text-zinc-500">Project Type</label>
                  <select className="w-full px-6 py-4 bg-black rounded-2xl border border-white/10 focus:border-[#C800DE] focus:outline-none transition-all text-white appearance-none cursor-pointer">
                    <option className="bg-zinc-900">Select a project type</option>
                    <option className="bg-zinc-900">Web Design</option>
                    <option className="bg-zinc-900">Mobile App</option>
                    <option className="bg-zinc-900">Branding</option>
                    <option className="bg-zinc-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-headline font-bold mb-3 uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-4 bg-black rounded-2xl border border-white/10 focus:border-[#C800DE] focus:outline-none transition-all text-white placeholder-zinc-700 resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-[#C800DE] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-fuchsia-500 transition-all active:scale-[0.98] shadow-lg shadow-fuchsia-900/20">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;