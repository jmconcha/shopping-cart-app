import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';

const CardContainer = styled.div`
  border: 1px solid #cccccc;
  max-width: 500px;
  width: 100%;
  min-height: 160px;
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
  flex-wrap: wrap;
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
  margin-top: 10px;
  margin-bottom: 4px;
`;

const Col2 = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #c4c4c4;
`;

interface CardProps {
  cartItem: Product;
  handleRemove: MouseEventHandler<HTMLButtonElement>;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
  isIncrementButtonDisabled?: boolean;
}

function CartItemCard({
  cartItem,
  handleRemove,
  handleDecrement,
  handleIncrement,
  isIncrementButtonDisabled,
}: CardProps) {
  const { id, name, price, quantity, imageUrl } = cartItem;

  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={imageUrl} alt={name} />
      </CardHeader>
      <CardContent>
        <h4>
          <b>{name}</b>
        </h4>
        <p>₱{price}</p>
        <CardContentAction>
          <div>
            <ButtonRemove onClick={handleRemove}>Remove</ButtonRemove>
          </div>
          <CardActionQuantity>
            <Col1>
              <label htmlFor={`quantityItem-${id}`}>Quantity</label>
            </Col1>
            <Col2>
              <QuantityButton onClick={handleDecrement}>-</QuantityButton>
              <QuantityItemInput
                id={`quantityItem-${id}`}
                disabled
                value={quantity}
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
    </CardContainer>
  );
}

export default CartItemCard;
