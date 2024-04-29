import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Latest({img,title,place}){
    const navigate = useNavigate();

function handleSingleTrip(){
    navigate(`/trips/${title}`, {state:{img,title,place}})
}
return(
    <div className="">
        
        <div className="flex flex-col border bg-white flex-wrap">
    <div>
        <img src={img} className="w-[400px] h-[200px]"/>

    </div> 
    <div className="pl-[6eexm] flex flex-col justify-center items-center">

    <p className="text-center" >{title}</p>
    <button className=" bg-[linear-gradient(90deg,#000000,#737373)] text-white py-2 px-[4em]" onClick={handleSingleTrip}>Details</button>
    </div>
    </div>
    </div>
)
}
export default Latest