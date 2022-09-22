import React, { MouseEventHandler, useEffect } from 'react';
import styled from 'styled-components';

interface ModalContainerProps {
  show: boolean;
  fadeOutTime: number;
}
const ModalContainer = styled.div<ModalContainerProps>`
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity
      ${({ fadeOutTime }) => (fadeOutTime ? fadeOutTime : '225')}ms,
    z-index ${({ fadeOutTime }) => (fadeOutTime ? fadeOutTime : '225')}ms
      cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ show }) => (show ? 1 : -1)};
`;

const ModalMessage = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgb(255, 255, 255);
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px,
    rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
  padding: 32px;

  h3 {
    text-align: center;
  }
`;

interface ModalProps {
  show?: boolean;
  message: string;
  // * in milliseconds
  fadeOutTime: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Modal({
  show = false,
  message,
  fadeOutTime = 0,
  onClick,
}: ModalProps) {
  return (
    <ModalContainer show={show} fadeOutTime={fadeOutTime} onClick={onClick}>
      <ModalMessage>
        <h3>{message}</h3>
      </ModalMessage>
    </ModalContainer>
  );
}

export default Modal;
