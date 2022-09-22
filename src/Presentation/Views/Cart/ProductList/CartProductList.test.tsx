import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../../../Data/DataSource/redux/reducers';
import CartProductList from './CartProductList';
import { Product } from '../../../../types';

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
    const cartItemsQuantity = screen.queryAllByLabelText('Quantity');

    expect(cartItem1).toBeInTheDocument();
    expect(cartItem2).toBeInTheDocument();
    expect(cartItemsQuantity).toHaveLength(2);
    expect(cartItemsQuantity[0]).toHaveValue('1');
    expect(cartItemsQuantity[1]).toHaveValue('2');
  });

  test('should display grand total', () => {
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

    const grandTotal = screen.queryByText('₱500');
    expect(grandTotal).toBeInTheDocument();
  });

  test('should increase cart item quantity if listed product has enough items', () => {
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
      cart: [
        {
          id: 'id-1',
          quantity: 1,
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <CartProductList />
      </Provider>
    );

    const cartItemQuantity = screen.getByRole('textbox', {
      name: 'Quantity',
    });
    const cartItemIncrementButton = screen.getByRole('button', {
      name: '+',
    });

    // * assert initial value
    expect(cartItemQuantity).toHaveValue('1');

    // * assert that product quantity decrease by one
    user.click(cartItemIncrementButton);
    let currentState = store.getState();
    let product = currentState.products.find(
      (product: Product) => product.id === 'id-1'
    );
    expect(product?.quantity).toBe(0);

    // * assert value after increment cart item quantity
    expect(cartItemQuantity).toHaveValue('2');

    // * assert that cart item quantity increment should not be allowed if product is not in stock
    user.click(cartItemIncrementButton);
    currentState = store.getState();
    product = currentState.products.find(
      (product: Product) => product.id === 'id-1'
    );
    expect(product?.quantity).toBe(0);

    // * assert value after increment cart item quantity
    expect(cartItemQuantity).toHaveValue('2');
  });

  test('should decrease cart item quantity', () => {
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
      cart: [
        {
          id: 'id-1',
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

    const cartItemQuantity = screen.getByRole('textbox', {
      name: 'Quantity',
    });
    const cartItemDecrementButton = screen.getByRole('button', {
      name: '-',
    });

    // * assert cart item initial value
    expect(cartItemQuantity).toHaveValue('2');

    // * assert cart item value after decreasing cart item quantity
    user.click(cartItemDecrementButton);
    expect(cartItemQuantity).toHaveValue('1');

    // * assert that product quantity increase by one
    let currentState = store.getState();
    let product = currentState.products.find(
      (product: Product) => product.id === 'id-1'
    );
    expect(product?.quantity).toBe(2);
  });

  test('should disable increment button for cart item quantity if product is out of stock', () => {
    const initialState = {
      products: [
        {
          id: 'id-1',
          name: 'Product Name 1',
          price: 100,
          quantity: 0,
          imageUrl: 'https://via.placeholder.com/600/92c952',
        },
      ],
      cart: [
        {
          id: 'id-1',
          quantity: 1,
        },
      ],
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <CartProductList />
      </Provider>
    );

    const cartItemIncrementButton = screen.getByRole('button', {
      name: '+',
    });
    expect(cartItemIncrementButton).toBeDisabled();
  });
});
