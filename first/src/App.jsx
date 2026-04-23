// import Navbar from "./component/NavBar/Navbar"
// import Footer from "./component/Footer"
// import About from "./component/NavBar/About"
// import Home from "./component/NavBar/Home"
// import Projects from "./component/NavBar/Projects"
// import Contact from "./component/NavBar/Contact"
// import Login from "./component/NavBar/Login"
// import Signup from "./component/NavBar/Signup"
// import MainLayout from "./component/Layouts/MainLayout"
// import AuthLayout from "./component/Layouts/AuthLayout"
// import { createBrowserRouter,Route, Routes } from "react-router-dom"
// import Counterapp from "./component/Counterapp"
// function App() {
 

//   return (
 
//    <Routes>
//   <Route element={<MainLayout />}>
//     <Route path="/" element={<Home />} />
//     <Route path="/projects" element={<Projects />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path ="/counterapp" element={<Counterapp />}/>
//   </Route>

//   <Route element={<AuthLayout />}>
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<Signup />} />
//   </Route>
// </Routes>
     
      
    
//   )
// }

// export default App



import { Routes, Route } from "react-router-dom";
import MainLayout from "./component/Layouts/MainLayout";
import AuthLayout from "./component/Layouts/AuthLayout";
import Home from "./component/NavBar/Home";
import Login from "./component/NavBar/Login";
import Signup from "./component/NavBar/Signup";
import Projects from "./component/NavBar/Projects";
import About from "./component/NavBar/About";
import Contact from "./component/NavBar/Contact";
import Counterapp from "./component/Counterapp";
import HireMe from "./component/Hireme";
import ScrollToTop from "./component/ScrollToTop";
import Skills from "./component/NavBar/Skills";
import { useFetch } from "./hooks/usefetch";

import JsonFetch from "./component/JsonFetch";
import PostDetail from "./component/PostDetailed";

import DogCodes from "./component/DogCodes";

function App() {
  return (
    <>
    <ScrollToTop /> {/* PLACE IT HERE */}
    <Routes>
      {/* Main Website Section */}
      <Route element={<MainLayout />}>
        {/* This is where Hero will load after login */}
        <Route path="/" element={<Home />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* BLOG ROUTES */}
        <Route path="/blog" element={<JsonFetch />} />
        <Route path="/blog/:id" element={<PostDetail />} />

        <Route path="/dogs" element={<DogCodes />} />


        <Route path="/counterapp" element={<Counterapp />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/skills" element={<Skills />} />
      </Route>

      {/* Login & Signup Section */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;