import React from 'react';
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { render } from './test-utils';

import App from './App';

describe('<App />', () => {
  // render ProductList component on "/" route
  test('should render <ProductList /> on "/" route', () => {
    render(<App />);

    const productList = screen.queryByText('Product List');
    expect(productList).toBeInTheDocument();
  });

  // render CartProductList component on "/cart" route
  test('should render <CartProductList /> on "/cart" route', () => {
    render(<App />);

    const linkToCartPage = screen.getByRole('link', {
      name: /Cart/,
    });
    user.click(linkToCartPage);
    const productList = screen.queryByText(/cart is empty/i);
    expect(productList).toBeInTheDocument();
  });
});
