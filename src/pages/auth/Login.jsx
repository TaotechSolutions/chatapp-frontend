import AuthForm from "../../components/AuthForm";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const { handleSubmit } = useOutletContext();
  const navigate = useNavigate();

  function onLogin(data) {
    let currentUser = JSON.parse(localStorage.getItem("user")) || [];
    console.log(currentUser);
    console.log(data.username === currentUser.username);

    if (!data.username || !data.password) {
      return;
    }

    if (
      (data.username === currentUser.username ||
        data.username === currentUser.email) &&
      data.password === currentUser.password
    ) {
      toast.success("Login successful!");
      navigate("/dashboard");
      return;
    }

    toast("Invalid username or password", {
      icon: "😏",
      duration: 4000,
      style: {
        backgroundColor: "red",
        color: "white",
        padding: "10px",
      },
    });
  }

  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onLogin)}>
        <FormInput
          label="Username"
          name="username"
          placeholder="Enter Username"
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
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="accent-green-800 text-white basis-[15px]"
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
