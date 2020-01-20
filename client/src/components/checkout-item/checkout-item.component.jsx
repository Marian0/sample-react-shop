import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItem, addItem, substractItem } from 'redux/cart/cart.actions';

const CheckoutItem = ({ item, removeItem, addItem, substractItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => substractItem(item)}>&#10094;</div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>
    </span>
    <span className="price">{item.price}</span>
    <div className="remove-button" onClick={() => removeItem(item)}>&#10005;</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  substractItem: item => dispatch(substractItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);