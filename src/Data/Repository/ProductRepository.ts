import {
  decreaseProductQuantity as decProdQty,
  increaseProductQuantity as incProdQty,
  increaseProductQuantityBy as incProdQtyBy,
} from '../DataSource/redux/actions/product';

export function decreaseProductQuantity(id: string) {
  return decProdQty(id);
}

export function increaseProductQuantity(id: string) {
  return incProdQty(id);
}

export function increaseProductQuantityBy(id: string, quantity: number) {
  return incProdQtyBy(id, quantity);
}
