import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Helper to handle active styling
  const navLinkStyles = ({ isActive }) => 
    `font-medium transition-colors ${
      isActive ? "text-fuchsia-400" : "text-zinc-400 hover:text-fuchsia-300"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/70 backdrop-blur-xl border-b border-fuchsia-500/10 shadow-[0_8px_32px_0_rgba(243,130,255,0.05)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-full">
        
        {/* Logo - Links back to Home */}
        <NavLink to="/" className="text-2xl font-black tracking-widest text-fuchsia-500 uppercase font-headline">
          AETHER
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tighter">
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyles} to="/projects">
            Projects
          </NavLink>
          <NavLink className={navLinkStyles} to="/skills">
            Skills
          </NavLink>
          <NavLink className={navLinkStyles} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkStyles} to="/contact">
            Contact
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6"> {/* Increased gap for clarity */}
          
          {/* Login Link */}
          <NavLink to="/login" className={navLinkStyles}>
            Login
          </NavLink>

          {/* Signup Link */}
          <NavLink to="/signup" className={navLinkStyles}>
            Signup
          </NavLink>
          
          {/* <button className="material-symbols-outlined text-fuchsia-400 hover:bg-fuchsia-500/10 p-2 rounded-full transition-all">
            terminal
          </button> */}

          {/* <Link to="/hireme">
          <button className="bg-fuchsia-600 ...">Hire Me</button>
          </Link> */}
          
          {/* <button className="bg-fuchsia-600 text-white px-6 py-2 rounded-xl font-bold active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(243,130,255,0.4)]">
            Hire Me
          </button> */}
          <NavLink to="/hireme" className="bg-fuchsia-600 text-white px-6 py-2 rounded-xl font-bold active:scale-95 transition-transform hover:shadow-[0_0_20px_rgba(243,130,255,0.4)]">
            Hire Me
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;