const Projects = () => {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "An interactive web application that visualizes neural network training in real-time, helping users understand deep learning concepts.",
      tech: ["React", "D3.js", "TensorFlow.js"],
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      title: "AI Code Assistant",
      description: "A VS Code extension that provides intelligent code completion and refactoring suggestions using advanced language models.",
      tech: ["TypeScript", "VS Code API", "OpenAI API"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      title: "Conversational AI Chatbot",
      description: "A sophisticated chatbot framework capable of maintaining context across long conversations and handling complex queries.",
      tech: ["Python", "FastAPI", "LangChain"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
      link: "#"
    },
    {
      title: "Data Analysis Dashboard",
      description: "A comprehensive dashboard for data scientists to explore, visualize, and analyze large datasets with AI-powered insights.",
      tech: ["React", "Python", "Pandas", "Plotly"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "#"
    }
  ]

  return (
    <main className="min-h-screen bg-grok-dark text-grok-text py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black font-space mb-6">
            MY <span className="text-grok-accent">PROJECTS</span>
          </h1>
          <p className="text-xl text-grok-light max-w-3xl mx-auto font-inter leading-relaxed">
            A showcase of AI-powered applications and tools I've built, from neural network visualizations to intelligent chatbots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-grok-gray rounded-2xl border border-grok-light hover:border-grok-accent transition-colors duration-300 overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-space mb-4 text-grok-accent">{project.title}</h3>
                <p className="text-grok-light font-inter leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-grok-dark text-grok-accent rounded-full text-sm font-inter border border-grok-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-grok-accent text-grok-dark px-6 py-3 rounded-xl font-bold font-inter hover:bg-grok-accent/80 transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-grok-light font-inter mb-8">
            Interested in working together? Let's build something amazing with AI.
          </p>
          <button className="bg-grok-secondary text-grok-dark px-8 py-4 rounded-xl font-bold font-inter hover:bg-grok-secondary/80 transition-colors duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </main>
  )
}

export default Projects
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
