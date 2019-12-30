import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/header/header.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/sign-in/sign-in.component';
import './App.scss';


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={ShopPage} />
      <Route path="/signin" exact component={SignInPage} />
    </Switch>
  </div>
);

export default App;
