import { Link } from "react-router-dom";
function Hero(){
    return(
        <div className="h-[60vh] ">
            <div className=" flex justify-center flex-col flex-start bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/images/hero102.jpeg')] h-[90vh] bg-no-repeat bg-cover bg-center">
            <h1  className="text-center text-[4em] text-white"> GREAT TRIPS FOR TRAVELLERS , BOOK WITH US <br/> AND LIVE YOUR ADVENTURE</h1>
            <p className="text-center  text-white text-[1em]" >Don't wait until tommorow,find a trip <br/>now and discover the world in a new way</p>
            <div className="flex justify-center my-9">
            <Link to="/trips"><h1 className="bg-white py-3 px-5 rounded-md ">View All Trips</h1></Link>
            </div>
            </div>
        </div>
    )
}
export default Hero;