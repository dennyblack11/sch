import React, { useState, useEffect } from "react";
import { BookOpen, CheckCircle } from "lucide-react";
import pic from "../assets/school-admin.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoHandLeft, IoHandRight } from "react-icons/io5";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [allFilled, setAllFilled] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    const filled = form.email !== "" && form.password !== "";
    setAllFilled(filled);
    if (filled) {
      setTimeout(() => setShowSignin(true), 1000);
    } else {
      setShowSignin(false);
    }
  }, [form]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setHasTyped(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsLoading(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (hasTyped) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setHasTyped(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-white p-4">
      <div className="bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col lg:flex-row w-full max-w-5xl">
        <div className="w-full lg:w-1/2 p-8 space-y-6">
          <div className="flex flex-col items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-black my-5">Sign in</h1>
            <p className="text-gray-500 text-md">
              Welcome to{" "}
              <span className="font-bold text-blue-600">EduManage</span> – Let’s
              create account
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to={"/login-teacher"}>
              <button className="flex items-center justify-center w-full border rounded-full py-2 px-4 text-md shadow-sm hover:bg-gray-50 gap-1">
                <GiTeacher size={20} className="text-blue-600" /> Switch to
                Teachers Login
              </button>
            </Link>
            <Link to={"/login-student"}>
              <button className="flex items-center justify-center w-full border rounded-full py-2 px-4 text-md shadow-sm hover:bg-gray-50 gap-1">
                <PiStudentFill size={20} className="text-blue-600" />
                Switch to Student Login
              </button>
            </Link>
          </div>

          <form className="space-y-4">
            {[
              {
                label: "E-mail",
                name: "email",
                placeholder: "PoilsonJ@gmail.com",
              },
              {
                label: "Password",
                name: "password",
                placeholder: "••••••••",
                type: "password",
              },
            ].map(({ label, name, placeholder, type = "text" }, idx) => (
              <div key={idx}>
                <label className="block text-md font-medium text-gray-700">
                  {label}
                </label>
                <div className="relative mt-1">
                  <input
                    type={type}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2 rounded-xl pr-10 focus:outline-none border
    ${isFocused ? "animate-border-rotate border" : "border-blue-300"}
    ${isLoading ? "loading-input" : "bg-white"}`}
                  />

                  {(form as any)[name] && (
                    <CheckCircle className="text-blue-600 absolute right-3 top-2.5 w-5 h-5" />
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-center items-center space-x-2 pt-6">
              <motion.span
                className="text-2xl"
                animate={allFilled ? { x: 10 } : { x: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IoHandLeft size={25} className="rotate-45 text-yellow-500" />
              </motion.span>
              <motion.span
                className={`text-2xl ${
                  allFilled ? "z-30" : "opacity-0"
                } transition-all duration-300`}
                animate={allFilled ? { x: -15 } : { x: 400, y: -300 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <IoHandRight size={25} className="-rotate-90 text-yellow-500" />
              </motion.span>
            </div>

            <div className="pt-6">
              <motion.button
                type="submit"
                disabled={!allFilled}
                className={`w-full py-2 rounded-xl transition-all duration-300 ${
                  allFilled
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-100 text-white cursor-not-allowed hover:bg-blue-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Sign in
              </motion.button>
            </div>
          </form>
          <div>
            Don't have an account
            <Link to={"/register"}>
              <span className="text-blue-900 ml-1 font-bold hover:underline underline-blue-900 cursor-pointer">
                Register here
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 hidden bg-blue-50 md:flex items-center justify-center relative">
          <img
            src={pic}
            alt="Illustration"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 rounded-xl p-4 shadow-md max-w-xs">
            <h3 className="font-bold text-lg">
              Find Your <span className="inline-block">Inner 📘 Balance</span>
            </h3>
            <p className="text-md text-gray-600 mt-1">
              Helping you Streamline Your school Task, harmony, and educational
              growth. Together, we create lasting change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
