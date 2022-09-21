import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Data/DataSource/redux/store';
import { CartItem, Product } from '../../../../types';

interface CartProductListViewModelReturnType {
  cartItems: Product[];
}

function CartProductListViewModel(): CartProductListViewModelReturnType {
  const products = useSelector((state: RootState) => state.products);
  const cart = useSelector((state: RootState) => state.cart);
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

  return { cartItems };
}

export default CartProductListViewModel;
