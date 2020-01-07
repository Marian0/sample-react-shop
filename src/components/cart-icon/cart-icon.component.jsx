import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleHideCart } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selector';

const CartIcon = ({ itemsCount, toggleHideCart }) => (
  <div className="cart-icon" onClick={() => toggleHideCart()}>
    {console.log("render")}
    <ShoppingIcon className='shopping-icon' />
    <span className="item-count">{itemsCount}</span>
  </div>
);

const mapStateToProps = state => ({
  itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleHideCart: () => dispatch(toggleHideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);