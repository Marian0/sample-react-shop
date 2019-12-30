import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from 'components/header/header.component.jsx';
import './App.scss';


const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/shop" exact component={Shop} />
    </Switch>
  </div>
);

export default App;
