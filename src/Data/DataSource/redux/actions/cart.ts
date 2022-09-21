import { CART } from './action-types';
import { Product } from '../../../../types';

export function addToCart(product: Product) {
  return {
    type: CART.ADD,
    payload: {
      ...product,
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
