import React from 'react';

import { useAppDispatch } from '../../../hooks';
import { decreaseCartItemQuantity } from '../../../Data/Repository/CartRepository';
import { increaseProductQuantity } from '../../../Data/Repository/ProductRepository';

function DecreaseCartItemQuantity(): Function {
  const dispatch = useAppDispatch();

  const decreaseCartItem = (id: string) => {
    dispatch(decreaseCartItemQuantity(id));
    dispatch(increaseProductQuantity(id));
  };

  return decreaseCartItem;
}

export default DecreaseCartItemQuantity;
