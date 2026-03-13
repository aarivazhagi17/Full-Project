// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from "react-router-dom";

import './CartPage.css';

function CartPage() {
  const navigate = useNavigate();
  const { items, total } = useCart();

  const handleOrder = () => {

  if (items.length === 0) {
    alert("Cart is empty. Please add products!");
    return;
  }

  const user=localStorage.getItem("user");
  if(user){
    navigate("/order");
  }
  else{
    alert("Please Register!");
    navigate("/Contact");
  }

  alert("Please Register!");
  navigate("/Contact");
};

  return (
    <>
      <div className='container'>
        <h2 className='List' >Product List</h2>
        {items.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <>
            <div>
              {items.map((it) => (
                <CartItem key={it.id} item={it} />
              ))}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{float:"left", fontWeight:"bold", fontSize:"20px"}}>Total:</span>
              <span style={{float :"right", marginRight:"30px", fontWeight:"bold", fontSize:"18px"}}>${total}</span>
            </div>

            </div>
            
          </>
        )}
      </div>

      <button className='Order' onClick={handleOrder}>Place Order</button>
    </>
  );
}

export default CartPage;
