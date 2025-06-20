import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyEmail from './pages/auth/VerifyEmail';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route index element={<Navigate replace to="auth-login" />} />
            <Route path="auth-login" element={<Login />} />
            <Route path="auth-register" element={<Register />} />
          </Route>
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* Toaster for notification */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
