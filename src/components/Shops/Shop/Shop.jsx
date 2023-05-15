// import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../product/Product/Product';
import Cart from '../../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    // cart.push(product);
    // {amra ager a cart a add korte parbo na }

    //  {alada alada cart er jonno}

    const newCart = [...cart,product];
    setCart(newCart);



  }

  return (

    <div className='shop-container'>
      <div className="products_container">
        {/* <h3>products coming here:{products.length} </h3> */}
        {
          products.map(product => <Product key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>)
        }
      </div>
      <div className="card_container">
        <Cart cart={cart}></Cart>

      </div>
    </div>
  );
};

export default Shop;