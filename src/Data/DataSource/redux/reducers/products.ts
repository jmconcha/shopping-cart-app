import { AnyAction } from 'redux';

import { PRODUCT } from '../actions/action-types';
// import { Product } from '../../../../types';
import { generateDummyProductData } from '../constants';

function productsReducer(
  // * inject dummy product data to redux store
  // * this is temporary since there's no functionality to add product via UI
  state = generateDummyProductData(),
  action: AnyAction
) {
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
