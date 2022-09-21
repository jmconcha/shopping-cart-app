import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../Data/DataSource/redux/store';
import { Product } from '../../../../types';

interface ProductListViewModelReturnType {
  products: Product[];
}

function ProductListViewModel(): ProductListViewModelReturnType {
  const products = useSelector((state: RootState) => state.products);

  return {
    products,
  };
}

export default ProductListViewModel;
