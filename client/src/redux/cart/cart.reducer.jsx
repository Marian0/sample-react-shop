
import { CartActionTypes } from './cart.types';
import { addItemToCart, substractItemCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.HIDE_CART:
      return {
        ...state,
        hidden: true
      }
    case CartActionTypes.SHOW_CART:
      return {
        ...state,
        hidden: false
      }
    case CartActionTypes.TOGGLE_HIDE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartActionTypes.SUBSTRACT_ITEM:
      return {
        ...state,
        cartItems: substractItemCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;