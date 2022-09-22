import {
  addToCart as addToCartActionCreator,
  removeCartItem as removeItem,
  incrementProductQuantityInCart,
  decrementProductQuantityInCart,
} from '../DataSource/redux/actions/cart';

export function addToCart(id: string) {
  return addToCartActionCreator(id);
}

export function removeCartItem(id: string) {
  return removeItem(id);
}

export function increaseCartItemQuantity(id: string) {
  return incrementProductQuantityInCart(id);
}

export function decreaseCartItemQuantity(id: string) {
  return decrementProductQuantityInCart(id);
}
