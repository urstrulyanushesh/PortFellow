import React from 'react';
import { useShop } from '../feature/shop/ShopContext';
import { ShoppingCart } from 'lucide-react';

function ProductCard({ product }) {
  const { dispatch } = useShop();

  return (
    <div className="group overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/90 shadow-2xl shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = 'https://images.unsplash.com/photo-1519741492266-3417b3b438cd?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
      </div>
      <div className="space-y-4 px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Jordan</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">New</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
          <p className="text-sm leading-6 text-slate-500">Modern silhouette with premium materials and an elevated streetwear feel.</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-4">
          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
