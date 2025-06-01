import React, { useState } from "react";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaMessage } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const location = useLocation();
  const isLogin = location.pathname.includes("auth-login");

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
    <section className="flex flex-col md:flex-row relative">
      <div className="flex-1 text-center self-center md:self-start gap-4 p-10 text-white">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <span className="text-2xl">
            <BiSolidMessageAltDetail />
          </span>
          <span className="text-2xl font-semibold">TaoChat</span>
        </div>
        <p className="text-gray-300 font-normal text-[14px]">A Community chat application</p>
      </div>

      <div className="bg-white rounded-xl md:w-[75%] m-6 min-h-screen flex justify-center">
        <div className=" w-[90%] sm:w-2/3 md:w-2/4 lg:w-2/6 py-14">
          <h1 className="text-center text-[calc(1.28906rem_+_.46875vw)] text-gray-800 !mb-2">
            {isLogin ? "Welcome Back!" : "Register Account"}
          </h1>
          <p className="text-center text-[14px] text-gray-800">
            {isLogin
              ? "Sign in to continue to Doot"
              : "Get your free Doot account now"}
          </p>
          <div>
            <Outlet
              context={{
                formData,
                showPassword,
                handleInputChange,
                togglePasswordVisibility,
              }}
            />
          </div>
          <div className="flex items-center justify-center gap-4 my-2">
            <hr className="w-full md:w-28 border-gray-300" />
            <span className="text-gray-500 text-sm whitespace-nowrap">
              {isLogin ? "Sign in with" : "Sign up using"}
            </span>
            <hr className="w-full md:w-28 border-gray-300" />
          </div>

          <div className="grid grid-cols-3 gap-4 px-8 mt-4">
            <a
              href="http://"
              className="flex items-center justify-center p-3 bg-gray-400 hover:bg-gray-450 rounded-lg transition-colors duration-300 group"
            >
              <FaFacebook className="text-xl text-facebook-blue group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="http://"
              className="flex items-center justify-center p-3 bg-gray-400 hover:bg-gray-450 rounded-lg transition-colors duration-300 group"
            >
              <BsTwitterX className="text-xl text-twitter-blue group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href="http://"
              className="flex items-center justify-center p-3 bg-gray-400 hover:bg-gray-450 rounded-lg transition-colors duration-300 group"
            >
              <GrGoogle className="text-xl text-google-red group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>

          <div className="text-center mt-10 text-gray-600 ">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <Link
                  to="/auth-register"
                  className="text-green-500 hover:underline"
                >
                  Register
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <Link
                  to="/auth-login"
                  className="text-green-500 hover:underline"
                >
                  Login
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="invisible md:visible absolute bottom-0 left-[22%] transform -translate-x-1/2 w-[400px] lg:w-[500px] xl:w-[600px] z-10">
        <img
          src="./auth-img.png"
          alt="Authentication"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default AuthLayout;
