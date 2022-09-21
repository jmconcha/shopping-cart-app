import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Data/DataSource/redux/store';
import { useAppDispatch } from '../../../../hooks';
import { Product } from '../../../../types';
import { addToCart as addToCartRepo } from '../../../../Data/Repository/CartRepository';

interface ProductListViewModelReturnType {
  products: Product[];
  addToCart: Function;
}

function ProductListViewModel(): ProductListViewModelReturnType {
  const dispatch = useAppDispatch();
  const products = useSelector((state: RootState) => state.products);

  const addToCart = (product: Product) => {
    dispatch(addToCartRepo(product));
  };

  return {
    products,
    addToCart,
  };
}

export default ProductListViewModel;
