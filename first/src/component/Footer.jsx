import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
   
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
  );
}