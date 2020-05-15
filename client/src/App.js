import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser, setUserToken } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectUserToken } from 'redux/user/user.selector';
import { GlobalStyle } from './global.styles';
import Spinner from 'components/spinner/spinner.component';
import ErrorBoundary from 'components/error-boundary/error-boundary.component';
import { messaging } from 'firebase/firabase.messaging';

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInPage = lazy(() => import('./pages/sign-in/sign-in.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (err) {
      console.log("Service worker registration failed, error:", err);
    });
}

const App = ({ 
  setCurrentUser, 
  currentUser,
  setUserToken, 
  userToken, 
}) => {

  useEffect(() => {
    messaging.requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
        setUserToken(token);
        console.log("TOKEN", token)
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });

    navigator.serviceWorker.addEventListener("message", message => {
      alert(JSON.stringify(message.data));
      console.log(message.data);
    });
  }, [])

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

  const renderIsNotificationsAvailable = () => {
    if (!('serviceWorker' in navigator) && !('PushManager' in window)) {
      return <p>Web push notifications not available :(</p>;
    }
    return (<>
      <p>Web push notifications available :)</p>
      <p>Token: {userToken}</p>
    </>);
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      {renderIsNotificationsAvailable()}
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
  userToken: selectUserToken,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setUserToken: token => dispatch(setUserToken(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
