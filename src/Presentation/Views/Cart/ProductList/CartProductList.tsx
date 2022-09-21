import React from 'react';
import styled from 'styled-components';
import productsReducer from '../../../../Data/DataSource/redux/reducers/products';

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
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
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
  justify-content: space-between;
`;

const CardActionQuantity = styled.div`
  float: right;
`;

const QuantityButton = styled.button`
  border: none;
  background-color: #f2f2f2;
  font-size: 1.3rem;
  cursor: pointer;
`;

const QuantitySpan = styled.span`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 1rem;
`;

const ButtonRemove = styled.button`
  padding: 8px 12px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  cursor: pointer;
`;

function CartProductList() {
  const { cartItems } = useViewModel();

  if (cartItems.length === 0) {
    return <h1>Cart is Empty</h1>;
  }

  return (
    <>
      <h1>My Cart</h1>
      <Container>
        {cartItems.map((cartItem: Product) => (
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
                <ButtonRemove>Remove</ButtonRemove>
                <CardActionQuantity>
                  <QuantityButton>-</QuantityButton>
                  <QuantitySpan>{cartItem.quantity}</QuantitySpan>
                  <QuantityButton>+</QuantityButton>
                </CardActionQuantity>
              </CardContentAction>
            </CardContent>
          </Card>
        ))}
      </Container>
      <p>
        <strong>Total:</strong> ₱60,000.00
      </p>
    </>
  );
}

export default CartProductList;
