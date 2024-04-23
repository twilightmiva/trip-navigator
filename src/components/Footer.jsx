import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


function Footer(){
    return(
<footer className="bg-[linear-gradient(90deg,#000000,#737373)] ">
    <div className="flex justify-between items-center">
        <div>
            <img className="h-[20vh]" src="src/assets/images/Adora-removebg-preview.png "/>
            <h1 className="text-white mb-[1em]">FOLLOW US</h1>
            <div className="flex justify-between ">
            <FaFacebook className="text-[2.5em] text-white" />
            <FaInstagram className="text-[2.5em]  text-white"/>
            <FaXTwitter className="text-[2.5em]  text-white"/>

            </div>
        </div>
        <div className=" text-white">
            <h1 className="text-[1.5em]">CONTACT-US</h1>
            <h1 className="text-[1.2em] font-semibold">Enquiries:</h1>
            <p>mercy@gmail.com</p>
            <h1 className="text-[1.2em] font-semibold">Bookings:</h1>
            <p>larry@gmail.com</p>
        </div>
<div className="text-white">
    <h1 className="text-[1.5em]">TRIPS AVAILABLE</h1>
    <button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-[4em] text-center rounded-md ">All-Trips</button>
</div>

    </div>
</footer>
    )
}
export default Footer