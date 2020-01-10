import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import productsReducer from './products/products.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart',
  ]
};


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  products: productsReducer,
});

export default persistReducer(persistConfig, rootReducer);