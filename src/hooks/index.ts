import { useDispatch } from 'react-redux';

import { AppDispatch } from '../Data/DataSource/redux/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
