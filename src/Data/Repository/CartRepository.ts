import { Product } from '../../types';
import { addToCart as addToCartActionCreator } from '../DataSource/redux/actions/cart';

export function addToCart(id: string) {
  return addToCartActionCreator(id);
}
