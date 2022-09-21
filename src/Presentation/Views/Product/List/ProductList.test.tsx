import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ProductList from './ProductList';
import rootReducer from '../../../../Data/DataSource/redux/reducers';
import { Product } from '../../../../types';

describe('<ProductList />', () => {
  test('should display message "No product is available at the moment." if there is no product', () => {
    const initialState = {
      products: [],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    const message = screen.queryByRole('heading', {
      name: 'No product is available at the moment.',
    });
    expect(message).toBeInTheDocument();
  });

  test('should list all the products that are available', () => {
    const initialState = {
      products: [
        {
          id: 'id-1',
          name: 'Product Name 1',
          price: 100,
          quantity: 1,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
        {
          id: 'id-2',
          name: 'Product Name 2',
          price: 200,
          quantity: 2,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    // * assert that "No product is available at the moment." message do not show
    const message = screen.queryByRole('heading', {
      name: 'No product is available at the moment.',
    });
    expect(message).not.toBeInTheDocument();

    // * assert that products are listed via checking "Add to Cart" button
    const addToCartButtons = screen.getAllByRole('button', {
      name: /add to cart/i,
    });
    expect(addToCartButtons).toHaveLength(2);

    // * assert that products are listed with correct data
    const productsName = initialState.products.map((product: Product) =>
      screen.getByText(product.name)
    );
    const productsPrice = initialState.products.map((product: Product) =>
      screen.getByText(`₱${product.price}`)
    );
    const productsQuantity = initialState.products.map((product: Product) =>
      screen.getByText(`Quantity: ${product.quantity}`)
    );
    expect(productsName).toHaveLength(2);
    expect(productsPrice).toHaveLength(2);
    expect(productsQuantity).toHaveLength(2);
  });

  test('should decrease the product quantity by one when add to "Add to Cart" button is clicked', () => {
    const initialState = {
      products: [
        {
          id: 'id-3',
          name: 'Product Name 3',
          price: 300,
          quantity: 3,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );

    const quantity = screen.getByText('Quantity: 3');
    const addToCartButton = screen.getByRole('button');
    user.click(addToCartButton);
    expect(quantity).toHaveTextContent('Quantity: 2');
  });
});
