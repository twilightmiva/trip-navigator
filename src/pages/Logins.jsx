import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {getAuth, createUserWithEmailAndPassword} from "../firebase"
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import {auth} from "../firebase"
function Logins(){
    const [showPassword, setShowPassword] = useState(true);
    function changeThePassword() {
      setShowPassword((prev) => !prev);
    }
    const [errorMessage, setErrorMessage] = useState("");
  
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleRegistration(e) {
      e.preventDefault();
  
      if (formData.email === "") {
        setErrorMessage("Kindly fill all the Fields");
      }
      if (formData.password === "") {
        setErrorMessage("Kindly fill all the Fields");
      }
    }
    return(
        <div>
      <div className="">
        <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 h-[100vh] ">
          <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 p-[5em] bg-[linear-gradient(90deg,#000000,#737373)]">
            <h1 className="text-[2em] text-[white] font-extrabold">Login to your Account</h1>
            <input
              type="text"
              placeholder="Email address"
              className="border-2 py-2 px-[3em]  m-[1em]   "
              onChange={handleChange}
            />
            <div className="flex justify-center items-center relative ">
              <input
                placeholder="Password"
                className="border-2 py-2 px-[3em]  m-[1em]   "
                type={showPassword ? "password" : "text"}
              />
              {/* <div className="absolute right-10 " onClick={handleShowPassword}>
                {showPassword ? (
                  <FaEyeSlash className="text-[1.5em] cursor-pointer text-[gray]" />
                ) : (
                  <FaRegEye className="text-[1.5em] cursor-pointer text-[gray]" />
                )}
              </div> */}
                    <div
             className="flex  items-center text-[20px] cursor-pointer pr-4 absolute right-10"
             onClick={changeThePassword}
            >
              {" "}
             {showPassword ? <FaEyeSlash/> : <FaRegEye />}
            </div>
          </div>
          <div className="">
          <input
            type={showPassword ? "password" : "text"}
             placeholder="Confirm Passsword"
             className=" border-2 py-2 px-[3em]  m-[1em]    "
              name="confirmPassword"
             onChange={handleChange}
          />
          </div>
          <p className="text-red-400">{errorMessage}</p>

            </div>
            <button className="border-2 py-2 px-[3em] border-#45C9A1  cursor-pointer bg-[linear-gradient(90deg,#000000,#737373)] text-white w-[92%] " onClick={handleRegistration}>
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
    )
}

export default Logins;