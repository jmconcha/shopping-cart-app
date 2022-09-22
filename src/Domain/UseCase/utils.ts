import { CartItem } from '../../types';

export function isInCart(cartItems: CartItem[], id: string): boolean {
  return cartItems.some((cartItem: CartItem) => cartItem.id === id);
}
