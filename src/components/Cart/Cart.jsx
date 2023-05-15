/* eslint-disable react/prop-types */
// import React from 'react';
import './Cart.css';

// eslint-disable-next-line react/prop-types
const Cart = ({ cart }) => {
  // const {cart} = props;
  console.log = ( cart);

let total =0;
for (const product of cart){
  total = total + product.price;
}

let shipping =0;
for (const product of cart){
  shipping = shipping + product.shipping
}

const tax = total*7/100;

const grand=total+shipping+tax;

  return (
    <div className='cart'>
      <h3>Order Summary</h3>
      <p>Select Items:{cart.length} </p>
      <p>Total Price: {total}</p>
      <p>Total Shipping:{shipping}</p>
      <p>tax: {tax.toFixed(2)} </p>
      <h4>Grand Total:{grand.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;