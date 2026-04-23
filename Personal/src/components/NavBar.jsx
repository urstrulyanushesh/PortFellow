import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-grok-dark text-grok-text p-4 shadow-lg border-b border-grok-light">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-space text-grok-accent">
          Grok Portfolio
        </div>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-grok-accent border-b-2 border-grok-accent pb-1 font-medium"
                  : "hover:text-grok-accent transition-colors duration-300 font-inter"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-grok-accent border-b-2 border-grok-accent pb-1 font-medium"
                  : "hover:text-grok-accent transition-colors duration-300 font-inter"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-grok-accent border-b-2 border-grok-accent pb-1 font-medium"
                  : "hover:text-grok-accent transition-colors duration-300 font-inter"
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-grok-accent border-b-2 border-grok-accent pb-1 font-medium"
                  : "hover:text-grok-accent transition-colors duration-300 font-inter"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
