import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
  console.log(token);
  alert("OK ! ");
};

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

  return <StripeCheckout
    label='Pay now'
    name='Shop app'
    billingAddress
    shippingAddress
    description={`Your total value is: $ ${price}`}
    amount={priceInCents}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
};

export default StripeButton;