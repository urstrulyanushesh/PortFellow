import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import Home from './components/layouts/Home'
import Login from './components/layouts/Login'
import About from './components/layouts/About'

function App() {
   const router = createBrowserRouter ([

      {path: "/", element: <><NavBar /><Home /></>},
      {path:"/about", element: <><NavBar /><About /></> },
      {path:"/login", element:<><NavBar /><Login /></>}

   ])
       

  return (
    <>
    <RouterProvider router={router}/>

    </>
  )

}
export default App
