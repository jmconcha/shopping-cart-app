import { CART, CartTypes } from '../actions/action-types';
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
    case CART.ADD:
      return [
        ...state,
        {
          id: action.payload.id,
          quantity: 1,
        },
      ];
    case CART.REMOVE:
      return state.filter(
        (cartItem: CartItem) => cartItem.id !== action.payload.id
      );
    case CART.DECREMENT:
      return state.map((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }

        return cartItem;
      });
    case CART.INCREMENT:
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
