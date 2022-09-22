import productsReducer from './products';
import { ProductTypes } from '../actions/action-types';
import { Product } from '../../../../types';

describe('products reducer', () => {
  test('should add product to product list', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: ProductTypes.PRODUCT_ADD,
      payload: {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    };

    const newState = productsReducer(initialState, action);
    expect(newState).toEqual([
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 3,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
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
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
      {
        id: 'id2',
        name: 'product2',
        price: 200,
        quantity: 2,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: ProductTypes.PRODUCT_REMOVE,
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
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ]);
  });

  test('should not allow product quantity to be negative', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 0,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: ProductTypes.PRODUCT_QUANTITY_DECREMENT,
      payload: {
        id: 'id1',
      },
    };
    const newState = productsReducer(initialState, action);
    expect(newState[0].quantity).toBe(0);
  });

  test('should increment product quantity', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 1,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: ProductTypes.PRODUCT_QUANTITY_INCREMENT,
      payload: {
        id: 'id1',
      },
    };
    const newState = productsReducer(initialState, action);

    // * assert product quantity increase by one
    expect(newState[0]?.quantity).toBe(2);
  });

  test('should increment product quantity by specific number', () => {
    const initialState = [
      {
        id: 'id1',
        name: 'product1',
        price: 100,
        quantity: 0,
        imageUrl: 'https://via.placeholder.com/600/92c952',
      },
    ];
    const action = {
      type: ProductTypes.PRODUCT_QUANTITY_INCREMENT_BY,
      payload: {
        id: 'id1',
        quantity: 2,
      },
    };
    const newState = productsReducer(initialState, action);
    expect(newState[0].quantity).toBe(2);
  });
});
