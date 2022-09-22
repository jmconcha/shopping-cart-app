import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';
import CartItemCard from './CartItemCard';
import useGetCartItems from '../../../../Domain/UseCase/Cart/GetCartItems';
import useIncreaseCartItem from '../../../../Domain/UseCase/Cart/IncreaseCartItemQuantity';
import useDecreaseCartItem from '../../../../Domain/UseCase/Cart/DecreaseCartItemQuantity';
import useRemoveCartItem from '../../../../Domain/UseCase/Cart/RemoveCartItem';
import { isInStock } from '../../../../Domain/UseCase/utils';
import useGetProduct from '../../../../Domain/UseCase/Product/GetProducts';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

function CartProductList() {
  const cartItems = useGetCartItems();
  const increaseCartItem = useIncreaseCartItem();
  const decreaseCartItem = useDecreaseCartItem();
  const removeCartItem = useRemoveCartItem();
  const products = useGetProduct();

  const grandTotal = cartItems.reduce(
    (total, cartItem: Product) => cartItem.price * cartItem.quantity + total,
    0
  );

  if (cartItems.length === 0) {
    return <h1>Cart is Empty</h1>;
  }

  return (
    <>
      <h1>My Cart</h1>
      <Container>
        {cartItems.map((cartItem: Product) => {
          const isOutOfStock = !isInStock(products, cartItem.id);
          const isIncrementButtonDisabled = isOutOfStock;

          const handleDecrement = () => {
            decreaseCartItem(cartItem.id);
          };
          const handleIncrement = () => {
            increaseCartItem(cartItem.id);
          };
          const handleRemove = () => {
            removeCartItem(cartItem.id, cartItem.quantity);
          };

          return (
            <CartItemCard
              key={cartItem.id}
              cartItem={cartItem}
              handleRemove={handleRemove}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              isIncrementButtonDisabled={isIncrementButtonDisabled}
            />
          );
        })}
      </Container>
      <p>
        <strong>Total:</strong>
        {` ₱${grandTotal}`}
      </p>
    </>
  );
}

export default CartProductList;
