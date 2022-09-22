import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ProductList from './Presentation/Views/Product/List/ProductList';
import CartProductList from './Presentation/Views/Cart/ProductList/CartProductList';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
`;

const Navigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 12px;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul > li a {
    text-decoration: underline;
    padding: 8px 20px;
  }
  ul > li a:hover {
    background-color: #1967d20a;
  }
  ul > li a:active {
    color: black;
  }
`;

function App() {
  return (
    <div className="App">
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </Navigation>
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
