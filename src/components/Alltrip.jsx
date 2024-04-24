import { useNavigate } from "react-router-dom"

function Alltrip({img,title,place}){
const navigate = useNavigate();

function handleSingleTrip(){
    navigate(`/trips/${title}`, {state:{img,title,place}})
}

return(

<div className="border shadow-lg">
<div className="relative group">

<img src={img} className="w-[400px] h-[300px]"/>
<button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white text-[1.3em] py-2 absolute bottom-0 w-[100%] hidden group-hover:block" onClick={handleSingleTrip}>DETAILS</button>
</div>
<div>
<p>{title}</p>
<p>{place}</p>
</div>
</div>
)
}
export default Alltrip

