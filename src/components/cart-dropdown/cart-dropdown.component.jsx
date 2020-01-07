import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from 'components/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hideCart } from 'redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
          cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))
          :
          <span className='empty-message'>Your cart is empty.</span>
      }
    </div>
    <CustomButtom onClick={() => {
      dispatch(hideCart());
      history.push('/checkout');
    }}>
      Checkout
    </CustomButtom>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));