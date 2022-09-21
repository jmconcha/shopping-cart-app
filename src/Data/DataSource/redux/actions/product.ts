import { PRODUCT } from './action-types';
import { Product } from '../../../../types';

export function addProduct(product: Product) {
  return {
    type: PRODUCT.ADD,
    payload: {
      ...product,
    },
  };
}

export function removeProduct(id: string) {
  return {
    type: PRODUCT.ADD,
    payload: {
      id,
    },
  };
}
