import { ProductTypes } from './action-types';
import { Product } from '../../../../types';

export function addProduct(product: Product) {
  return {
    type: ProductTypes.PRODUCT_ADD,
    payload: {
      ...product,
    },
  };
}

export function removeProduct(id: string) {
  return {
    type: ProductTypes.PRODUCT_REMOVE,
    payload: {
      id,
    },
  };
}

export function decreaseProductQuantity(id: string) {
  return {
    type: ProductTypes.PRODUCT_QUANTITY_DECREMENT,
    payload: {
      id,
    },
  };
}

export function increaseProductQuantity(id: string) {
  return {
    type: ProductTypes.PRODUCT_QUANTITY_INCREMENT,
    payload: {
      id,
    },
  };
}
