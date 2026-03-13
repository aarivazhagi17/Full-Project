import React from "react";
import { Link } from "react-router-dom";

 function AdminSidebar() {
  return (
    <div
      style={{
        width: "230px",
        background: "#f7f3f3",
        fontSize:"20px",
        height: "100vh",
        padding: "12px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>

        <li style={{ margin: "15px 0" }}>
          <Link to="/admin">Products</Link>
        </li>

        <li style={{ margin: "15px 0" }}>
          <Link to="/admin/orders">Orders</Link>
        </li>

      </ul>
    </div>
  );
}
export default AdminSidebar;