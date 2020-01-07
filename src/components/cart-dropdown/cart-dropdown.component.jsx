import React from 'react';
import { connect } from 'react-redux';

import CustomButtom from 'components/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selector';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      }
    </div>
    <CustomButtom>Checkout</CustomButtom>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);