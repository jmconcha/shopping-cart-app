import { AnyAction } from 'redux';

import { PRODUCT } from '../types';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function productsReducer(state: Product[] = [], action: AnyAction) {
  switch (action.type) {
    case PRODUCT.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];
    case PRODUCT.REMOVE:
      return state.filter((product) => product.id !== action.payload.id);
    default:
      return state;
  }
}

export default productsReducer;
