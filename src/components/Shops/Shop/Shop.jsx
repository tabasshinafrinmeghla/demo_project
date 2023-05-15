// import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../product/Product/Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  return (

    <div className='shop-container'>
      <div className="products_container">
        {/* <h3>products coming here:{products.length} </h3> */}
        {
          products.map(product => <Product key={product.id}
            product={product}
          ></Product>)
        }
      </div>
      <div className="card_container">
        <h3>Order Summary</h3>

      </div>
    </div>
  );
};

export default Shop;