// import React from 'react';
import './Header.css'
import logo from '../ema-john-resources-main/images/Logo.svg';

const Header = () => {
  return (
    <div className='header'>
      
     <img src={logo}alt=""/>
     <div className='angkor_tag'>
       <a href="order">Order</a>
       <a href="orderReview">Order Review</a>
       <a href="manageInventory">Manage Inventory</a>
       <a href="Login">Log in</a>
     </div>
      
    </div>
  );
};

export default Header;