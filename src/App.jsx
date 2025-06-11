import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Navigate replace to="auth-login" />} />
            <Route path="auth-login" element={<Login />} />
            <Route path="auth-register" element={<Register />} />
          </Route>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="auth-login" />} />
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" reverseOrder={false} />
      </>
  );
}
export default App;
