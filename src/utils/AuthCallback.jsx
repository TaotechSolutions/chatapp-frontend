import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserFromCookie } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';

function AuthCallback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setUserFromCookie())
      .unwrap()
      .then(() => navigate('/dashboard'))
      .catch(() => navigate('/auth-login'));
  }, [dispatch, navigate]);

  return <p>Authenticating...</p>;
}

export default AuthCallback;
