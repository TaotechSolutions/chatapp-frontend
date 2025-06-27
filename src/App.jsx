import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './Layouts/AuthLayout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import VerifyEmail from './pages/auth/VerifyEmail';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
// import MainLayout from './mainLayout';
// import MainLayout from './mainLayout';
import { useBgImages } from './(settings)/hooks/useBgImages';
import { useChangetheme } from './(settings)/hooks/useChangetheme ';
import MainLayout from './TheMainLayout';

function App() {
  const { bgImages, setbgImages, bgimage } = useBgImages();
  const { changeTheme, setchangeTheme, colours } = useChangetheme();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout
                bgimage={bgimage}
                setbgImages={setbgImages}
                bgImages={bgImages}
                setchangeTheme={setchangeTheme}
                colours={colours}
                changeTheme={changeTheme}
              />
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route />
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
