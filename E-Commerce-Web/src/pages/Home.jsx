import { useShop } from "../feature/shop/ShopContext";
import ProductCard from "../component/ProductCard";
import { ShoppingBag, Star, Truck } from "lucide-react";

const Home = () => {
  const { state } = useShop();

  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[48px] bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-6 py-20 shadow-2xl shadow-indigo-500/20 md:px-12 lg:px-16">
        <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/75">Street style with premium performance</p>
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Fresh Jordan drops for the bold and modern.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Discover the latest sneaker styles with edge, comfort, and urban attitude.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="btn-cta bg-white text-slate-900 shadow-lg shadow-slate-900/10">
              Shop Collection
            </button>
            <button className="btn-secondary border border-white/30 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="feature-card">
          <div className="feature-icon bg-indigo-600">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Premium Craft</h3>
          <p className="text-muted">Authentic Jordan build quality with modern street-ready styling.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon bg-fuchsia-600">
            <Truck className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Fast Shipping</h3>
          <p className="text-muted">Fast delivery on every order so your next pair arrives quickly.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon bg-cyan-500">
            <Star className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Top Rated</h3>
          <p className="text-muted">Loved by sneakerheads worldwide for premium fit and finish.</p>
        </div>
      </section>

      <section className="rounded-[32px] bg-slate-950/5 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-slate-900">New Arrivals</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Discover the freshest Jordan drops designed to turn heads and keep you comfortable all day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {state.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;