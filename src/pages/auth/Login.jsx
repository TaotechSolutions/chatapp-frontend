import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";
import AuthForm from "../../components/authForm";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <AuthForm onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="username"
          register={register}
          errors={errors}
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
            register={register}
            errors={errors}
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
            className="text-gray-600 text-sm basis-2/3 font-light"
          >
            Remember me
          </label>
        </div>
        <Button>Login</Button>
      </AuthForm>
    </div>
  );
}
