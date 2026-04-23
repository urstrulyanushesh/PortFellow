const Contact = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <span className="font-headline text-primary tracking-[0.4em] uppercase text-xs mb-4 block">Get In Touch</span>
                <h1 className="font-headline text-6xl md:text-7xl font-black leading-none mb-8 tracking-tighter">
                  LET'S <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">COLLABORATE</span>
                </h1>
                <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
                  Have a project in mind? Let's discuss how we can bring your vision to life with cutting-edge design and development.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Email</h4>
                    <a href="mailto:hello@aether.design" className="text-on-surface-variant hover:text-primary transition-colors">hello@aether.design</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">phone</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-on-surface-variant hover:text-secondary transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-tertiary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold mb-1">Location</h4>
                    <p className="text-on-surface-variant">New York, USA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl rounded-full opacity-30"></div>
              <form className="relative glass-panel p-12 rounded-2xl border border-white/5 space-y-8">
                <div>
                  <label className="block text-sm font-headline font-bold mb-3 text-on-surface">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-3 bg-surface-container rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-on-surface placeholder-on-surface-variant"
                  />
                </div>

                <div>
                  <label className="block text-sm font-headline font-bold mb-3 text-on-surface">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-3 bg-surface-container rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-on-surface placeholder-on-surface-variant"
                  />
                </div>

                <div>
                  <label className="block text-sm font-headline font-bold mb-3 text-on-surface">Project Type</label>
                  <select className="w-full px-6 py-3 bg-surface-container rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-on-surface">
                    <option>Select a project type</option>
                    <option>Web Design</option>
                    <option>Mobile App</option>
                    <option>Branding</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-headline font-bold mb-3 text-on-surface">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project..."
                    className="w-full px-6 py-3 bg-surface-container rounded-lg border border-white/10 focus:border-primary/50 focus:outline-none transition-all text-on-surface placeholder-on-surface-variant resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-headline font-bold hover:shadow-[0_0_30px_rgba(243,130,255,0.4)] transition-all active:scale-95">
                  Send Message
                </button>
              </form>
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

export default Contact;
