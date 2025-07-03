import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyEmail from './pages/auth/VerifyEmail';
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import useSessionCheck from "./hooks/useSessionCheck";
import { useBgImages } from './(settings)/hooks/useBgImages';
import { useChangetheme } from './(settings)/hooks/useChangetheme ';
import MainLayout from './TheMainLayout';
import ActivityStatusButton from './activity status/ActivityStatusButton';

function App() {
  useSessionCheck();
  const { isAuthenticated } = useSelector((state) => state.auth);
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
            {/* temporary route */}
            <Route path= "status" element={<ActivityStatusButton/>}/>
          </Route>
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
          <Route path="verify-email" element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>
      {/* Toaster for notification */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
