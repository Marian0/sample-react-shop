import React from 'react';
import { connect } from 'react-redux';
import CartItem from 'components/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { hideCart } from 'redux/cart/cart.actions';
import { StyledCartDropdownContainer, StyledCartItemsContainer, StyledEmptyMessageContainer, StyledCartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <StyledCartDropdownContainer>
    <StyledCartItemsContainer>
      {
        cartItems.length ?
          cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))
          :
          <StyledEmptyMessageContainer>Your cart is empty.</StyledEmptyMessageContainer>
      }
    </StyledCartItemsContainer>
    <StyledCartDropdownButton onClick={() => {
      dispatch(hideCart());
      history.push('/checkout');
    }}>
      Checkout
    </StyledCartDropdownButton>
  </StyledCartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));