import { useAppDispatch } from '../../../hooks';
import { useCartSelector } from '../../../selectors';
import {
  addToCart as addToCartRepo,
  increaseCartItemQuantity,
} from '../../../Data/Repository/CartRepository';
import { decreaseProductQuantity } from '../../../Data/Repository/ProductRepository';
import { isInCart } from '../utils';

function AddToCartUseCase(): Function {
  const dispatch = useAppDispatch();
  const cartItems = useCartSelector();

  const addToCart = (id: string) => {
    // * checks if item is already in cart
    if (isInCart(cartItems, id)) {
      dispatch(increaseCartItemQuantity(id));
    } else {
      dispatch(addToCartRepo(id));
    }

    dispatch(decreaseProductQuantity(id));
  };

  return addToCart;
}

export default AddToCartUseCase;
