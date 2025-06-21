import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserFromCookie } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Add a small delay to ensure cookie is set
    const timer = setTimeout(() => {
      dispatch(setUserFromCookie())
        .unwrap()
        .then(() => navigate("/dashboard"))
        .catch(() => navigate("/auth-login"));
    }, 100); // 100ms delay

    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return <p>Authenticating...</p>;
}

export default AuthCallback;
