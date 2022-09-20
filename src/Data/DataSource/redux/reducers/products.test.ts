import productsReducer from './products';
import { PRODUCT } from '../types';

describe('products reducer', () => {
  test('should add product to product list', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 3,
      },
    ];
    const action = {
      type: PRODUCT.ADD,
      payload: {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
      },
    };

    const newState = productsReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 3,
      },
      {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
      },
    ]);
  });

  test('should remove product from product list', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 3,
      },
      {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
      },
    ];
    const action = {
      type: PRODUCT.REMOVE,
      payload: {
        id: 'id1',
      },
    };

    const newState = productsReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
      },
    ]);
  });
});
