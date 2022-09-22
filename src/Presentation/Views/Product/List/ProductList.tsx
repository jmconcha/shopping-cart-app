import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';
import Modal from '../../../components/Modal';
import useViewModel from './ViewModel';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const CardHeader = styled.div`
  height: 200px;
  border-radius: 5px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 2px 16px 16px;
`;

const CardButton = styled.button`
  background-color: #1976d2;
  border: 1px solid #1976d2;
  color: #fff;
  padding: 8px 14px;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
`;

function ProductList() {
  const {
    products,
    addToCart,
    showModalMessage,
    setShowModalMessage,
    handleModalMessageClick,
  } = useViewModel();

  if (products.length === 0) {
    return <h1>No product is available at the moment.</h1>;
  }

  return (
    <>
      <h1>Product List</h1>
      <Container>
        {products.map((product: Product) => {
          const handleAddToCart = () => {
            addToCart(product.id);
            setShowModalMessage(true);
          };

          return (
            <Card key={product.id}>
              <CardHeader>
                <CardImage src={product.imageUrl} alt={product.name} />
              </CardHeader>
              <CardContent>
                <h4>
                  <b>{product.name}</b>
                </h4>
                <p>₱{product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <CardButton onClick={handleAddToCart}>Add to Cart</CardButton>
              </CardContent>
            </Card>
          );
        })}
      </Container>
      <Modal
        show={showModalMessage}
        message="Added to cart successfully!"
        fadeOutTime={500}
        onClick={handleModalMessageClick}
      />
    </>
  );
}

export default ProductList;
