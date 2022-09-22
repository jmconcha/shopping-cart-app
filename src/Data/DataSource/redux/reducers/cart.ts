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
      const newState: CartItem[] = [];

      state.forEach((cartItem: CartItem) => {
        if (cartItem.id === action.payload.id) {
          if (cartItem.quantity <= 1) return;

          newState.push({
            ...cartItem,
            quantity: cartItem.quantity - 1,
          });
        } else {
          newState.push(cartItem);
        }
      });

      return newState;
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
