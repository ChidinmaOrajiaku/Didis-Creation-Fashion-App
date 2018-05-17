/* eslint-disable */
import React from 'react';
/* eslint-enable */

import './Footer.scss';
import logo from '../../../img/logo.jpeg';
import instaLogo from '../../../img/instagram.png';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-logo">
      <img src={logo} />
    </div>
    <span> No.11 Adoyi-Alashe close, Anthony, Lagos-Nigeria </span>
    <div className="social-media-links">
      <div className="social-images"><img src={instaLogo}/></div>
      <div className="social-images facebook"><img src="https://cdn.worldvectorlogo.com/logos/facebook-icon-white.svg"/></div>
      <div className=" social-images snapchat"><img src="http://backgroundcheckall.com/wp-content/uploads/2017/12/snapchat-logo-transparent-background-7.png"/></div>
    </div>
  </div>
);

export default Footer;
