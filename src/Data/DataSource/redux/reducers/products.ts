import { AnyAction } from 'redux';

import { PRODUCT, ProductTypes } from '../actions/action-types';
import { Product } from '../../../../types';

interface ProductReducerActionType {
  type: ProductTypes;
  payload: Product;
}

function productsReducer(
  state: Product[] = [],
  action: ProductReducerActionType
): Product[] {
  switch (action.type) {
    case PRODUCT.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          imageUrl: action.payload.imageUrl,
        },
      ];
    case PRODUCT.REMOVE:
      return state.filter(
        (product: Product) => product.id !== action.payload.id
      );
    case PRODUCT.DECREMENT:
      return state.map((product: Product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }

        return product;
      });
    default:
      return state;
  }
}

export default productsReducer;
