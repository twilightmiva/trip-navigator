import { Link } from "react-router-dom"

function Latest(img,title){
return(
    <div>
        <h1 className="text-center mt-3 text-[2em]">LATEST TRIPS</h1>
    <div>
        {/* <img src=""/> */}

    </div>
    {/* <p>{title}</p> */}
    <Link to="/trips"><button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-2 px-[4em]">Details</button></Link>
    </div>
)
}
export default Latest