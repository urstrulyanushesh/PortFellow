import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar"; 
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;