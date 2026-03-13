import React from "react";
import {Outlet} from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";

 function AdminLayout() {
  return (
    <div>
      <AdminNavbar />

      <div style={{ display: "flex" }}>
        <AdminSidebar />

        <div style={{ padding: "20px", width: "100%" }}>
        <Outlet/>
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;