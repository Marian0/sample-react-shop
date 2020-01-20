import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

  const onToken = token => {
    axios({
      url: 'payments',
      method: 'post',
      data: {
        amount: priceInCents,
        token
      }
    }).then(response => {
      alert("Payment succesful");
    }).catch(error => {
      alert("There was an error with your payment. Make sure you are using a proper credit card");
      console.log("Payment error", JSON.stringify(error));
    })
  };

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