import { combineReducers, Action } from 'redux';

function productReducer(state = [], action: Action) {
  return state;
}

function cartReducer(state = [], action: Action) {
  return state;
}

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
