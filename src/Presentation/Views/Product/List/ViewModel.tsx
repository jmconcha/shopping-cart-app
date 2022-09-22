import React from 'react';

import { useAppDispatch } from '../../../../hooks';
import { CartItem, Product } from '../../../../types';
import {
  addToCart as addToCartRepo,
  incrementCartItemQuantity,
} from '../../../../Data/Repository/CartRepository';
import { decreaseProductQuantity } from '../../../../Data/Repository/ProductRepository';
import { useCartSelector, useProductSelector } from '../../../../selectors';

interface ProductListViewModelReturnType {
  products: Product[];
  addToCart: Function;
}

function ProductListViewModel(): ProductListViewModelReturnType {
  const dispatch = useAppDispatch();
  const products = useProductSelector();
  const cartItems = useCartSelector();

  const isInCart = (id: string): boolean => {
    return cartItems.some((cartItem: CartItem) => cartItem.id === id);
  };

  const addToCart = (id: string) => {
    // * checks if item is already in cart
    if (isInCart(id)) {
      dispatch(incrementCartItemQuantity(id));
    } else {
      dispatch(addToCartRepo(id));
    }

    dispatch(decreaseProductQuantity(id));
  };

  return {
    products,
    addToCart,
  };
}

export default ProductListViewModel;
