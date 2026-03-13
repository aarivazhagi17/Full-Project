  import React from "react";

  function OrdersPage() {

    const orders = JSON.parse(localStorage.getItem("order")) || [];

    return (
      <div style={{padding:"20px"}}>
        <h2>My Orders</h2>

        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>
              
              <h4>Order {index + 1}</h4>
              <p>Date: {order.date}</p>

              {order.items.map((item) => (
                <p key={item.id}>
                  {item.name} - ${item.price}
                </p>
              ))}

              <strong>Total: ${order.total}</strong>
              

            </div>
          ))
        )}

      </div>
    );
  }
  export default OrdersPage;