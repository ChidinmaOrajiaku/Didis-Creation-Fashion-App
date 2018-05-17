/* eslint-disable */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* eslint-enable */

// components
import HomePage from './Components/Pages/HomePage/HomePage.jsx';

// theme
import './Components/theme.scss';

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
    </Switch>
  </BrowserRouter>
);
