const Contact = () => {
  return (
    <main className="min-h-screen bg-grok-dark text-grok-text py-32 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black font-space mb-6">
            LET'S <span className="text-grok-accent">TALK</span>
          </h1>
          <p className="text-xl text-grok-light max-w-2xl mx-auto font-inter leading-relaxed">
            Have questions about AI, need help with a project, or just want to chat? I'm here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-grok-gray p-8 rounded-2xl border border-grok-light">
              <h3 className="text-2xl font-bold font-space mb-6 text-grok-accent">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-grok-light font-inter mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-grok-dark border border-grok-light rounded-xl text-grok-text font-inter focus:border-grok-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-grok-light font-inter mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-grok-dark border border-grok-light rounded-xl text-grok-text font-inter focus:border-grok-accent focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-grok-light font-inter mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-grok-dark border border-grok-light rounded-xl text-grok-text font-inter focus:border-grok-accent focus:outline-none transition-colors resize-none"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-grok-accent text-grok-dark py-4 rounded-xl font-bold font-inter hover:bg-grok-accent/80 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-grok-gray p-8 rounded-2xl border border-grok-light">
              <h3 className="text-2xl font-bold font-space mb-6 text-grok-accent">Connect With Me</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grok-accent rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-grok-dark">mail</span>
                  </div>
                  <div>
                    <div className="font-bold font-inter">Email</div>
                    <div className="text-grok-light font-inter">hello@grok.ai</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grok-accent rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-grok-dark">smart_toy</span>
                  </div>
                  <div>
                    <div className="font-bold font-inter">AI Assistant</div>
                    <div className="text-grok-light font-inter">Built by xAI</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-grok-accent rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-grok-dark">rocket_launch</span>
                  </div>
                  <div>
                    <div className="font-bold font-inter">Response Time</div>
                    <div className="text-grok-light font-inter">Usually instant</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-grok-gray p-8 rounded-2xl border border-grok-light">
              <h3 className="text-2xl font-bold font-space mb-6 text-grok-accent">What I Can Help With</h3>
              <ul className="space-y-3 text-grok-light font-inter">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-grok-accent rounded-full"></span>
                  Answering complex questions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-grok-accent rounded-full"></span>
                  Coding and programming assistance
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-grok-accent rounded-full"></span>
                  Creative problem solving
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-grok-accent rounded-full"></span>
                  Research and analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-grok-accent rounded-full"></span>
                  Witty conversation
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-grok-light font-inter mb-8">
            Ready to explore the possibilities of AI? Let's start a conversation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-grok-secondary text-grok-dark px-8 py-4 rounded-xl font-bold font-inter hover:bg-grok-secondary/80 transition-colors duration-300">
              Ask a Question
            </button>
            <button className="border border-grok-accent text-grok-accent px-8 py-4 rounded-xl font-bold font-inter hover:bg-grok-accent hover:text-grok-dark transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
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
