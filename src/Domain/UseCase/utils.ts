import { CartItem, Product } from '../../types';

export function isInCart(cartItems: CartItem[], id: string): boolean {
  return cartItems.some((cartItem: CartItem) => cartItem.id === id);
}

export function isInStock(products: Product[], id: string): boolean {
  const product = products.find((product: Product) => product.id === id);

  if (product === undefined) return false;
  if (product.quantity < 1) return false;

  return true;
}
