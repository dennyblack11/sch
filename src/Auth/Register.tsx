// import { Link } from "react-router-dom";
// import pic from "../assets/school.png";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { BookOpen } from "lucide-react";

// const Register = () => {
//   return (
//     <div className=" w-full bg-blue-900 h-screen flex justify-center items-center">
//       <div className=" w-[80%] bg-white h-[90%] rounded-3xl px-8 space-x-4 py-8 flex">
//         <div className="w-1/2 bg-blue-50 h-full rounded-3xl py-8 px-3">
//           <div className=" flex flex-col items-center">
//             <div>
//               <BookOpen className="h-8 w-8 text-blue-600" />
//             </div>
//             <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
//             <p className="text-md text-gray-400 mb-6">Welcome to EduManage!!</p>
//           </div>

//           {/* Social Buttons */}
//           <div className="flex gap-4 mb-6 justify-center">
//             <button className="flex items-center gap-2 border-2 px-4 py-2 rounded-2xl w-[210px] text-black">
//               <FcGoogle size={25} />
//               Sign in with Google
//             </button>
//             <button className="flex items-center gap-2 border-2 px-4 py-2 rounded-2xl w-[210px] text-black">
//               <FaApple size={25} />
//               Sign in with Apple
//             </button>
//           </div>

//           <div className="text-center text-gray-500 text-md mb-6">
//             Or with email
//           </div>

//           {/* Email/Password */}
//           <form className="flex flex-col items-center space-y-5">
//             <div className="mb-4">
//               <label className="block text-md mb-2">Email address</label>
//               <input
//                 type="email"
//                 placeholder="hello@example.com"
//                 className="w-[435px] px-4 py-2 rounded-2xl bg-blue-200 text-white border border-gray-700"
//               />
//             </div>
//             {/* <div className="mb-2">
//               <label className="block text-md mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="12345678"
//                 className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700"
//               />
//             </div>
//             <div className="text-right text-md text-orange-400 mb-6 cursor-pointer">
//               Forgot Password ?
//             </div> */}

//             <button
//               type="submit"
//               className="w-[435px] bg-blue-900 py-2 rounded-2xl text-white font-semibold"
//             >
//               Register
//             </button>
//             <div className="flex gap-1 justify-start">
//               <input type="checkbox" />
//               <p className="text-md">I agree to the <span className="font-bold">Privacy & Policy </span>
//               </p>
//             </div>
//           </form>
//           <div className="mt-4 text-center text-md text-gray-400">
//             Already have an account?{" "}
//             <Link to={"/login"}>
//               <span className="text-orange-400 cursor-pointer">Sign in</span>
//             </Link>
//           </div>

//           <div>

//           </div>
//         </div>
//         <div className="w-1/2 h-full rounded-3xl overflow-hidden shadow-md hidden md:block">
//           <img
//             src={pic}
//             alt=""
//             className="w-full h-full"
//             width={1000}
//             height={1000}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BookOpen, CheckCircle } from "lucide-react";
import pic from "../assets/school-admin2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoHandLeft, IoHandRight } from "react-icons/io5";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agree, setAgree] = useState(false);

  const filled = form.email !== "";
  const [allFilled, setAllFilled] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    const filled = form.email !== "" && agree;
    setAllFilled(filled);

    if (filled) {
      setTimeout(() => setShowSignup(true), 1000);
    } else {
      setShowSignup(false);
    }
  }, [form.email, agree]);

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
        <div className="w-full lg:w-1/2 p-10 space-y-6">
          <div className="flex flex-col items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-black my-5">Sign up</h1>
            <p className="text-gray-500 text-md">
              Welcome to <span className="text-blue-600">EduManage</span> –
              Let’s create account
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="flex items-center justify-center w-full border rounded-full py-2 px-4 text-md shadow-sm hover:bg-gray-50">
              <FcGoogle className="mr-2" /> Sign up with Google
            </button>
            <button className="flex items-center justify-center w-full border rounded-full py-2 px-4 text-md shadow-sm hover:bg-gray-50">
              <FaApple className="mr-2" /> Sign up with Apple
            </button>
          </div>

          <form className="space-y-4">
            {[
              {
                label: "E-mail",
                type: "email",
                name: "email",
                placeholder: "PoilsonJ@gmail.com",
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
            <div className="flex items-center space-x-2 text-md">
              <input
                id="agree"
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="border-gray-300 rounded"
              />
              <label htmlFor="agree">
                I agree to the{" "}
                <a href="#" className="underline">
                  Privacy&Policy
                </a>
              </label>
            </div>

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
              <Link to={"/login"}>
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
                  Register
                </motion.button>
              </Link>
            </div>
          </form>
          <div>
            Already have an account
            <Link to={"/login"}>
              <span className="text-blue-900 ml-1 font-bold hover:underline underline-blue-900 cursor-pointer">
                Login here
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
export default Register;
