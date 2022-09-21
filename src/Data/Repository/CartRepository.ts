import { Product } from '../../types';
import {
  addToCart as addToCartActionCreator,
  incrementProductQuantityInCart,
} from '../DataSource/redux/actions/cart';

export function addToCart(id: string) {
  return addToCartActionCreator(id);
}

export function incrementCartItemQuantity(id: string) {
  return incrementProductQuantityInCart(id);
}
