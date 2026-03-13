import React, { useState } from "react";
import "./AdminOrders.css";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="admin-orders">
      <h2>All Orders</h2>

      <div className="orders-grid">
        {orders.map((order) => (
          <div key={order._id} className="order-card">
            <h3>{order.name}</h3>
            <p>User ID: {order.userId}</p>
            <p>Address:{order.address}</p>
            <p>Product: {order.product}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrders;