import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <div className="pt-32 text-center">Reading Database...</div>;

  return (
    <main className="pt-40 pb-20 bg-[#0e0e0e] text-white px-8 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Link to="/blog" className="text-fuchsia-500 text-sm font-bold uppercase tracking-widest hover:underline">
          ← Back to Feed
        </Link>
        <h1 className="text-5xl font-black mt-8 mb-6 uppercase leading-tight">{post.title}</h1>
        <div className="h-1 w-20 bg-fuchsia-500 mb-8"></div>
        <p className="text-zinc-300 text-xl leading-loose first-letter:text-5xl first-letter:font-bold first-letter:text-fuchsia-500">
          {post.body} {post.body} {post.body}
        </p>
      </div>
    </main>
  );
};

export default PostDetail;