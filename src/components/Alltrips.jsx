import Alltrip from "./Alltrip"
import namanga from "../assets/images/namanga.jpg"
import namanga1 from "../assets/images/namanga1.jpg"
import namanga3 from "../assets/images/namangadayhoike.jpg"
import naboisho from "../assets/images/narok.avif"
import naboisho1 from "../assets/images/narok1.avif"
import naboisho2 from "../assets/images/naboisho.avif"
import samburu from "../assets/images/samburu.avif"
import nakuru from "../assets/images/nakuru.avif"
import nakuru1 from "../assets/images/nakuru1.avif"




function Alltrips(){
    return(
        <div className="container mx-auto">
            <div className="flex gap-5 my-5">

            <p className="text-center text-[2em]">NON-STOP TRAVELLING AND ADVENTURE:</p>
<input type="text" placeholder="Search All Trips" className="py-2 px-3 border outline-none text-black rounded-full"/>
            </div>
            <div className="flex flex-col justify-between gap-8">
            <div className="flex justify-between">

            <Alltrip img={namanga} title="Namanga Take over🔥" place="Namanga Boder Of Kenya N Tanzania"/>
            <Alltrip img={namanga1}/>
            <Alltrip img={namanga3} title="Namanga Day Hike"/>
            </div>
<div className="flex justify-between">
<Alltrip img={naboisho}/>
<Alltrip img={naboisho1}/>
<Alltrip img={naboisho2}/>
</div>
<div className="flex justify-between">
<Alltrip img={samburu}/>
<Alltrip/>
<Alltrip/>
</div>
<div className="flex justify-between">
<Alltrip img={nakuru} title="
2days L. Nakuru & Amboseli National park Safari
Nairobi"/>
<Alltrip img={nakuru1}/>
<Alltrip/>
</div>
</div>
        </div>
    )
}
export default Alltrips