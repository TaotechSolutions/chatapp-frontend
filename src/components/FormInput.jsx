import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

export default function FormInput({
  label,
  type = "text",
  name,
  placeholder,
}) {
  const {register, errors, showPassword, togglePasswordVisibility } = useOutletContext();

  return (
    <div className="inputField">
      <label htmlFor={name} className="text-gray-700 text-[14px]">
        {label}
      </label>
      {type !== "password" ? (
        <input
          type={type}
          name={name}
          className="input text-[14px]"
          placeholder={placeholder}
          {...register(name, { required: `${name} is required!` })}
        />
      ) : (
        <div className="relative">
          <input
            type={showPassword ? "text" : type}
            name={name}
            className="input"
            placeholder={placeholder}
            {...register(name, { required: `${name} is required!` })}
          />
          <div
            role="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent hover:text-gray-700 cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      )}
      {errors?.[name] && <p className="error">{errors?.[name].message}</p>}
    </div>
  );
}
