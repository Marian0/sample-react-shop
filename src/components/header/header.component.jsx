import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from 'assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from 'firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null
        : <CartDropdown />
    }
  </div>
);

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  hidden: cart.hidden
});

export default connect(mapStateToProps)(Header);