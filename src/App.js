// App.js
import React from 'react';
import './App.css';
import burgerImage from './assets/Burger.png';
import burgerImage2 from './assets/burger2.png';
import fantaImage from './assets/Fanta.png';
import bill from './assets/bill.svg';
import  maps  from './assets/maps.svg';
import arrow  from './assets/arrow-left.svg';

function App() {
  return (
    <div className="app">
      <header className="header">
        <button className="back-button"><img src={arrow} alt="Logo" /></button>
        <div className="header-title">
          <h1>Checkout</h1>
          <p>POPEYES | JP NAGAR</p>
        </div>
      </header>
      <main className="main-content">
        <div className="order-item">
          <img
            src={burgerImage}
            alt="Caribbean Spicy Zinger Burger"
            className="item-image"
          />
          <div className="item-details">
            <h2>Caribbean Spicy Zinger Burger</h2>
            <p>350 Kcal</p>
            <p>₹ 319</p>
          </div>
          <div className="item-quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <div className="order-item">
          <img
            src={burgerImage2}
            alt="Cajun Veg Burger"
            className="item-image"
          />
          <div className="item-details">
            <h2>Cajun Veg Burger</h2>
            <p>250 Kcal</p>
            <p>₹ 219</p>
          </div>
          <div className="item-quantity">
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        </div>
        <div className="frequently-ordered">
          <h2>Frequently Ordered</h2>
          <div className="frequently-ordered-item">
            <img
              src={fantaImage}
              alt="Fanta"
              className="frequently-ordered-image"
            />
            <p>Fanta - 1 PET</p>
            <p>₹ 89</p>
          </div>
          <div className="frequently-ordered-item">
            <img
              src={fantaImage}
              alt="Fanta"
              className="frequently-ordered-image"
            />
            <p>Fanta - 1 PET</p>
            <p>₹ 89</p>
          </div>
          <div className="frequently-ordered-item">
            <img
              src={fantaImage}
              alt="Fanta"
              className="frequently-ordered-image"
            />
            <p>Fanta - 1 PET</p>
            <p>₹ 89</p>
          </div>
        </div>
        <div className="delivery-info">
        <img src={maps} alt="Logo" />
          <h2>Delivery to</h2>
          <p>23rd Avenue, JP Nagar, Bangalore</p>
        </div>
        <div className="total-bill">
        <img src={bill} alt="Logo" />
          <h2>Total Bill</h2>
          <p>Including Taxes</p>
          <p>₹ 538</p>
        </div>
      </main>
      <div className="footer-spacer"></div>
      <footer className="footer">
        <button className="checkout-button">Proceed to checkout</button>
      </footer>
    </div>
  );
}

export default App;
