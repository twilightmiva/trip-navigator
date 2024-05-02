import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
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


  async function getUserInfo() {}

  function handleRegistration(e) {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      setErrorMessage("Kindly fill all the Fields");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          if (user) {
            (async () => {
              const q = query(
                collection(db, "userInfo"),
                where("email", "==", formData.email)
              );

              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                const {password, confirmPassword, ...user} = doc.data()
                localStorage.setItem("user",JSON.stringify(user))

                console.log(user)
              });
            })();
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    navigate("/")
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

            <p className="text-red-400">{errorMessage}</p>
            <button
              className="border-2 py-2 px-[3em] border-#45C9A1  cursor-pointer bg-[linear-gradient(90deg,#000000,#737373)] text-white w-[92%] "
              onClick={handleRegistration}
            >
              Log-In
            </button>

          </div>
          <h1 className="p-[2em]">
            Don't have an Account?
            <Link to="/signup">
              <span className="underline cursor-pointer">Sign-Up</span>
            </Link>
          </h1>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default Logins;
