import React, { useState } from "react";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaMessage, FaEye, FaEyeSlash } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import authImage from "../assets/auth-img.png";

const AuthRegister = () => {
  const [login, setLogin] = useState(true);
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

  const isFormValid = () => {
    if (login) {
      return formData.username.trim() !== "" && formData.password.trim() !== "";
    }
    return (
      formData.email.trim() !== "" &&
      formData.username.trim() !== "" &&
      formData.password.trim() !== ""
    );
  };

  const toggleMode = () => {
    setLogin(!login);
  };



  return (
    <section className="grid grid-cols-1 md:grid-cols-4 relative">
      <div className="flex items-center justify-center md:justify-start h-16 gap-4 px-8 mt-12">
        <BiSolidMessageAltDetail className="text-white text-3xl" />
        <h2 className="text-white text-3xl font-light ml-6">Doot</h2>
      </div>

      <div className="bg-white rounded-xl col-span-3 my-6 mx-8 min-h-screen py-8">
        <div className="w-[90%] lg:w-[40%] mx-auto pt-14">
          {login ? (
            <>
              <h1 className="text-center text-[calc(1.28906rem_+_.46875vw)] text-gray-800 pb-1">
                Welcome Back!
              </h1>
              <p className="text-center text-[15px] text-gray-800">
                Sign in to continue to Doot
              </p>
            </>
          ) : (
            <>
              <h1 className="text-center text-[calc(1.28906rem_+_.46875vw)] text-gray-800 pb-1">
                Register Account
              </h1>
              <p className="text-center text-[15px] text-gray-800">
                Get your free Doot account now
              </p>
            </>
          )}
          

          <div className="flex items-center justify-center gap-4 px-4 md:px-8 my-6">
            <hr className="w-20 md:w-28 border-gray-300" />
            <span className="text-gray-500 text-sm whitespace-nowrap">
              Sign in with
            </span>
            <hr className="w-20 md:w-28 border-gray-300" />
          </div>

          <div className="grid grid-cols-3 gap-4 px-8 mt-6">
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

          <div className="text-center mt-16 text-gray-600 ">
            {login ? (
              <p>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={toggleMode}
                  className="text-green-500 hover:underline"
                >
                  Register
                </a>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  onClick={toggleMode}
                  className="text-green-500 hover:underline"
                >
                  Login
                </a>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="invisible md:visible absolute bottom-0 left-[22%] transform -translate-x-1/2 w-[400px] lg:w-[500px] xl:w-[600px] z-10">
        <img
          src={authImage}
          alt="Authentication"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AuthRegister;
