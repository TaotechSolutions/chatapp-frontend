import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import AuthForm from '../../components/AuthForm';
import { useNavigate, useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Register() {
  const { handleSubmit, reset } = useOutletContext();
  const navigate = useNavigate();

  function onRegister(data) {
    // Add emailVerified status to user data
    const userData = {
      ...data,
      emailVerified: false,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
    reset();
    toast.success('Registration Successful! Please verify your email.');
    navigate('/verify-email');
  }

  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onRegister)}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter email"
        />

        <FormInput
          label="Username"
          name="username"
          placeholder="Enter username"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
        />

        <div className="flex items-center gap-2">
          <p className="text-gray-600">
            By registering you agree to the
            <span className="text-green-500">TaoChat</span> Terms of Use
          </p>
        </div>
        <Button>Register</Button>
      </AuthForm>
    </div>
  );
}
