// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError("");

//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find(
//       (u) => u.username === formData.username && u.password === formData.password
//     );

//     if (user) {
//       localStorage.setItem("isLoggedIn", "true");
//       localStorage.setItem("currentUser", user.username);
//       alert("Login successful!");
//       // REDIRECT TO HOME
//       navigate("/"); 
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={handleLogin} className="space-y-4">
//           <h2 className="text-2xl font-bold text-center text-[#C800DE]">Login Form</h2>
//           {error && <p className="bg-red-50 text-red-600 p-2 text-sm rounded border border-red-200">{error}</p>}
//           <input 
//             name="username" type="text" placeholder="Username" required
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-[#C800DE] outline-none transition"
//             onChange={(e) => setFormData({...formData, username: e.target.value})}
//           />
//           <input 
//             name="password" type="password" placeholder="Password" required
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-[#C800DE] outline-none transition"
//             onChange={(e) => setFormData({...formData, password: e.target.value})}
//           />
//           <button className="w-full bg-[#C800DE] text-white py-2 rounded font-bold hover:opacity-90">
//             Login
//           </button>
//           <p className="text-center text-sm text-gray-600">
//             Not a member? <Link to="/signup" className="text-[#C800DE] font-bold">Signup now</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // SIMULATING API CALL
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json" }
      });

      if (response.ok) {
        // Log logic for JSONPlaceholder (Fake success)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", formData.username);
        alert("API Handshake Successful!");
        navigate("/");
      } else {
        setError("API Connection Failed.");
      }
    } catch (err) {
      setError("Server unreachable.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0e0e0e] px-4">
      <div className="w-full max-w-md bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Login</h2>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">Secure API Gateway</p>
          </div>

          {error && <p className="bg-red-500/10 text-red-500 p-3 text-xs rounded-xl border border-red-500/20 text-center">{error}</p>}
          
          <input 
            className="w-full bg-black border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-fuchsia-500 transition-all"
            placeholder="Username"
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required
          />
          <input 
            className="w-full bg-black border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-fuchsia-500 transition-all"
            type="password"
            placeholder="Password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          
          <button 
            disabled={isLoading}
            className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white py-4 rounded-2xl font-black uppercase tracking-widest transition-all disabled:opacity-50"
          >
            {isLoading ? "Authenticating..." : "Enter Terminal"}
          </button>
        </form>
      </div>
    </div>
  );
}