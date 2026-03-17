import React, { useState, useEffect } from "react";
import "./AdminOrders.css";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  },[]);
  useEffect(() => {
    axios.get("http://localhost:7000/orders")
      .then(res => {
        setOrders(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    axios.put("http://localhost:7000/orders:status")
      .then(res => { setOrders(res.data) }
      )
  }, []);

  const updateStatus = (orderId, newStatus) => {
    axios.put(`http://localhost:7000/orders/${orderId}`, { status: newStatus })
      .then(res => {
        setOrders(prevOrders => prevOrders.map(order => order._id === orderId ? { ...order, status: newStatus } : order));
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="admin-orders">
      <h2>All Orders</h2>

      <div className="orders-grid" data-aos="fade-up">
        {orders.length === 0 && (<p>No orders yet</p>)}
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <p>Name: {order.name}</p>
            <p>Phone: {order.phone}</p>
            <p>Address: {order.address}</p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

            {/* PRoduct LiSt mistake iruku show agala*/}
            <div className="product-list">
              <h4>Products : </h4>

              {order.items.map((item) => (
                <div key={item._id} className="product-item">

                  <img src={`http://localhost:7000/uploads/${item.image}`} alt={item.name} width="40" />

                  <span>{item.name}</span>

                  <span>${item.price}</span>

                </div>
              ))}
            </div>
            <h3>Total: ${order.total}</h3>

            <p>
              Status:
              <span className={`status ${order.status === "pending" ? "Red" :
                  order.status === "Accepted" ? "Green" :
                    order.status === "Preparing" ? "Orange" :
                      order.status === "Delivered" ? "Blue" :
                        "Gray"
                }`}>
                {order.status}
              </span>
            </p>

            <div className="btn-container">

              {order.status === "Pending" && (
                <>
                  <button
                    className="success"
                    onClick={() => updateStatus(order._id, "Accepted")}
                  >
                    Accept
                  </button>

                  <button
                    className="danger"
                    onClick={() => updateStatus(order._id, "Rejected")}
                  >
                    Reject
                  </button>
                </>
              )}

              {order.status === "Accepted" && (
                <button
                  className="primary"
                  onClick={() => updateStatus(order._id, "Preparing")}
                >
                  Mark Preparing
                </button>
              )}

              {order.status === "Preparing" && (
                <button
                  className="dark"
                  onClick={() => updateStatus(order._id, "Delivered")}
                >
                  Mark Delivered
                </button>
              )}

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrders;