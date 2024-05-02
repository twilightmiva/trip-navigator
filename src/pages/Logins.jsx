import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase";

function Logins() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleRegistration(e) {
    e.preventDefault();

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setErrorMessage("Kindly fill all the Fields");
    }
  }

  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }

  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log("User login successfully:", user);
      navigate("/addtrip");
    })
    .catch((error) => {
      setErrorMessage("login failed. Please try again.");
      console.error("Registration error:", error);
    });

 
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 h-[100vh] ">
          <div className="flex flex-col justify-center items-center border-gray rounded-[30px] shadow-lg  border-2 p-[5em] bg-[linear-gradient(90deg,#000000,#737373)]">
            <h1 className="text-[2em] text-[white] font-extrabold">
              Login to your Account
            </h1>
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
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Passsword"
                className=" border-2 py-2 px-[3em]  m-[1em]    "
                name="confirmPassword"
                onChange={handleChange}
              />
            </div>
            <p className="text-red-400">{errorMessage}</p>
            <button
              className="border-2 py-2 px-[3em] border-#45C9A1  cursor-pointer bg-[linear-gradient(90deg,#000000,#737373)] text-white w-[92%] "
              onClick={handleRegistration}
            >
              Log-In
            </button>
            {/* <h1>hey</h1> */}
          </div>
          <h1 className="p-[2em]">
            Already have an account?
            <Link to="/Logins">
              <span className="underline cursor-pointer">Login</span>
            </Link>
          </h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Logins;
