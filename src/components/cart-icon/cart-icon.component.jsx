import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleHideCart } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemsCount, toggleHideCart }) => (
  <div className="cart-icon" onClick={() => toggleHideCart()}>
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleHideCart: () => dispatch(toggleHideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);