import { useNavigate } from "react-router-dom"

function Alltrip({img,title,place,price,date,details}){
const navigate = useNavigate();

function handleSingleTrip(){
    navigate(`/trips/${title}`, {state:{img,title,place, details, date, price}})
}

return(

<div className="border shadow-2xl my-9">
<div className="relative group ">

<img src={img} className="w-[400px] h-[300px]"/>
<button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white text-[1.3em] py-2 absolute bottom-0 w-[100%] hidden group-hover:block " onClick={handleSingleTrip}>DETAILS</button>
</div>
<div>
<p className="text-bold ">{title}</p>
<p className="text-[15px]">{place}</p>
</div>
</div>
)
}
export default Alltrip

