import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
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

interface CartProps {
  title: string;
  subtitles: string[];
  imageUrl: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Card({ title, subtitles, imageUrl, onClick }: CartProps) {
  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={imageUrl} alt={title} />
      </CardHeader>
      <CardContent>
        <h4>
          <b>{title}</b>
        </h4>
        {subtitles.map((sub: string) => (
          <p key={sub}>{sub}</p>
        ))}
        <CardButton onClick={onClick}>Add to Cart</CardButton>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
