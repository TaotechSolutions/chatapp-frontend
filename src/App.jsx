import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyEmail from './pages/auth/VerifyEmail';
import { Toaster } from 'react-hot-toast';
import MainLayout from './Layouts/TheMainLayout';
import useSessionCheck from './hooks/useSessionCheck';
import ProtectedRoute from './contexts/ProtectedRoute';
// import ActivityStatusButton from './activity status/ActivityStatusButton';
{
  /* <Route path="status" element={<ActivityStatusButton />} /> */
}

function App() {
  useSessionCheck();
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

          {/* isAuthenticated ? <Navigate to="/dashboard" /> : */}
          {/*  isAuthenticated ? <Navigate to="/dashboard" /> :  */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* Toaster for notification */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
