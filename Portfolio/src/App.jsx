import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/layouts/NavBar'
import Home from './components/layouts/Home'
import Login from './components/layouts/Login'
import About from './components/layouts/About'
import Projects from './components/layouts/Projects'
import Contact from './components/layouts/Contact'

function App() {
   const router = createBrowserRouter ([

      {path: "/", element: <><NavBar /><Home /></>},
      {path:"/about", element: <><NavBar /><About /></> },
      {path:"/projects", element: <><NavBar /><Projects /></>},
      {path:"/contact", element: <><NavBar /><Contact /></>},
      {path:"/login", element:<><NavBar /><Login /></>}

   ])
       

  return (
    <>
    <RouterProvider router={router}/>

    </>
  )

}
export default App
