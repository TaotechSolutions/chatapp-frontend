import { useEffect, useState } from "react";
import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { loginUser } from "../../features/auth/authActions";
import toast from "react-hot-toast";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error, loading } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);

   // Sync with localStorage on first load
  useEffect(() => {
    const storedRememberMe = localStorage.getItem("rememberMe");
    setRememberMe(storedRememberMe === "true");
  }, []);

  // Update localStorage whenever rememberMe changes
  const handleRememberMeChange = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);
    localStorage.setItem("rememberMe", isChecked.toString());
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login successful!");
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  function onLogin(data) {
    if (!data.email || !data.password) {
      return toast.error("Please fill in all fields");
    }

    dispatch(
      loginUser({
        email: data.email,
        password: data.password,
        rememberMe
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login successful!");
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err || "Login failed");
      });

    }

  return (
    <div>
      <AuthForm onSubmit={onLogin}>
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
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label
            htmlFor="remember"
            className="text-gray-600 text-sm font-light"
          >
            Remember me
          </label>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </AuthForm>
    </div>
  );
}
