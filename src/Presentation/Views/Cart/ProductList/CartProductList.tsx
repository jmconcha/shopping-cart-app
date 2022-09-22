import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';
import useViewModel from './ViewModel';

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Card = styled.div`
  border: 1px solid #cccccc;
  width: 500px;
  height: 160px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;

  h4 {
    margin: 18px 0;
  }

  p {
    margin: 12px 0;
  }
`;

const CardHeader = styled.div`
  flex: 1;
  border-radius: 5px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  flex: 2;
  padding: 2px 16px 16px;
`;

const CardContentAction = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const CardActionQuantity = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuantityButton = styled.button`
  border: none;
  padding-left: 6px;
  padding-right: 6px;
  background-color: #f2f2f2;
  font-size: 1.3rem;
  cursor: pointer;
`;

const QuantityItemInput = styled.input`
  margin-left: 8px;
  margin-right: 8px;
  width: 40px;
  font-size: 1rem;
  background-color: transparent;
  border: none;
  outline: none;
  text-align: center;
`;

const ButtonRemove = styled.button`
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  cursor: pointer;
`;

const Col1 = styled.div`
  text-align: center;
  margin-bottom: 4px;
`;

const Col2 = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #c4c4c4;
`;

function CartProductList() {
  const {
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    isInStock,
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
          const handleDecrement = () => {
            decreaseCartItem(cartItem.id);
          };
          const handleIncrement = () => {
            increaseCartItem(cartItem.id);
          };
          const isOutOfStock = !isInStock(cartItem.id);
          const isIncrementButtonDisabled = isOutOfStock;

          return (
            <Card key={cartItem.id}>
              <CardHeader>
                <CardImage src={cartItem.imageUrl} alt={cartItem.name} />
              </CardHeader>
              <CardContent>
                <h4>
                  <b>{cartItem.name}</b>
                </h4>
                <p>₱{cartItem.price}</p>
                <CardContentAction>
                  <div>
                    <ButtonRemove>Remove</ButtonRemove>
                  </div>
                  <CardActionQuantity>
                    <Col1>
                      <label htmlFor={`quantityItem-${cartItem.id}`}>
                        Quantity
                      </label>
                    </Col1>
                    <Col2>
                      <QuantityButton onClick={handleDecrement}>
                        -
                      </QuantityButton>
                      <QuantityItemInput
                        id={`quantityItem-${cartItem.id}`}
                        disabled
                        value={cartItem.quantity}
                      />
                      <QuantityButton
                        disabled={isIncrementButtonDisabled}
                        onClick={handleIncrement}
                      >
                        +
                      </QuantityButton>
                    </Col2>
                  </CardActionQuantity>
                </CardContentAction>
              </CardContent>
            </Card>
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
