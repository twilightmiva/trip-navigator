import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth, storage } from "../firebase";
import { ref, uploadString } from "firebase/storage";
import loader from "../assets/images/loader.gif";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase";
function Addtrips() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userRegister, setRegister] = useState([]);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  function changeThePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleRegistration(e) {
    e.preventDefault();
    console.log(formData);
    e.preventDefault();
    setErrorMessage("");
    if (
      !formData.tripImg || formData.tripImg === "" ||
      !formData.name || formData.name === "" ||
      !formData.place || formData.place === "" ||
      !formData.date || formData.date === "" ||
      !formData.price || formData.price==="" ||
      !formData.details || formData.details === ""
    ) {
      setErrorMessage("Kindly fill all the fields");
      return;
    } else {
      const docRef = await addDoc(collection(db, "trips"), formData)
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        tripImg:"",
        name:"",
        place:"",
        date:"",
        price:"",
        details:""
      })
           
    }
  }

  function onImageUpload(e) {
    const file = e.target.files[0];

    const storageRef = ref(storage, `trips/${file.name}`);

    const reader = new FileReader();

    reader.onload = () => {
      setIsLoading(true);

      const dataImg = reader.result;
      uploadString(storageRef, dataImg, "data_url").then((snapshot) => {
        console.log("Uploaded a data_url string!");
        setFormData((prev) => ({
          ...prev,
          tripImg: `https://firebasestorage.googleapis.com/v0/b/trip-navigator-cbf95.appspot.com/o/trips%2F${file.name}?alt=media`,
        }));
      });
      console.log(reader.result);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  }
  return (
    <div className="">
      <form action="" className="">
        {errorMessage && (
          <p className="font-bold text-red-600">{errorMessage}</p>
        )}
        <div className="bg-[linear-gradient(90deg,#000000,#737373)] p-[3em] flex flex-col justify-between gap-8">
          {" "}
          <h2 className="text-white text-center">Add a Trip</h2>
          <div className="flex flex-col justify-between gap-5">
            <input type="file" onChange={(e) => onImageUpload(e)} />
            {isLoading && <img src={loader} />}
            {formData.tripImg && <img src={formData.tripImg} />}
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              className="border-2 py-2 pr-[3em] pl-2 outline-none"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="Place"
              name="place"
              value={formData.place}
              className="border-2 py-2 pr-[3em] pl-2  outline-none"
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={formData.date}
              className="border-2 py-2 pr-[3em] pl-2  outline-none"
              onChange={handleChange}
            />
            <input 
            type="text" 
            placeholder="Add the Price"
            name="price"
            value={formData.price}
            className="border-2 py-2 pr-[3em] pl-2  outline-none"
            onChange={handleChange}
            />
            <textarea
              className="pl-2 py-2 outline-none"
              placeholder="Add Details and Activities"
              name="details"
              value={formData.details}
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            onClick={(e) => handleRegistration(e)}
            className="bg-white p-2"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
export default Addtrips;
