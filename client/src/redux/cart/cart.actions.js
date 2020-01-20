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

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const substractItem = (item) => ({
  type: CartActionTypes.SUBSTRACT_ITEM,
  payload: item
});