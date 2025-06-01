import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((show) => !show);
  };

  return (
    <div>
      <form className="flex flex-col gap-4 mt-6 px-8 pb-8">
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter Username"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <a href="#" className="text-green-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter Password"
            />
            <div
              role="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 bg-transparent hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
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
          <p className="text-gray-600">
            By registering you agree to the Doot Terms of Use
          </p>
        </div>
        <button
          type="submit"
        //   disabled={!isFormValid()   } // ${isFormValid() ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`
          className={`text-white rounded px-4 py-2 mt-2 transition `} 
        >
          Login
        </button>
      </form>
    </div>
  );
}
