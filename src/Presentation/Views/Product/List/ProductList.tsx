import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../../types';
import Modal from '../../../components/Modal';
import Card from '../../../components/Card';
import useViewModel from './ViewModel';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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
          const subtitles = [
            `₱${product.price}`,
            `Quantity: ${product.quantity}`,
          ];

          return (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.name}
              subtitles={subtitles}
              onClick={handleAddToCart}
            />
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
