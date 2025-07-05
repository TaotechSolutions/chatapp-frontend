import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../features/auth/authSlice';
import authApi from '../api/authApi';

export default function useSessionCheck() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await authApi.get('/user', {
          _skipAuthModeFallback: true, // 👈 Do NOT trigger token fallback on 401
        });
        console.log('session check res', res);
        dispatch(setUser(res.data.data));
      } catch (err) {
        console.log('An error occurred checking session', err);
        dispatch(clearUser());
        // localStorage.removeItem("user");
      }
    };

    checkSession();
  }, [dispatch]);
}
