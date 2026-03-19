// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import './ProductCard.css';

function ProductCard({ item }) {
  const { addItem } = useCart();

  return (
    <>
    <div className='cart-item'>
        <img src={`http://localhost:7000/uploads/${item.image}`}  alt={item.name} /> <br />
      <h3 className='product'>{item.name}</h3>
      <p className='rate' style={{fontWeight:"bold"}}>Price: ${item.price}</p><br />
      <button className='buton' onClick={() => addItem(item)}>Add to cart</button>
    </div>
    </>
  );
}

export default ProductCard;
