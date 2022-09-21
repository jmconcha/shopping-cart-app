import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Data/DataSource/redux/store';
import { useAppDispatch } from '../../../../hooks';
import { CartItem, Product } from '../../../../types';
import {
  addToCart as addToCartRepo,
  incrementCartItemQuantity,
} from '../../../../Data/Repository/CartRepository';
import { decreaseProductQuantity } from '../../../../Data/Repository/ProductRepository';

interface ProductListViewModelReturnType {
  products: Product[];
  addToCart: Function;
}

function ProductListViewModel(): ProductListViewModelReturnType {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cart);

  const addToCart = (id: string) => {
    // * checks if item is already in cart
    if (cartItems.some((cartItem: CartItem) => cartItem.id === id)) {
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
