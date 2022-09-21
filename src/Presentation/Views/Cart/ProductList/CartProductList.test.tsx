import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../../Data/DataSource/redux/reducers';
import CartProductList from './CartProductList';

describe('<CartProductList />', () => {
  test('should display "Cart is Empty" if there is no product added in cart', () => {
    const initialState = {
      products: [
        {
          id: 'id-1',
          name: 'Product Name 1',
          price: 100,
          quantity: 1,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <CartProductList />
      </Provider>
    );

    const heading = screen.queryByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('should display cart items', () => {
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
      cart: [
        {
          id: 'id-1',
          quantity: 1,
        },
        {
          id: 'id-2',
          quantity: 2,
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <CartProductList />
      </Provider>
    );

    const cartItem1 = screen.queryByText('Product Name 1');
    const cartItem2 = screen.queryByText('Product Name 2');
    const cartItemQuantity1 = screen.queryByText('1');
    const cartItemQuantity2 = screen.queryByText('2');

    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
    expect(cartItemQuantity1).toBeInTheDocument();
    expect(cartItemQuantity2).toBeInTheDocument();
  });
});
