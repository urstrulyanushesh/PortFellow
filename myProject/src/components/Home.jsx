import React from 'react';

const Home = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-on-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(28,27,27,0.04)] dark:shadow-none">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto">
          <a className="font-headline text-2xl font-bold tracking-tighter text-on-surface dark:text-surface" href="/">Gallery Editorial</a>
          <div className="hidden md:flex gap-10 items-center">
            <a className="font-headline italic text-lg text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full transition-colors duration-300" href="#">Home</a>
            <a className="font-headline italic text-lg text-on-surface dark:text-surface opacity-70 hover:text-primary transition-colors duration-300" href="#">Projects</a>
            <a className="font-headline italic text-lg text-on-surface dark:text-surface opacity-70 hover:text-primary transition-colors duration-300" href="#">About</a>
            <a className="font-headline italic text-lg text-on-surface dark:text-surface opacity-70 hover:text-primary transition-colors duration-300" href="#">Contact</a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-on-primary-fixed-variant transition-all scale-102">
            Hire Me
          </button>
        </div>
      </nav>
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32">
          <div className="editorial-grid gap-8 items-end">
            <div className="col-span-12 lg:col-span-7 pb-12">
              <span className="inline-block font-label text-xs tracking-[0.2em] uppercase text-tertiary mb-6">AVAILABLE FOR NEW PROJECTS</span>
              <h1 className="font-headline text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.03em] mb-10">
                Hi, I'm <span className="text-primary italic">Elena</span>,<br />an Editorial Designer <span className="text-primary-container/20 italic">&amp;</span> Art Director.
              </h1>
              <div className="max-w-lg mb-12">
                <p className="text-body text-xl text-on-surface-variant leading-relaxed mb-8">
                  Crafting sophisticated visual narratives through high-end digital experiences and meticulous typography. Based in Milan, working globally.
                </p>
                <div className="flex items-center gap-8">
                  <a className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label text-sm uppercase tracking-widest flex items-center gap-3 transition-transform duration-500 scale-102" href="#featured">
                    View Projects
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </a>
                  <a className="font-label text-sm uppercase tracking-widest text-primary border-b-2 border-primary/20 hover:border-primary transition-all py-1" href="#">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                <img alt="Professional portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUZ-cwG09_CYGOcrBPGtsthAYVID3c0SkszlAC7iu8rZRbosSq8ZgY24JSmJbB_iUPoB40bXIgmMLWQJxXgJS621Cqz8v8KfnHXGw71v_0WdyqsovM0h9Wnha88K_4qXL4Bvbz6DGJ4KU6jZRmhHCX2UH4UJIKGGPUo7UyyQJSxT5aJ4lg8ra8P7-KsDeFZ7AQmz4IZSISSeLmWG366a-PE79N_ezUvxz0VvuSb0TeRpzGJgVICLObTjdCZvIT389Q9oM75SMk4VLd" />
              </div>
              {/* Decorative overlay */}
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(28,27,27,0.04)] hidden md:block">
                <p className="font-headline italic text-2xl text-primary leading-none">Curated Excellence</p>
                <p className="font-label text-[10px] uppercase tracking-widest mt-2 opacity-50 text-on-surface">Digital &amp; Print Media</p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Work Section */}
        <section className="bg-surface-container-low py-32" id="featured">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-tertiary block mb-4">SELECTED WORKS</span>
                <h2 className="font-headline text-5xl tracking-tight">Featured Projects</h2>
              </div>
              <div className="max-w-sm text-right">
                <p className="text-on-surface-variant mb-4">A collection of identity design and digital curation for modern brands.</p>
                <a className="group flex items-center justify-end gap-2 text-primary font-label text-sm uppercase tracking-widest" href="#">
                  See all work
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">chevron_right</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Project 1 */}
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-highest mb-6">
                  <img alt="Vogue Editorial Design" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYJcYAbJ19efEoRyMdfbmFYU_tO1GB17WRr-9CoTT5NLIfyp1roaeAQJZTUlx7UNwTg1pN6X7OBc8zgcOstinb8G5cMS4cNaHiNzIiAptXdmUbO7qAx_Ycr-CmvMbqXfoYakgvnTgjSyMNCWEAI0TTkoyoXQ5p4cEPyK96spBJhq1LsPrBpWI2VhM7laTb0MLLn1BZmBn8pMpaEDcZb0qgYa46sWCryM3RBseoxQv9UXJE_u2tD5yfPXmxWdhpNJONnv3tbtQhYq0" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Editorial Design • 2024</span>
                    <h3 className="font-headline text-2xl group-hover:text-primary transition-colors mt-1">Vogue Italia Redesign</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </div>
              </div>
              {/* Project 2 (Asymmetric shift) */}
              <div className="group md:mt-16">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-highest mb-6">
                  <img alt="Architectural Identity" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTwtdBtYLff6WgWN_u5JQr8Cehz-euDOy9kQ-ELvnVNCl8u8YhDwuo2jmPVqYPVkZgs82eQNWSIeGj1DoyP3yCPvKVWomtHATmzhhccEmgq6NKk345BmoJvoUfacj-FOCRSOYIo-EphC9ws6xzhipmzhpR5SOZn4TSH4vGIvMJRcFd94HKt99_nQyCdiOZ_wJdDf2KKhu4Bf2wm6xCeIxtJ-P2broZFHywQIAfSCdZ2nBAV2nZxvlDyHiCFWR1DLemsQ5EB9odITfv" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Branding • 2023</span>
                    <h3 className="font-headline text-2xl group-hover:text-primary transition-colors mt-1">Zaha Hadid Archive</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </div>
              </div>
              {/* Project 3 */}
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-highest mb-6">
                  <img alt="Digital Gallery Experience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArBV8byn8DyqZKyoXaaiC-G35w2RpaatIJuZNIaL3BI4C70AjNM-BTSU4qsHit-wfVOaXHgOlDCZANuA8hXWyW_6uT1cJEJTHoxvArkmkNE5QkVQbqT_25d6aUnz2R3jmGciYYBuGDf9TkwZcrASR529MrTKLbKVhT_Iju2024G8xLe_4qvHReE-AoVIdIe5HUq2xuVesHeTPl_UDdPADFqTzi7AvEEKy9Tu6lQL0yHGmy35XJP_UMtBbwyKuHdyE0HGkAEJBcKnCB" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Web Experience • 2024</span>
                    <h3 className="font-headline text-2xl group-hover:text-primary transition-colors mt-1">The Met Digital Gallery</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Newsletter / CTA Section */}
        <section className="max-w-[1440px] mx-auto px-8 my-32">
          <div className="bg-primary-container/10 p-12 md:p-24 rounded-xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="font-label text-xs tracking-[0.2em] uppercase text-primary block mb-6">WORK WITH ME</span>
              <h2 className="font-headline text-4xl md:text-6xl mb-12 max-w-2xl mx-auto leading-tight">Ready to bring your <span className="italic text-primary">vision</span> to life?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label text-sm uppercase tracking-widest transition-transform duration-500 scale-102">Start a Project</button>
                <button className="bg-surface-container-lowest text-on-surface px-10 py-5 rounded-lg font-label text-sm uppercase tracking-widest border border-outline-variant/20 transition-transform duration-500 scale-102">View Process</button>
              </div>
            </div>
            {/* Abstract BG circle */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-12 mt-24 bg-surface-container-low dark:bg-on-surface">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-[1440px] mx-auto">
          <div className="mb-8 md:mb-0">
            <span className="font-headline text-xl text-on-surface dark:text-surface">Gallery Editorial</span>
            <p className="font-label text-sm tracking-widest uppercase text-on-surface dark:text-surface opacity-50 mt-2">© 2024 Editorial Portfolio. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a className="font-label text-sm tracking-widest uppercase text-on-surface dark:text-surface opacity-50 hover:opacity-100 hover:text-primary transition-all" href="#">LinkedIn</a>
            <a className="font-label text-sm tracking-widest uppercase text-on-surface dark:text-surface opacity-50 hover:opacity-100 hover:text-primary transition-all" href="#">Twitter</a>
            <a className="font-label text-sm tracking-widest uppercase text-on-surface dark:text-surface opacity-50 hover:opacity-100 hover:text-primary transition-all" href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;