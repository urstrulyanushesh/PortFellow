const Footer = () => {
  return (
    <footer className="footer panel border-t border-slate-200/20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-slate-900">Jordan Studio</h3>
          <p className="text-sm text-muted">A premium sneaker experience with style-first drops and movement-ready design.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 mb-4">Explore</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="hover:text-slate-900 transition">Home</li>
            <li className="hover:text-slate-900 transition">Shop</li>
            <li className="hover:text-slate-900 transition">New Releases</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 mb-4">Support</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li className="hover:text-slate-900 transition">Shipping</li>
            <li className="hover:text-slate-900 transition">Returns</li>
            <li className="hover:text-slate-900 transition">Contact</li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-muted">
        © 2024 Jordan Studio. Crafted for modern sneaker lovers.
      </div>
    </footer>
  );
};

export default Footer;