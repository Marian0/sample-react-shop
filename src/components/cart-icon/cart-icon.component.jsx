import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleHideCart } from 'redux/cart/cart.actions';

const CartIcon = ({ toggleHideCart }) => (
  <div className="cart-icon" onClick={() => toggleHideCart()}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleHideCart: () => dispatch(toggleHideCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);