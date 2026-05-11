import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ShopProvider } from './feature/shop/ShopContext';
import { ThemeProvider } from './feature/theme/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* ShopProvider gives the whole app access to the cart state */}
      <ShopProvider>
        <App />
      </ShopProvider>
    </ThemeProvider>
  </React.StrictMode>
);