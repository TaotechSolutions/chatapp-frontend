import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import useSessionCheck from "./hooks/useSessionCheck";

function App() {
  useSessionCheck();
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index element={<Navigate replace to="auth-login" />} />

            <Route
              path="auth-login"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Login />
              }
            />

            <Route
              path="auth-register"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Register />
              }
            />
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* Toaster for notification */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
