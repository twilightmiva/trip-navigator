import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import { Link } from "react-router-dom";

function Footer(){
    return(
<footer className="bg-[linear-gradient(90deg,#000000,#737373)] bg-no-repeat bg-cover bg-center">
    <div className="flex justify-between items-center flex-wrap ">
            <img className="h-[20vh] pl-[-4em]" src="src/assets/images/Adora-logo.png"/>
        <div>
            <div>
            <h1 className="text-white mb-[1em]">FOLLOW US</h1>
            <div className="flex justify-between gap-[2em]">
            <FaFacebook className="text-[2.5em] text-white" />
            <FaInstagram className="text-[2.5em]  text-white"/>
            <FaXTwitter className="text-[2.5em]  text-white"/>

            </div>
            </div>
        </div>
        <div className="mb-[2em] pt-10 text-white">
            <h1 className="text-[1.5em]">CONTACT-US</h1>
            <h1 className="text-[1.2em]">Enquiries:</h1>
            <p className="">mercy@gmail.com</p>
            <h1 className="text-[1.2em]">Bookings:</h1>
            <p className="">larry@gmail.com</p>
        </div>
<div className="mb-[6em] pt-10 text-white">


    <h1 className="font-medium text-[1.5em]">TRIPS AVAILABLE</h1>
   <Link to="/trips"><button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-[4em] text-center rounded-md ">All-Trips</button></Link>

</div>

    </div>
</footer>
    )
}
export default Footer;