import { useSelector } from 'react-redux';

import { RootState } from '../Data/DataSource/redux/store';

export function useProductSelector() {
  const products = useSelector((state: RootState) => state.products);
  return products;
}

export function useCartSelector() {
  const cartItems = useSelector((state: RootState) => state.cart);
  return cartItems;
}
