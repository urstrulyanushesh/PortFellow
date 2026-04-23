import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JsonFetch = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(15); // Start with 15
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const showMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 15); // Increase by 15 on click
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-fuchsia-500 font-mono animate-pulse uppercase tracking-[0.5em]">
          Loading_Archive...
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-[#0e0e0e] min-h-screen text-white px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <span className="text-fuchsia-500 tracking-[0.3em] uppercase text-xs font-bold block mb-4">
            Total Posts: {posts.length}
          </span>
          <h1 className="text-6xl font-black uppercase tracking-tighter">
            Archive <span className="text-zinc-600">Feed</span>
          </h1>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, visibleCount).map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group">
              <article className="h-full p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-fuchsia-500/30 transition-all duration-500">
                <span className="text-fuchsia-500/50 font-mono text-xs mb-4 block">
                  [{post.id.toString().padStart(3, '0')}]
                </span>
                <h2 className="text-xl font-bold uppercase group-hover:text-fuchsia-500 transition-colors line-clamp-2 mb-4">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3">
                  {post.body}
                </p>
              </article>
            </Link>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < posts.length && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={showMorePosts}
              className="group relative px-12 py-4 bg-transparent border border-fuchsia-500/30 rounded-full overflow-hidden transition-all hover:border-fuchsia-500"
            >
              <span className="relative z-10 font-black uppercase tracking-[0.2em] text-sm group-hover:text-white transition-colors">
                Load More Content
              </span>
              <div className="absolute inset-0 bg-fuchsia-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default JsonFetch;