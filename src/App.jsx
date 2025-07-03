import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyEmail from './pages/auth/VerifyEmail';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import MainLayout from './Layouts/TheMainLayout';
import ActivityStatusButton from './activity status/ActivityStatusButton';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            {/* temporary route */}
            <Route path="status" element={<ActivityStatusButton />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route index element={<Navigate replace to="auth-login" />} />
            <Route path="auth-login" element={<Login />} />
            <Route path="auth-register" element={<Register />} />
          </Route>
          <Route path="verify-email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
      {/* Toaster for notification */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
