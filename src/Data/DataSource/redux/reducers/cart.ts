import { AnyAction } from 'redux';

import { CART } from '../types';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function cartReducer(state: Product[] = [], action: AnyAction) {
  switch (action.type) {
    case CART.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    case CART.REMOVE:
      return state.filter((product) => product.id !== action.payload.id);
    case CART.DECREMENT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });
    case CART.INCREMENT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });
    default:
      return state;
  }
}

export default cartReducer;
