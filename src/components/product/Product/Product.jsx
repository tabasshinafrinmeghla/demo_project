// import React from 'react';
import './Product.css'
const Product = (props) => {
  // console.log(props.product)
  const { img, name, seller, quantity, price ,ratings } = props.product

  return (
    <div className='product'>
      <img src={img} alt="" />
      <h1 className='title'>Ultraboost 22 Shoes</h1>
      {/* <h1 className='name'>Name: {name}</h1> */}
      <h2 className='price'>price: ${price}</h2>
      <p className='others'>Manufacturer: {seller} </p>
      <p className='others'>Rating: {ratings} Stars </p>
      <div className='footer'>
        <h2>Add to Cart </h2>

      </div>
    </div>
  );
};

export default Product;