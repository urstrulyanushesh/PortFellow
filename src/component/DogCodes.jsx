import React, { useState } from "react";

const INITIAL_CODES = [
  200, 201, 202, 204, 400, 401, 403, 404, 405, 418, 422, 429, 500, 502, 503, 504
];

const DogCodes = () => {
  const [codes, setCodes] = useState(INITIAL_CODES);
  const [searchTerm, setSearchTerm] = useState("");

  // Delete handler: Removes code from the local state
  const deleteCode = (codeToDelete) => {
    setCodes(codes.filter((code) => code !== codeToDelete));
  };

  // Filter logic for search bar
  const filteredCodes = codes.filter((code) =>
    code.toString().includes(searchTerm)
  );

  return (
    <main className="pt-32 pb-20 bg-[#0e0e0e] min-h-screen text-white px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Search Bar */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-fuchsia-500 tracking-[0.3em] uppercase text-xs font-bold block mb-4">
              Status Visualizer
            </span>
            <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">
              HTTP <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-500">Dogs</span>
            </h1>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search Status Code (e.g. 404)..."
              className="w-full bg-zinc-900 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-fuchsia-500 transition-all shadow-2xl"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Grid of Dog Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCodes.map((code) => (
            <div 
              key={code} 
              className="group relative bg-zinc-900 rounded-[2rem] overflow-hidden border border-white/5 hover:border-fuchsia-500/50 transition-all duration-500 shadow-xl"
            >
              {/* Image Container */}
              <div className="aspect-square w-full overflow-hidden bg-black">
                <img
                  src={`https://http.dog/${code}.jpg`}
                  alt={`HTTP Status ${code}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-black text-white">CODE: {code}</h3>
                  <p className="text-fuchsia-500 text-xs font-mono uppercase tracking-widest">Status Image</p>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteCode(code)}
                  className="p-3 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl border border-red-500/20 transition-all duration-300"
                  title="Remove from view"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCodes.length === 0 && (
          <div className="text-center py-40 border border-dashed border-white/10 rounded-[3rem]">
            <p className="text-zinc-500 uppercase tracking-widest font-bold">No Dog Codes Found</p>
            <button 
              onClick={() => {setCodes(INITIAL_CODES); setSearchTerm("")}}
              className="mt-4 text-fuchsia-500 hover:underline"
            >
              Reset Terminal
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default DogCodes;