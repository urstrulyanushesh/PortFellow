import { Link } from "react-router-dom";
import { ShoppingBag, Moon, Sun } from "lucide-react";
import { useShop } from "../feature/shop/ShopContext";
import { useTheme } from "../feature/theme/ThemeContext";

const NavBar = () => {
  const { state } = useShop();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar sticky top-0 z-50 border-b border-slate-200/40 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="flex items-center gap-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20 font-bold">
            J
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">Jordan Studio</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Sneaker Lab</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <Link to="/" className="nav-link rounded-full px-4 py-2 text-sm font-medium transition">
            Home
          </Link>


          {/* ADD THIS LINK HERE */}
        <Link to="/man" className="nav-link rounded-full px-4 py-2 text-sm font-medium transition">
        Man
        </Link>


          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-100/90 px-4 py-2 text-sm font-semibold transition"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>

          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Cart</span>
            {state.cart.length > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-semibold text-white">
                {state.cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;