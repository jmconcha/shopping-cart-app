import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import ProductList from './Presentation/Views/Product/List/ProductList';
import CartProductList from './Presentation/Views/Cart/ProductList/CartProductList';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartProductList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
