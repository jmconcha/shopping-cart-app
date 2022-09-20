import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  // render ProductList component on "/" route
  test('should render <ProductList /> on "/" route', () => {
    render(<App />, { wrapper: BrowserRouter });

    const productList = screen.queryByText('Product List');
    expect(productList).toBeInTheDocument();
  });

  // render CartProductList component on "/cart" route
  test('should render <CartProductList /> on "/cart" route', () => {
    render(<App />, { wrapper: BrowserRouter });

    const linkToCartPage = screen.getByRole('link', {
      name: /Cart/,
    });
    user.click(linkToCartPage);
    const productList = screen.queryByText('My Cart');
    expect(productList).toBeInTheDocument();
  });
});
