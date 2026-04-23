



// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
//   const [error, setError] = useState("");

//   const validatePassword = (pass) => {
//     const hasUpper = /[A-Z]/.test(pass);
//     const hasLower = /[a-z]/.test(pass);
//     const hasNumber = /[0-9]/.test(pass);
//     const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
//     const isLongEnough = pass.length >= 8;

//     if (!isLongEnough) return "Password must be at least 8 characters.";
//     if (!hasUpper) return "Include at least one uppercase letter.";
//     if (!hasLower) return "Include at least one lowercase letter.";
//     if (!hasNumber) return "Include at least one number.";
//     if (!hasSpecial) return "Include at least one special character.";
//     return null;
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     setError("");

//     const passError = validatePassword(formData.password);
//     if (passError) {
//       setError(passError);
//       return;
//     }

//     const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    
//     if (existingUsers.find(u => u.username === formData.username)) {
//       setError("Username already taken.");
//       return;
//     }

//     existingUsers.push(formData);
//     localStorage.setItem("users", JSON.stringify(existingUsers));

//     alert("Account created successfully!");
//     navigate("/login");
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={handleSignup} className="space-y-4">
//           {/* Changed text color to #C800DE */}
//           <h2 className="text-2xl font-bold text-center text-[#C800DE]">Signup Form</h2>
          
//           {error && (
//             <p className="bg-red-50 text-red-600 p-2 text-xs rounded border border-red-200">
//               {error}
//             </p>
//           )}
          
//           <input 
//             name="username" 
//             type="text" 
//             placeholder="Username" 
//             required
//             /* Changed focus ring to #C800DE */
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-[#C800DE] outline-none transition"
//             onChange={(e) => setFormData({...formData, username: e.target.value})}
//           />
          
//           <input 
//             name="email" 
//             type="email" 
//             placeholder="Email" 
//             required
//             /* Changed focus ring to #C800DE */
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-[#C800DE] outline-none transition"
//             onChange={(e) => setFormData({...formData, email: e.target.value})}
//           />
          
//           <input 
//             name="password" 
//             type="password" 
//             placeholder="Password" 
//             required
//             /* Changed focus ring to #C800DE */
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-[#C800DE] outline-none transition"
//             onChange={(e) => setFormData({...formData, password: e.target.value})}
//           />

//           {/* Changed button background to #C800DE */}
//           <button className="w-full bg-[#C800DE] text-white py-2 rounded font-bold hover:opacity-90 transition duration-200">
//             Signup
//           </button>
          
//           {/* Changed link text color to #C800DE */}
//           <p className="text-center text-sm text-gray-600">
//             Already a member?{" "}
//             <Link to="/login" className="text-[#C800DE] font-bold hover:underline">
//               Login now
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }









import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const validatePassword = (pass) => {
    const hasUpper = /[A-Z]/.test(pass);
    const hasLower = /[a-z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);
    const isLongEnough = pass.length >= 8;

    if (!isLongEnough) return "Password must be at least 8 characters.";
    if (!hasUpper) return "Include at least one uppercase letter.";
    if (!hasLower) return "Include at least one lowercase letter.";
    if (!hasNumber) return "Include at least one number.";
    if (!hasSpecial) return "Include at least one special character.";
    return null;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const passError = validatePassword(formData.password);
    if (passError) {
      setError(passError);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (existingUsers.find(u => u.username === formData.username)) {
      setError("Username already taken.");
      return;
    }

    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    /* Background matches Login.jsx */
    <div className="flex min-h-screen items-center justify-center bg-[#0e0e0e] px-4">
      
      {/* Container Card with Zinc background and subtle border */}
      <div className="w-full max-w-md bg-zinc-900 p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
        
        <form onSubmit={handleSignup} className="space-y-6">
          
          {/* Header Section */}
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black text-[#C800DE] uppercase tracking-tighter">
              Signup
            </h2>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">
              Create New Account
            </p>
          </div>
          
          {/* Error Message Styling */}
          {error && (
            <p className="bg-red-500/10 text-red-500 p-3 text-xs rounded-xl border border-red-500/20 text-center">
              {error}
            </p>
          )}
          
          {/* Input Fields with Dark Theme */}
          <div className="space-y-4">
            <input 
              name="username" 
              type="text" 
              placeholder="Username" 
              required
              className="w-full bg-black border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C800DE] focus:ring-1 focus:ring-[#C800DE] transition-all"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              required
              className="w-full bg-black border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C800DE] focus:ring-1 focus:ring-[#C800DE] transition-all"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <input 
              name="password" 
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-black border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#C800DE] focus:ring-1 focus:ring-[#C800DE] transition-all"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#C800DE] text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:opacity-90 transition duration-200">
            Create Account
          </button>
          
          {/* Footer Link */}
          <p className="text-center text-sm text-zinc-500">
            Already a member?{" "}
            <Link to="/login" className="text-[#C800DE] font-bold hover:underline">
              Login now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}