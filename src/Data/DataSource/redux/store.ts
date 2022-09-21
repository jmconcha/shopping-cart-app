import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import { generateDummyProductData } from './constants';

const initialState = {
  // * inject dummy product data to redux store
  // * this is temporary since there's no functionality to add product via UI
  products: generateDummyProductData(),
  cart: [],
};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
