



import { LuEye } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerSelection, setRegisterSelection] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    userType: "",
 });

  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleRegistration(e) {
    e.preventDefault();
    if (formData.fullName === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.email === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.phoneNumber === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password === "") {
     setErrorMessage("Kindly fill all the Fields");
     }
    if (formData.confirmPassword === "") {
      setErrorMessage("Kindly fill all the Fields");
    }
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("The Password does not match");
    }
    if (formData.userType === "") {
      setErrorMessage("Kindly select as an Interior designer or a Client");
    }


    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userDetails) => {
        console.log(userDetails);
      })
     .catch((error) => {
        console.log(error);
      });
 }
  function handleRegisterSelection(selection) {
    setRegisterSelection(selection);
    setFormData((prev) => ({ ...prev, userType: selection }));
  }
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center border-gray shadow-lg  border-2 p-[5em] bg-[linear-gradient(90deg,#000000,#737373)]">
       <div className="bg-white w-[100%] h-[100]">
          <img src="src/assets/images/signup.jpg" className="hidden sm:flex"/>
        </div>
        <div className="flex flex-col gap-5 ">
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="border-2 py-2 px-[3em]  m-[1em]  "
              name="fullName"
              onChange={handleChange}
            />
          </div>
         <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="text"
              placeholder="Email"
              className=" border-2 py-2 px-[3em]  m-[1em] "
              name="email"
             onChange={handleChange}
            />
          </div>

          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type="number"
              placeholder="Phone Number"
              className="border-2 py-2 px-[3em]  m-[1em] "
              name="phoneNumber"
             onChange={handleChange}
            />
         </div>

          <div className="border-2  rounded-lg  shadow-lg flex">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="password"
              className="border-2 py-2 px-[3em]  m-[1em]  "
              name="password"
              onChange={handleChange}
            />
            <div
              className="flex  items-center text-[20px] cursor-pointer pr-4"
              onClick={changeThePassword}
            >
              {" "}
              {showPassword ? <LuEye /> : <FaRegEyeSlash />}
           </div>
          </div>
          <div className="border-2  rounded-lg w-full shadow-lg">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Confirm Passsword"
             className="border-2 py-2 px-[3em]  m-[1em]  "
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
         <p className="text-red-400">{errorMessage}</p>

          <div className="flex w-full gap-7">
            <div className="flex-1">
              <label
                onClick={() => handleRegisterSelection("designer")}
               htmlFor="designer"
                className=" "
                style={{
                  backgroundColor:
                    registerSelection === "client" ? "" : "",
                }}
              >
                <input
                  type="radio"
                  name="type"
                  id="designer"
                  className="hidden radio"
                />
               <div className=" flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full">
                  <div className="w-[15px] h-[15px] rounded-full  hidden"></div>
                </div>
                <label htmlFor="" className="text-white font-bold">
                  Interior Designer
                 </label>
             </label>
             </div>
             <div className="flex-1">
              <label
                onClick={() => handleRegisterSelection("client")}
                htmlFor="client"
                className=" flex gap-4 justify-center items-center py-[2em] cursor-pointer"
                style={{
                  backgroundColor:
                    registerSelection === "client" ? "red" : "",
               }}
              >
               <input
                  type="radio"
                 name="type"
                  id="client"
                  className="hidden radio"
                />
               <div className=" flex justify-center items-center w-[30px] h-[30px] bg-white rounded-full">
                  <div className="w-[15px] h-[15px] rounded-full  hidden"></div>
                </div>
                 <label htmlFor="" className="text-white font-bold">
                  Client
                </label>
              </label>
             </div>
           </div>

           <div className="flex justify-center ">
            <button
               onClick={handleRegistration}
               className=" px-[5em] py-5 rounded-[2em] shadow-lg text-white font-bold "
            >
               Create Account
             </button>
           </div>
           <div className="flex justify-center text-[25px]">
             Already Have An Account?{" "}
             <a href="/login" className=" ">
              Log in
             </a>
           </div>
        </div>
       </div>
    </div>
  );
} export default Register;