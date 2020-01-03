import React from 'react';

import CustomButtom from 'components/custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButtom>Checkout</CustomButtom>
  </div>
);

export default CartDropdown;