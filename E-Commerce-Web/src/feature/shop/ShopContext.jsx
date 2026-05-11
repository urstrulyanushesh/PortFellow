import React, { createContext, useReducer, useMemo, useContext } from "react";

const ShopContext = createContext();

const initialState = {
  cart: [],
  products: [
 { 
      id: 1, 
      name: 'Jordan 1 Retro High OG', 
      price: 170, 
      // This is a more stable direct link
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 2, 
      name: 'Air Jordan 4 Retro', 
      price: 210, 
      image: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800' 
    },
    { 
      id: 3, 
      name: 'Nike Dunk Low', 
      price: 115, 
      image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800' 
    },
    { 
      id: 4, 
      name: 'Jordan 11 Retro', 
      price: 220, 
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80' 
    },
   
    { 
      id: 6, 
      name: 'Jordan 3 Retro', 
      price: 200, 
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 7, 
      name: 'Jordan 5 Retro', 
      price: 205, 
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 8, 
      name: 'Jordan 12 Retro', 
      price: 220, 
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 9, 
      name: 'Air Jordan 1 Low', 
      price: 140, 
      image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 10, 
      name: 'Jordan 1 Mid SE', 
      price: 160, 
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80' 
    },
  ],
};

function shopReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

      if (existingItemIndex > -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
        return { ...state, cart: updatedCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    }

    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cart: state.cart.filter(item => item.id !== action.payload) 
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id 
            ? { ...item, quantity: Math.max(1, action.payload.quantity) } 
            : item
        )
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
}

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const value = useMemo(() => ({
    state,
    dispatch,
    cartCount: state.cart.reduce((total, item) => total + (item.quantity || 0), 0),
    cartTotal: state.cart.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0)
  }), [state]);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};