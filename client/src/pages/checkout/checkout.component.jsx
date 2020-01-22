import React from 'react';
import { connect } from 'react-redux';
import './checkout.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selector';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import StripeButton from 'components/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="empty-cart">Your cart is Empty</p>
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span></span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))
      }

      <div className="total">
        Total: $ {total}
      </div>

      <StripeButton price={total} />

      <p>See <a href="https://stripe.com/docs/testing" rel="noopener noreferrer" target="_blank">Stripe Test Cards</a>.</p>
    </div>
  )
};

const mapStateToProps = state => createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);