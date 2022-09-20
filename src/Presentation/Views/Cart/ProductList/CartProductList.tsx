import React from 'react';
import styled from 'styled-components';

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
  return (
    <>
      <h1>My Cart</h1>
      <Container>
        {Array.from({ length: 3 }).map(() => (
          <Card>
            <CardHeader>
              <CardImage
                src="https://via.placeholder.com/600/92c952"
                alt="gaming chair"
              />
            </CardHeader>
            <CardContent>
              <h4>
                <b>Gaming Chair</b>
              </h4>
              <p>₱20,000.00</p>
              <CardContentAction>
                <ButtonRemove>Remove</ButtonRemove>
                <CardActionQuantity>
                  <QuantityButton>-</QuantityButton>
                  <QuantitySpan>1</QuantitySpan>
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
