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
      return [...state, ...action.payload];
    case CART.REMOVE:
      return state.filter((product) => product.id === action.payload.id);
    default:
      return state;
  }
}

export default cartReducer;
