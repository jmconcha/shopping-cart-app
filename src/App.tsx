import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductList from './Presentation/Views/Product/List/ProductList';
import CartProductList from './Presentation/Views/Cart/ProductList/CartProductList';

const Main = styled.main`
  padding-left: 40px;
  padding-right: 40px;
`;

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
      <Main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartProductList />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
