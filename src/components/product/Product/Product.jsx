/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
  //  console.log(props)
  const { name, img, seller, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;


  return (
    <div className='product'>
      <img src={img} alt="" />
      {/* <h1 className='title'>Ultraboost 22 Shoes</h1> */}
      <h2 className='name'>Name: {name}</h2>
      <h2 className='price'>price: ${price}</h2>
      <p className='others'>Manufacturer: {seller} </p>
      <p className='others'>Rating: {ratings} Stars </p>
      {/* <div className='footer'>
        <h2>Add to Cart </h2>

      </div> */}
      <button onClick={() => handleAddToCart(props.product)} className='btn'>Add to Cart  <FontAwesomeIcon icon={faShoppingCart} /> </button>
    </div>
  );
};

export default Product;