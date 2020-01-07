import { CartActionTypes } from './cart.types';

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});

export const showCart = () => ({
  type: CartActionTypes.SHOW_CART,
});

export const toggleHideCart = () => ({
  type: CartActionTypes.TOGGLE_HIDE_CART,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});