import React from 'react';

import { useCartSelector, useProductSelector } from '../../../../selectors';
import { CartItem, Product } from '../../../../types';
import { useAppDispatch } from '../../../../hooks';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
} from '../../../../Data/Repository/ProductRepository';
import {
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} from '../../../../Data/Repository/CartRepository';

interface CartProductListViewModelReturnType {
  cartItems: Product[];
  increaseCartItem: Function;
  decreaseCartItem: Function;
}

function CartProductListViewModel(): CartProductListViewModelReturnType {
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

  const isInStock = (id: string): boolean => {
    const product = products.find((product: Product) => product.id === id);

    if (product === undefined) return false;
    if (product.quantity < 1) return false;

    return true;
  };

  const increaseCartItem = (id: string) => {
    // * validate first if product is in stock
    if (!isInStock(id)) return;

    dispatch(decreaseProductQuantity(id));
    dispatch(increaseCartItemQuantity(id));
  };

  const decreaseCartItem = (id: string) => {
    dispatch(decreaseCartItemQuantity(id));
    dispatch(increaseProductQuantity(id));
  };

  return { cartItems, increaseCartItem, decreaseCartItem };
}

export default CartProductListViewModel;
