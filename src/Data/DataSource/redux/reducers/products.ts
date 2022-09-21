import { AnyAction } from 'redux';

import { PRODUCT } from '../actions/action-types';
import { Product } from '../../../../types';
import { generateDummyProductData } from '../constants';

function productsReducer(
  // * inject dummy product data to redux store
  // * this is temporary since there's no functionality to add product via UI
  state = generateDummyProductData(),
  action: AnyAction
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
      return state.filter((product) => product.id !== action.payload.id);
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
