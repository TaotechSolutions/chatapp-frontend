import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserFromCookie } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";

function AuthCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookieCheckAttempts, setCookieCheckAttempts] = useState(0);
  const maxAttempts = 10;

  useEffect(() => {
    const checkForCookieAndProceed = () => {
      console.log(`Cookie check attempt ${cookieCheckAttempts + 1}`);
      console.log('All cookies:', document.cookie);
      
      // Check if our specific auth cookie exists
      const hasAuthCookie = document.cookie
        .split(';')
        .some(cookie => cookie.trim().startsWith('auth_token='));
      
      console.log('Has auth_token cookie:', hasAuthCookie);

      if (hasAuthCookie) {
        console.log('Cookie found! Proceeding to get user data...');
        
        // Cookie exists, now try to get user data
        dispatch(setUserFromCookie())
          .unwrap()
          .then(() => {
            console.log('User data retrieved successfully');
            navigate('/dashboard');
          })
          .catch((error) => {
            console.error('Failed to get user data:', error);
            navigate('/auth-login');
          });
      } else if (cookieCheckAttempts < maxAttempts) {
        // Cookie not found yet, try again
        console.log('Cookie not found, retrying...');
        setCookieCheckAttempts(prev => prev + 1);
        
        // Exponential backoff: 100ms, 200ms, 400ms, etc.
        const delay = Math.min(100 * Math.pow(2, cookieCheckAttempts), 2000);
        setTimeout(checkForCookieAndProceed, delay);
      } else {
        // Max attempts reached, redirect to login
        console.error('Cookie not found after maximum attempts');
        navigate('/auth-login?error=cookie_not_found');
      }
    };

    // Start checking for cookie
    checkForCookieAndProceed();
  }, [dispatch, navigate, cookieCheckAttempts]);


   return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <p>Authenticating...</p>
      <p>Checking for authentication cookie... (Attempt {cookieCheckAttempts + 1}/{maxAttempts})</p>
    </div>
  );
}

export default AuthCallback;
