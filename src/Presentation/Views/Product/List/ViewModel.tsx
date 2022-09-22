import React, { useState, useEffect, MouseEventHandler } from 'react';

import { useAppDispatch } from '../../../../hooks';
import { CartItem, Product } from '../../../../types';
import {
  addToCart as addToCartRepo,
  increaseCartItemQuantity,
} from '../../../../Data/Repository/CartRepository';
import { decreaseProductQuantity } from '../../../../Data/Repository/ProductRepository';
import { useCartSelector, useProductSelector } from '../../../../selectors';

interface ProductListViewModelReturnType {
  products: Product[];
  addToCart: Function;
  showModalMessage: boolean;
  setShowModalMessage: Function;
  handleModalMessageClick: MouseEventHandler<HTMLDivElement>;
}

function ProductListViewModel(): ProductListViewModelReturnType {
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  useEffect(() => {
    if (showModalMessage) {
      setTimeout(() => {
        setShowModalMessage(false);
      }, 1000);
    }
  }, [showModalMessage]);

  const dispatch = useAppDispatch();
  const cartItems = useCartSelector();
  const products = useProductSelector();
  const availableProducts = products.filter(
    (product: Product) => product.quantity > 0
  );

  const isInCart = (id: string): boolean => {
    return cartItems.some((cartItem: CartItem) => cartItem.id === id);
  };

  const addToCart = (id: string) => {
    // * checks if item is already in cart
    if (isInCart(id)) {
      dispatch(increaseCartItemQuantity(id));
    } else {
      dispatch(addToCartRepo(id));
    }

    dispatch(decreaseProductQuantity(id));
  };

  const handleModalMessageClick = () => {
    setShowModalMessage(false);
  };

  return {
    products: availableProducts,
    addToCart,
    showModalMessage,
    setShowModalMessage,
    handleModalMessageClick,
  };
}

export default ProductListViewModel;
