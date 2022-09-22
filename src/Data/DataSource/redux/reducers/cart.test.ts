import cartReducer from './cart';
import { CartTypes } from '../actions/action-types';

describe('cart reducer', () => {
  test('should add product to cart', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 1,
      },
    ];
    const action = {
      type: CartTypes.CART_ADD,
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
      type: CartTypes.CART_REMOVE,
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
      type: CartTypes.CART_QUANTITY_DECREMENT,
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
      type: CartTypes.CART_QUANTITY_INCREMENT,
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

  test('should not allow cart item quantity to be negative', () => {
    const initialState = [
      {
        id: 'id1',
        quantity: 0,
      },
    ];
    const action = {
      type: CartTypes.CART_QUANTITY_DECREMENT,
      payload: {
        id: 'id1',
      },
    };

    const newState = cartReducer(initialState, action);
    expect(newState.length).toBe(0);
  });
});
