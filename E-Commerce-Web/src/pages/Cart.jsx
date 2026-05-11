import { useShop } from "../feature/shop/ShopContext";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useShop();

  // Calculate Total Price
  const total = state.cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  if (state.cart.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center py-24 px-4 text-center">
        <div className="rounded-[32px] panel p-12 shadow-2xl ring-1 ring-slate-200/40 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted mb-8">Add a pair to the cart and come back for premium Jordan drops.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-3 mt-8">
      <div className="lg:col-span-2">
        <div className="mb-8 flex items-center justify-between gap-4 rounded-[32px] bg-white/90 p-6 shadow-2xl shadow-slate-900/5 border border-slate-200/60">
          <div>
            <h1 className="text-3xl font-bold">Your Cart</h1>
            <p className="text-muted">Review your selected Jordans before checkout.</p>
          </div>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">{state.cart.length} items</span>
        </div>

        <div className="space-y-6">
          {state.cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex flex-col gap-6 rounded-[32px] border border-slate-200/70 bg-white/90 p-6 shadow-sm md:flex-row md:items-center">
              <img src={item.image} alt={item.name} className="h-28 w-28 rounded-3xl object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-slate-900">{item.name}</h3>
                <p className="text-sm text-muted">Size: Men's 10</p>
                <div className="mt-4 flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-2 py-2">
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: Math.max(1, (item.quantity || 1) - 1) } })}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm transition hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="inline-flex min-w-[3rem] items-center justify-center text-base font-semibold text-slate-900">{item.quantity || 1}</span>
                  <button
                    onClick={() => dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: (item.quantity || 1) + 1 } })}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-slate-700 shadow-sm transition hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  className="mt-4 inline-flex text-sm font-medium text-rose-600 transition hover:underline"
                >
                  Remove
                </button>
              </div>
              <p className="text-2xl font-bold text-slate-900">${item.price * (item.quantity || 1)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="panel rounded-[32px] border p-8 shadow-2xl shadow-slate-900/5">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4 text-slate-700">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Estimated Shipping</span>
            <span>Free</span>
          </div>
          <hr className="border-slate-200" />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-95">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;