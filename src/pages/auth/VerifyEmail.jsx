import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import toast from 'react-hot-toast';

export default function VerifyEmail() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Redirect to login if no user found
    if (!user) {
      navigate('/auth-login');
    }
  }, [navigate, user]);

  const handleResendEmail = async () => {
    try {
      // TODO: Implement actual API call
      // await fetch('/auth/resend-verification', {
      //   method: 'POST',
      //   body: JSON.stringify({ email: user.email })
      // });
      toast.success('Verification email sent!');
    } catch {
      toast.error('Failed to send verification email');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
        <p className="text-gray-600 mb-6 ">
          Please verify your email address{' '}
          <span className="font-bold">{user?.email} </span>to continue using
          TaoChat. Check your inbox for the verification link.
        </p>
        <Button onClick={handleResendEmail}>Resend Verification Email</Button>
      </div>
    </div>
  );
}
