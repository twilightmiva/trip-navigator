import Latest from "./Latest"
import namanga from "../assets/images/namanga.jpg"
import naivasha from "../assets/images/offroadnaivasha.avif"
import samburu from "../assets/images/samburu.avif"
function Latesttrip(){
    return(
        <div className="mt-[270px]">

            <h1 className="text-center mt-3 text-[2em]">LATEST TRIPS</h1>
            <div className="flex justify-between">

<Latest img={namanga} title="Namanga Takover"/>
<Latest img={naivasha} title="Off Road Adventure Naivasha"/>
<Latest img={samburu} title="Samburu & buffalo Camping Getaway"/>
            </div>
        </div>
    )
}
export default Latesttrip