import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import AuthForm from "../../components/authForm";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    reset();
  }

  return (
    <div>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          register={register}
          errors={errors}
          placeholder="Enter email"
        />

        <FormInput
          label="Username"
          type="text"
          name="username"
          register={register}
          errors={errors}
          placeholder="Enter username"
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          register={register}
          errors={errors}
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
