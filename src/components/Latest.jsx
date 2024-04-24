import { Link } from "react-router-dom"

function Latest({img,title}){
return(
    <div className="">
        
        <div className="flex flex-col border bg-white">
    <div>
        <img src={img} className="w-[400px] h-[200px]"/>

    </div> 
    <div className="pl-[6eexm] flex flex-col justify-center items-center">

    <p className="text-center" >{title}</p>
    <Link to="/trips"><button className=" bg-[linear-gradient(90deg,#000000,#737373)] text-white py-2 px-[4em]">Details</button></Link>
    </div>
    </div>
    </div>
)
}
export default Latest