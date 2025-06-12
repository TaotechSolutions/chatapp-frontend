import AuthForm from '../../components/AuthForm';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import { useNavigate, useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ADMIN_CREDENTIALS } from '../../utils/admins';

export default function Login() {
  const { handleSubmit } = useOutletContext();
  const navigate = useNavigate();

  function onLogin(data) {
    let currentUser = JSON.parse(localStorage.getItem('user')) || [];
    let admin = ADMIN_CREDENTIALS.some(
      info => data.email === info.email && data.password === info.password,
    );

    if (!data.email || !data.password) {
      return;
    }

    if (admin) {
      toast.success('Login as admin successful!');
      console.log('Logged in as admin');
      navigate('/dashboard');
      return;
    }

    if (
      data.email === currentUser.email &&
      data.password === currentUser.password
    ) {
      // Check email verification status
      if (!currentUser.emailVerified) {
        toast.error('Please verify your email first');
        navigate('/verify-email');
        console.log('Verify mail');
        return;
      }

      toast.success('Login successful!');
      console.log('logged in as user');
      navigate('/dashboard');
      return;
    }

    toast('Invalid username or password', {
      icon: '😏',
      duration: 4000,
      style: {
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
      },
    });
  }

  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onLogin)}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <div className="relative">
          <a
            href="#"
            className="absolute right-0 top-0.5 text-green-500 text-sm hover:underline"
          >
            Forgot password?
          </a>
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="accent-green-800 text-white"
          />
          <label
            htmlFor="remember"
            className="text-gray-600 text-sm font-light"
          >
            Remember me
          </label>
        </div>
        <Button>Login</Button>
      </AuthForm>
    </div>
  );
}
