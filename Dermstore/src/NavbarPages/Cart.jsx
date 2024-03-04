/*export default function Cart(){
    return(
        <>
        Cart Section
        </>
    )
}*/


/*import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
*/



const Cart = ({ cartItems }) => (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
            return(
          <li key={index}>{item.name}
          <img src={item.img}/>
          </li>
            )
          
        })}
      </ul>
    </div>
  );
  export default Cart;
