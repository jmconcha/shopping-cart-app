import { useProductSelector } from '../../../selectors';
import { Product } from '../../../types';

function GetProductUseCase(): Product[] {
  const products = useProductSelector();
  const availableProducts = products.filter(
    (product: Product) => product.quantity > 0
  );

  return availableProducts;
}

export default GetProductUseCase;
