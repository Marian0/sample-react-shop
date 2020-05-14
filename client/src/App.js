import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from 'redux/user/user.selector';
import { GlobalStyle } from './global.styles';
import Spinner from 'components/spinner/spinner.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (!userAuth) {
        setCurrentUser(userAuth);
        return;
      }

      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });

      setCurrentUser(userAuth);
      return () => {
        unsubscribeFromAuth();
      }
    })
  }, [setCurrentUser])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/" exact component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() =>
              currentUser ? <Redirect to='/shop' />
                : <SignInPage />
            } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
