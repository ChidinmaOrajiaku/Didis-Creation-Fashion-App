/* eslint-disable */
import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

// Components
/* eslint-enable */ /* eslint-disable no-unused-vars */
import NavigationBar from '../../Common/NavigationBar/NavigationBar.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import './HomePage.scss';

/* eslint-disable class-methods-use-this *//* eslint-disable no-undef */
/**
 * @class HomePage
 */
class HomePage extends Component {
  /**
   * @param {void} void
   * @returns {void}
   */
  componentDidMount() {
    this.slideShow();
  }

  /**
   * Slide show for first section of images
   * @param {void} void
   * @returns {void}
   */
  slideShow() {
    let slideIndex = 0;

    const showSlides = () => {
      const slides = document.getElementsByClassName('item');
      Array.from(slides).forEach((slide) => {
        slide.style.display = 'none';
      });
      slideIndex += 1;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 2000);
    };
    showSlides();
  }

  /**
 * @memberof HomePage
 * @return {ReactElement} markup
*/
  render() {
    return (
      <div className="home=page">
        <NavigationBar/>
        <div className="first-section">
          <div className="item fadeOut">
            <img src="http://www.livelovesmall.com/wp-content/uploads/2015/10/6901379-fashion.jpg"/>
            <div className="image-text1">Looking good is our priority</div>
          </div>
          <div className="item fadeOut">
            <img src="https://images.pexels.com/photos/404159/pexels-photo-404159.jpeg"/>
            <div className="image-text2">We speak and breathe fashion</div>
          </div>
          <div className="item fadeOut">
            <img src="http://www.broaderminds.com/wp-content/uploads/2015/11/aptopix-fashion-theyskens-theory-fall-2012-backstage.jpg"/>
            <div className="image-text3">Fashion lives here</div>
          </div>
        </div>
        <div className="second-section">
          <span>Featured Products</span>
          <div className="first-product-container">
            <div className="first-product product">
              <img src="https://i.pinimg.com/736x/70/e6/fb/70e6fb903e4dbceee9faf503f1b58ff8--sarong.jpg"/>
            </div>
            <div className="first-product-text text">
              <i className="material-icons">favorite</i>
              Love me some splitted skirt
              <i className="material-icons">favorite</i>
            </div>
          </div>
          <div className="second-product-container">
            <div className="second-product-text text">
              <i className="material-icons">favorite</i>
              Sexy strapless jumpsuits
              <i className="material-icons">favorite</i>
            </div>
            <div className="product">
             <img src="http://archiezpoint.com/wp-content/uploads/2016/08/black.jpg"/>
            </div>
          </div>
          <div className="third-product-container">
            <div className="product">
              <img src="https://cdn-img-3.wanelo.com/p/ba2/4b1/83d/bdd07bdab725236a22b5d98/x354-q80.jpg"/>
            </div>
            <div className="third-product-text text">
              <i className="material-icons">favorite</i>
              Kimono Coperate Jacket
              <i className="material-icons">favorite</i>
            </div>
          </div>
        </div>
        <div className="third-section">
          <span className="join-in"> Join in </span>
          <span className="join-vip">
            Join our VIP list to learn about new and trending styles before anyone else does
          </span>
            <form>
              <input type="text" placeholder="your name"/>
              <input type="text" placeholder="your email"/>
              <button>Submit <i className="material-icons">favorite</i></button>
            </form>
        </div>
        <div className="fourth-section">
          <span>Trending</span>
          <div className="all-products-container">
            <div className="first-product-container product-container">
              <div className="product">
                <img src="https://cdn.shopify.com/s/files/1/2156/0325/products/product-image-369142099_500x_crop_bottom.jpg?v=1501409405"/>
              </div>
            </div>
            <div className="second-product-container product-container">
              <div className="product">
              <img src="https://cdn-img-3.wanelo.com/p/7ad/ee0/99c/034adbd6ed0b87d033b332f/x354-q80.jpg"/>
              </div>
            </div>
            <div className="third-product-container product-container">
              <div className="product">
                <img src="https://cdn.shopify.com/s/files/1/2156/0325/products/product-image-272173504_500x_crop_bottom.jpg?v=1505015346"/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
