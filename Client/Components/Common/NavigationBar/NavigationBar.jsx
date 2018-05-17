/* eslint-disable */
import React from 'react';
/* eslint-enable */

import './NavigationBar.scss';
import logo from '../../../img/logo.jpeg';

/* eslint-disable no-undef */
const NavigationBar = () => {
  const navResponsive = () => {
    const navBar = document.getElementById('nav-links');
    if (navBar !== null && navBar.className === 'nav-links-container') {
      navBar.className += ' responsive';
    } else if (navBar !== null) {
      navBar.className = 'nav-links-container';
    }
  };

  return (
    <div className="navigation-bar-container">
      <ul className="navigation-logo-list">
        <div className="navigation-logo">
          <img src={logo} />
        </div>
      </ul>
      <ul className="nav-links-container" id="nav-links">
        <li><a>HOME</a></li>
        <li className="store"><a>STORE</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>SIGN UP</a></li>
        <li className="icon" onClick={navResponsive}>
          <a><i className="material-icons">menu</i></a>
        </li>
      </ul>
  </div>
  );
};

export default NavigationBar;
