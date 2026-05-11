import React from 'react';
import { useShop } from './ShopContext'; // Adjust path based on your file structure

const Man = () => {
  const { state, dispatch } = useShop();
  const { products } = state;

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Men's Collection</h1>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
                // Final safety: if the URL fails, it shows a generic sneaker
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80";
                }}
              />
            </div>
            <div style={styles.info}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>${product.price.toFixed(2)}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                style={styles.button}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple inline styles for immediate testing
const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px'
  },
  card: {
    border: '1px solid #eee',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    backgroundColor: '#fff'
  },
  imageWrapper: {
    width: '100%',
    height: '250px',
    overflow: 'hidden',
    backgroundColor: '#f9f9f9'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  info: {
    padding: '15px',
    textAlign: 'center'
  },
  productName: {
    fontSize: '1.1rem',
    margin: '10px 0'
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '15px'
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold'
  }
};

export default Man;