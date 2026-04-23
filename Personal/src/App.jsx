import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
   const router = createBrowserRouter ([

      {path: "/", element: <><NavBar /><Home /></>},
      {path:"/about", element: <><NavBar /><About /></> },
      {path:"/projects", element: <><NavBar /><Projects /></>},
      {path:"/contact", element: <><NavBar /><Contact /></>},

   ])
       

  return (
    <>
    <RouterProvider router={router}/>

    </>
  )

}
export default App
