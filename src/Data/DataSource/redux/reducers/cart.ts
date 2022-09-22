import { CartTypes } from '../actions/action-types';
import { CartItem } from '../../../../types';

interface CartReducerActionType {
  type: CartTypes;
  payload: {
    id: string;
  };
}

function cartReducer(
  state: CartItem[] = [],
  action: CartReducerActionType
): CartItem[] {
  switch (action.type) {
    case CartTypes.CART_ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          quantity: 1,
        },
      ];
    case CartTypes.CART_REMOVE:
      return state.filter(
        (cartItem: CartItem) => cartItem.id !== action.payload.id
      );
    case CartTypes.CART_QUANTITY_DECREMENT:
      return state.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id && cartItem.quantity !== 0) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }

        return cartItem;
      });
    case CartTypes.CART_QUANTITY_INCREMENT:
      return state.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });
    default:
      return state;
  }
}

export default cartReducer;
