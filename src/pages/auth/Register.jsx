import React from "react";

export default function Register() {
  return (
    <div>
      <form className="flex flex-col gap-4 mt-6 px-8 pb-8">
        {!login && (
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter Email"
            />
          </div>
        )}
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
          {login ? (
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="accent-green-800 text-white basis-[15px]"
            />
          ) : null}
          {login ? (
            <label
              htmlFor="remember"
              className="text-gray-600 text-sm basis-2/3 font-light"
            >
              Remember me
            </label>
          ) : (
            <p className="text-gray-600">
              By registering you agree to the Doot Terms of Use
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`text-white rounded px-4 py-2 mt-2 transition ${
            isFormValid()
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {login ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}
