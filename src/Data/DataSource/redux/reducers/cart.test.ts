import cartReducer from './cart';
import { CART } from '../actions/action-types';

describe('cart reducer', () => {
  test('should add product to cart', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 1,
      },
    ];
    const action = {
      type: CART.ADD,
      payload: {
        id: 'id2',
      },
    };

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        quantity: 1,
      },
      {
        id: 'id2',
        quantity: 1,
      },
    ]);
  });

  test('should remove product from cart', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 3,
      },
      {
        id: 'id2',
        quantity: 2,
      },
    ];
    const action = {
      type: CART.REMOVE,
      payload: {
        id: 'id2',
      },
    };

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        quantity: 3,
      },
    ]);
  });

  test('should decrease quantity of the product in cart by one', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 4,
      },
      {
        id: 'id2',
        quantity: 2,
      },
    ];
    const action = {
      type: CART.DECREMENT,
      payload: {
        id: 'id1',
      },
    };

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        quantity: 3,
      },
      {
        id: 'id2',
        quantity: 2,
      },
    ]);
  });

  test('should increase quantity of the product in cart by one', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 4,
      },
      {
        id: 'id2',
        quantity: 2,
      },
    ];
    const action = {
      type: CART.INCREMENT,
      payload: {
        id: 'id2',
      },
    };

    const newState = cartReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        quantity: 4,
      },
      {
        id: 'id2',
        quantity: 3,
      },
    ]);
  });
});
