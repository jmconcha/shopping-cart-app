import { ProductTypes } from '../actions/action-types';
import { Product } from '../../../../types';

interface ProductReducerActionType {
  type: ProductTypes;
  payload: any;
}

function productsReducer(
  state: Product[] = [],
  action: ProductReducerActionType
): Product[] {
  switch (action.type) {
    case ProductTypes.PRODUCT_ADD:
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
    case ProductTypes.PRODUCT_REMOVE:
      return state.filter(
        (product: Product) => product.id !== action.payload.id
      );
    case ProductTypes.PRODUCT_QUANTITY_DECREMENT:
      return state.map((product: Product) => {
        if (product.id === action.payload.id && product.quantity > 0) {
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
