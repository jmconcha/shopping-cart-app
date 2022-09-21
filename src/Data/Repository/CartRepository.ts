import { Product } from '../../types';
import { addToCart as addToCartActionCreator } from '../DataSource/redux/actions/cart';

export function addToCart(product: Product) {
  return addToCartActionCreator(product);
}
