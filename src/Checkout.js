import React from 'react';
import burgerImage from './assets/Burger.png';
import burgerImage2 from './assets/burger2.png';
import fantaImage from './assets/Fanta.png';
import bill from './assets/bill.svg';
import maps from './assets/maps.svg';
import arrow from './assets/arrow-left.svg';

const Checkout = () => {
  return (
    <div className="max-w-xs mx-auto bg-background font-manrope p-4">
      <div className="flex bg-white py-4 px-2 rounded-10 text-center text-text mb-4">
        <div>
        <img src={arrow} alt="Logo" />
        </div>
        <div>
        <h1 className="text-14px">Checkout</h1>
        <p className="text-10px">POPEYES | JP NAGAR</p>
        </div>
      </div>   
      <div className="space-y-4">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-10">
          <img src={burgerImage} alt="Caribbean Spicy Zinger Burger" className="w-20 h-20 rounded-10" />
          <div className="flex-grow">
            <h2 className="text-12px text-text">Caribbean Spicy Zinger Burger</h2>
            <p className="text-10px text-gray">350 Kcal</p>
            <p className="text-12px text-text">₹ 319</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 bg-primary text-white rounded">-</button>
            <span className="text-text">1</span>
            <button className="px-2 py-1 bg-primary text-white rounded">+</button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 bg-white p-4 rounded-10">
          <img src={burgerImage2} alt="Cajun Veg Burger" className="w-20 h-20 rounded-10" />
          <div className="flex-grow">
            <h2 className="text-12px text-text">Cajun Veg Burger</h2>
            <p className="text-10px text-gray">250 Kcal</p>
            <p className="text-12px text-text">₹ 219</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-2 py-1 bg-primary text-white rounded">-</button>
            <span className="text-text">2</span>
            <button className="px-2 py-1 bg-primary text-white rounded">+</button>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h2 className="text-14px text-text">Frequently Ordered</h2>
        <div className="flex space-x-2 overflow-x-auto mt-2">
          <div className="bg-white p-2 rounded-10 w-36">
            <img src={fantaImage} alt="Fanta - 1 PET" className="w-full h-36 rounded-10" />
            <p className="text-10px text-text">Fanta - 1 PET</p>
            <p className="text-12px text-text">₹ 89</p>
          </div>
          <div className="bg-white p-2 rounded-10 w-36">
            <img src={fantaImage} alt="Fanta - 1 PET" className="w-full h-36 rounded-10" />
            <p className="text-10px text-text">Fanta - 1 PET</p>
            <p className="text-12px text-text">₹ 89</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-10">
        <div className="flex items-center space-x-2">
          <i className="fas fa-map-marker-alt text-primary"><img src={maps} alt="Logo" /></i>
          <p className="text-12px text-text">Delivery to</p>
        </div>
        <p className="text-12px text-gray">23rd Avenue, JP Nagar, Bangalore</p>
      </div>
      
      <div className="mt-4 bg-white p-4 rounded-10">
        <img src={bill} alt="Logo" />
        <div className="flex justify-between items-center">
          <p className="text-14px text-text">Total Bill</p>
          <p className="text-14px text-text">₹ 538</p>
        </div>
        <p className="text-10px text-gray">Including Taxes</p>
      </div>
      
      <div className="mt-4">
        <button className="w-full py-3 bg-primary text-white rounded-10 text-16px">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
