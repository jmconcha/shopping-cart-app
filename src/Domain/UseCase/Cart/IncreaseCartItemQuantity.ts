import React from 'react';

import { useCartSelector, useProductSelector } from '../../../selectors';
import { CartItem, Product } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { decreaseProductQuantity } from '../../../Data/Repository/ProductRepository';
import { increaseCartItemQuantity } from '../../../Data/Repository/CartRepository';
import { isInStock } from '../utils';

function IncreaseCartItemQuantityUseCase(): Function {
  const products = useProductSelector();
  const cart = useCartSelector();
  const dispatch = useAppDispatch();

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

  const increaseCartItem = (id: string) => {
    // * validate first if product is in stock
    if (!isInStock(products, id)) return;

    dispatch(decreaseProductQuantity(id));
    dispatch(increaseCartItemQuantity(id));
  };

  return increaseCartItem;
}

export default IncreaseCartItemQuantityUseCase;
