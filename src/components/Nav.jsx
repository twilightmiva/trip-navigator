import { Link } from "react-router-dom";

<nav className="rounded-tl-[40px] bg-[linear-gradient(90deg,#000000,#737373)]">
    <div className="flex flex-wrap justify-between items-center pt-[-4em]">
        <Link to="/"><div><img className="h-[20vh]" src="src/assets/images/Adora-removebg-preview.png "/>
</div></Link>
        <div>
            {/* <h1>mercy</h1> */}

            <ul className="flex flex-wrap justify-center items-center gap-7">
                <Link to="/signup"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md">Sign-Up</li></Link>
                <Link to="/logins"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">Log-In</li></Link>
                <Link to="/trips"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">All-Trips</li></Link>
            <Link to="/"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">Log-Out</li></Link>
            <Link to="/addtrip"><li className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-3 px-5 text-center rounded-md ">Add a Trip</li></Link>
            </ul>


        </div>
      </div>
    </nav>
  
export default Nav;
