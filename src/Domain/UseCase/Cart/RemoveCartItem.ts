import { useAppDispatch } from '../../../hooks';
import { increaseProductQuantityBy } from '../../../Data/Repository/ProductRepository';
import { removeCartItem as removeCartItemRepo } from '../../../Data/Repository/CartRepository';

function RemoveCartItemUseCase(): Function {
  const dispatch = useAppDispatch();

  const removeCartItem = (id: string, cartItemQuantity: number) => {
    dispatch(removeCartItemRepo(id));
    dispatch(increaseProductQuantityBy(id, cartItemQuantity));
  };

  return removeCartItem;
}

export default RemoveCartItemUseCase;
