import { useState, useEffect, MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../Data/DataSource/redux/store';

interface UseModalReturnType {
  showModalMessage: boolean;
  setShowModalMessage: Function;
  handleModalMessageClick: MouseEventHandler<HTMLDivElement>;
}

export const useAppDispatch: () => AppDispatch = useDispatch;

export function useModal(): UseModalReturnType {
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);
  useEffect(() => {
    if (showModalMessage) {
      setTimeout(() => {
        setShowModalMessage(false);
      }, 1000);
    }
  }, [showModalMessage]);

  const handleModalMessageClick = () => {
    setShowModalMessage(false);
  };

  return {
    showModalMessage,
    setShowModalMessage,
    handleModalMessageClick,
  };
}
