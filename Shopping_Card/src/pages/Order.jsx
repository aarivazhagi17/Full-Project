import { useState } from "react";
import "./Order.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order() {
  const [details, setDetails]=useState({
    name:"",
    phone:"",
    address:""
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const orderData = {
    customerDetails:details,
    items: cartItems,
    total: totalPrice,
    date: new Date().toLocaleString()
  };

  try {
    await axios.post("http://localhost:7000/orders",orderData);

    alert("Order Confirmed 🎉");
    localStorage.removeItem("cart");
    navigate("/OrdersPage");

  } catch (err) {
    console.log("ORDER ERROR:", err.response?.data);
    alert("Order failed ❌");
  }
};

  return (
    <div className="order-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <h2>Delivery Details
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setDetails({...details,name:e.target.value})}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter phone number"
          onChange={(e) => setDetails({...details,phone:e.target.value})}
          required
        />

        <input
          name="address"
          placeholder="Enter delivery address"
          onChange={(e) => setDetails({...details,address:e.target.value})}
          required
        />

        <button type="submit" className="submit-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Order;