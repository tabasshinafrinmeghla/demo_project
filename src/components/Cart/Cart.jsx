/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import React from 'react';
import './Cart.css';

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  // const {cart} = props;
  console.log = (cart);

  let total = 0;
  let totalShopping = 0;
  let quantity = 0;

  for (const product of cart) {

    // reload er problem er jonno-----

    // if(product.quantity === 0){
    //   product.quantity=1;
    // }
    product.quantity = product.quantity || 1;
    // -------------------------------------


    total = total + product.price;
    totalShopping = totalShopping + product.shipping;
    quantity = quantity + product.quantity;
  }

  // let shipping =0;
  // for (const product of cart){
  //   totalShopping = shipping + product.shipping
  // }


  // for (const quantity of cart){
  //   quantity = quantity + product.quantity;
  // }

  const tax = total * 7 / 100;

  const grand = total + totalShopping + tax;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Select Items:{quantity} </p>
      <p>Total Price: {total}</p>
      <p>Total Shipping:{totalShopping}</p>
      <p>tax: {tax.toFixed(2)} </p>
      <h4>Grand Total:{grand.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;