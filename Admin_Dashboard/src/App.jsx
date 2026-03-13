import React from 'react'
import { Routes, Route, } from "react-router-dom";
import AdminLogin from "./admin/Pages/AdminLogin";
import AdminLayout from "./admin/Pages/AdminLayout";
import AdminProducts from "./admin/Pages/AdminProducts";
import AdminOrders from "./admin/Pages/AdminOrders";
import ProtectedRoute from './admin/Pages/ProtectedRoute';


export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<AdminLogin />} />

        <Route
          path="/admin" element={
            <ProtectedRoute>
            <AdminLayout/>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

      </Routes>

    </div>
  )
}
