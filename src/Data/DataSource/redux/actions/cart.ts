import { CartTypes } from './action-types';
import { Product } from '../../../../types';

export function addToCart(id: string) {
  return {
    type: CartTypes.CART_ADD,
    payload: {
      id,
    },
  };
}

export function removeProductInCart(id: string) {
  return {
    type: CartTypes.CART_REMOVE,
    payload: {
      id,
    },
  };
}

export function incrementProductQuantityInCart(id: string) {
  return {
    type: CartTypes.CART_QUANTITY_INCREMENT,
    payload: {
      id,
    },
  };
}

export function decrementProductQuantityInCart(id: string) {
  return {
    type: CartTypes.CART_QUANTITY_DECREMENT,
    payload: {
      id,
    },
  };
}

export function removeCartItem(id: string) {
  return {
    type: CartTypes.CART_REMOVE,
    payload: {
      id,
    },
  };
}
