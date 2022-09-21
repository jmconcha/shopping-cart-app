import { CART } from './action-types';
import { Product } from '../../../../types';

export function addToCart(id: string) {
  return {
    type: CART.ADD,
    payload: {
      id,
    },
  };
}

export function removeProductInCart(id: string) {
  return {
    type: CART.REMOVE,
    payload: {
      id,
    },
  };
}

export function incrementProductQuantityInCart(id: string) {
  return {
    type: CART.INCREMENT,
    payload: {
      id,
    },
  };
}

export function decrementProductQuantityInCart(id: string) {
  return {
    type: CART.DECREMENT,
    payload: {
      id,
    },
  };
}
