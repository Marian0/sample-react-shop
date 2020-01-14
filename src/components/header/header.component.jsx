import React from 'react';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { auth } from 'firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'redux/user/user.selector';
import { selectCartHidden } from 'redux/cart/cart.selector';

import {
  StyledHeader,
  StyledLogo,
  StyledOption,
  StyledOptionDiv,
  StyledOptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <StyledHeader>
    <StyledLogo to='/'>
      <Logo />
    </StyledLogo>

    <StyledOption>
      <StyledOptionLink to='/shop'>
        SHOP
      </StyledOptionLink>
      <StyledOptionLink to='/shop'>
        CONTACT
      </StyledOptionLink>
      {
        currentUser ?
          <StyledOptionDiv onClick={() => auth.signOut()}>SIGN OUT</StyledOptionDiv>
          :
          <StyledOptionLink to='/signin'>
            SIGN IN
          </StyledOptionLink>
      }
      <CartIcon />
    </StyledOption>
    {
      hidden ? null
        : <CartDropdown />
    }
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);