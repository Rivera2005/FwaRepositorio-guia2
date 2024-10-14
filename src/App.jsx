import { useState } from "react";
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Asegúrate de tener este archivo CSS

const products = [
  { id: 1, name: 'Computadora 1', price: 10 },
  { id: 2, name: 'Computadora 2', price: 19.99 },
  { id: 3, name: 'Computadora 3', price: 19.99 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((product) => (product.id === productId ? { ...product, quantity: product.quantity - 1 } : product))
        .filter((product) => product.quantity > 0)
    );
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">Carrito de Compras</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">Carrito</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="flex-fill d-flex flex-column justify-content-center align-items-center">
          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
