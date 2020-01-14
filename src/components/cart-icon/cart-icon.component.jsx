import React from 'react';
import { connect } from 'react-redux';
import { toggleHideCart } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = ({ itemsCount, toggleHideCart }) => (
  <CartIconContainer onClick={() => toggleHideCart()}>
    <ShoppingIconContainer />
    <ItemCountContainer>{itemsCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
  toggleHideCart: () => dispatch(toggleHideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);