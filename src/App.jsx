import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/authLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate replace to="auth-login" />} />
          <Route path="auth-login" element={<Login />} />
          <Route path="auth-register" element={<Register />} />
        </Route>
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
