import { useState } from "react";
import "./Order.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Order Confirmed 🎉");

    const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  const orderData = {
    name,
    phone,
    address,
  };

  await axios.post("http://localhost:7000/api/orders", orderData);

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    items: cartItems,
    total: totalPrice,
    date: new Date().toLocaleString()
  };

  existingOrders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(existingOrders));

  localStorage.removeItem("cart"); // optional

  alert("Order Placed Successfully!");

  navigate("/OrdersPage");
};
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          name="address"
          placeholder="Enter delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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