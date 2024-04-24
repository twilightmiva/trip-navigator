


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { auth } from "../firebase";

function Sign() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleRegistration(e) {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    // Validation
    if (
      formData.fullName === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setErrorMessage("Kindly fill all the fields");
      return; // Stop further execution
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("The passwords do not match");
      return; // Stop further execution
    }

    // Create user
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered successfully:", user);
      })
      .catch((error) => {
        setErrorMessage("Registration failed. Please try again.");
        console.error("Registration error:", error);
      });
  }

  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 h-[100vh] ">
          <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 p-[5em] bg-[linear-gradient(90deg,#000000,#737373)]">
            <input
              type="text"
              placeholder="Your name"
              className="border-2 py-2 px-[3em]  m-[1em]   "
              name="fullName"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Email address"
              className="border-2 py-2 px-[3em]  m-[1em]   "
              name="email"
              onChange={handleChange}
            />

            <div className="flex justify-center items-center relative ">
              <input
                placeholder="Password"
                className="border-2 py-2 px-[3em]  m-[1em]   "
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <div
                className="flex  items-center text-[20px] cursor-pointer pr-4 absolute right-10"
                onClick={changeThePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </div>
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Confirm Password"
                className=" border-2 py-2 px-[3em]  m-[1em]    "
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>

            <p className="text-red-400">{errorMessage}</p>
          </div>
          <button
            className="border-2 py-2 px-[3em] border-#45C9A1  cursor-pointer bg-[linear-gradient(90deg,#000000,#737373)] text-white w-[92%] "
            onClick={handleRegistration}
          >
            Sign up
          </button>
          <h1 className="p-[2em]">
            Already have an account?
            <Link to="/Logins">
              <span className="underline cursor-pointer">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
