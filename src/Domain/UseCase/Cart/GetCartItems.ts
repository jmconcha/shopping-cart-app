import { useCartSelector, useProductSelector } from '../../../selectors';
import { CartItem, Product } from '../../../types';

function GetCartItemsUseCase(): Product[] {
  const products = useProductSelector();
  const cart = useCartSelector();

  const serializedCartData = new Map();
  cart.forEach((cart: CartItem) => {
    serializedCartData.set(cart.id, { ...cart });
  });
  const cartItems: Product[] = [];
  products.forEach((product: Product) => {
    const cartItem = serializedCartData.get(product.id);
    if (cartItem !== undefined) {
      cartItems.push({ ...product, ...cartItem });
    }
  });

  return cartItems;
}

export default GetCartItemsUseCase;
