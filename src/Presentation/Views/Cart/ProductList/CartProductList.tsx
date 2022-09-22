import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';
import useViewModel from './ViewModel';
import CartItemCard from './CartItemCard';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

function CartProductList() {
  const {
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    isInStock,
    removeCartItem,
  } = useViewModel();
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
          const isOutOfStock = !isInStock(cartItem.id);
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
