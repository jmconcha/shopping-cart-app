import {
  decreaseProductQuantity as decProdQty,
  increaseProductQuantity as incProdQty,
} from '../DataSource/redux/actions/product';

export function decreaseProductQuantity(id: string) {
  return decProdQty(id);
}

export function increaseProductQuantity(id: string) {
  return incProdQty(id);
}
