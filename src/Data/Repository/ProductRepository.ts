import { Product } from '../../types';
import { decreaseProductQuantity as decProdQty } from '../DataSource/redux/actions/product';

export function decreaseProductQuantity(id: string) {
  return decProdQty(id);
}
