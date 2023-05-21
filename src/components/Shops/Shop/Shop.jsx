/* eslint-disable no-undef */
// import React from 'react';
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../../product/Product/Product';
import Cart from '../../Cart/Cart';
import { addToDb, getShoppingCart,} from '../../../../ema-john-resources-main/utilities/fakedb';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

 useEffect( ()=>{
  
  const storedCart = getShoppingCart;
  // console.log(storedCart);

  for(const id in storedCart){
    const saveProduct = products.find(product => product.id ===id)
    console.log(saveProduct);

    const quantity =storedCart[id];
    addedProduct.quantity=quantity
    console.log(addedProduct);

  }
 
 },[products])
 
//  console.log(products)
useEffect(()=>{
  const storedCart =getShoppingCart();
  const savedCart = [];
  for(const id in storedCart){
    const addedProduct = products.find(product => product.id ===id)
    if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity=quantity;
      savedCart.push(addedProduct);
    }
    //  console.log('added Product',addedProduct);
  }
  setCart(savedCart);
}, [products])

  const handleAddToCart = (product) => {
    // cart.push(product);
    // {amra ager a cart a add korte parbo na }

    //  {alada alada cart er jonno}

    const newCart = [...cart, product];
    setCart(newCart);

    addToDb(product.id)

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