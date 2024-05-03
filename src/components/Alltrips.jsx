import Alltrip from "./Alltrip";
import namanga from "../assets/images/namanga.jpg";
import namanga1 from "../assets/images/namanga1.jpg";
import namanga3 from "../assets/images/namangadayhoike.jpg";
import naboisho from "../assets/images/narok.avif";
import naboisho1 from "../assets/images/narok1.avif";
import naboisho2 from "../assets/images/naboisho.avif";
import nakuru2 from "../assets/images/elementaita.jpeg";
import samburu from "../assets/images/samburu.avif";
import samburu1 from "../assets/images/navb.avif";
import samburu2 from "../assets/images/go.jpeg";
import nakuru from "../assets/images/nakuru.avif";
import nakuru1 from "../assets/images/nakuru1.avif";
import { useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
function Alltrips() {
  const [searchText,setSearchText]=useState("")
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, "trips"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setTrips((prev) => [...prev, doc.data()]);
      });
    })();
  }, []);

  return (
    <div className="container mx-auto">
      {console.log(trips)}
      <div className="flex gap-5 my-5">
        <p className="text-center text-[2em]">
          NON-STOP TRAVELLING AND ADVENTURE:
        </p>
        <input
          type="text"
          placeholder="Search All Trips"
          className="py-2 px-3 border outline-none text-black rounded-full"
          onChange={(e)=>setSearchText(e.target.value)}

        />
      </div>
      <div className="flex flex-col  justify-between gap-8">
        <div className="flex flex-wrap justify-between">
          {trips &&
            trips.map((trip) => {
              
              if(trip.name.toLowerCase().includes(searchText)){
                {console.log(trip)}

                return (
                  <Alltrip
                    img={trip.tripImg}
                    title={trip.name}
                    place={trip.place}
                    date={trip.date}
                    price={trip.price}
                    details={trip.details}
                  />
                );
              }
            })}
          <Alltrip
            img={namanga}
            title="Namanga Take over🔥"
            place="Namanga Boder Of Kenya N Tanzania"
          />
          <Alltrip
            img={namanga1}
            title="Sleeping Warrior Hike & Trek"
            place="Namanga"
          />
          <Alltrip
            img={namanga3}
            title="Namanga Day Hike"
            place="Namanga Boder Of Kenya N Tanzania"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <Alltrip
            img={naboisho}
            title="Naboisho Camp - Tier 2 Deluxe"
            place=" Masai Mara Explorer Safari"
          />
          <Alltrip
            img={naboisho1}
            title="Days Maasai Mara (Naboisho Conservancy) Safari"
            place="Naboisho Conservancy"
          />
          <Alltrip
            img={naboisho2}
            title=" Full day game drives in Naboisho conservancy"
            place="Naboisho Conservancy"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <Alltrip
            img={samburu}
            title="SAMBURU X ELEPHANT SPRINGS OVERLAND TRIP"
            place="Samburu"
          />
          <Alltrip
            img={samburu1}
            title="3 DAYS, 2 NIGHTS SAMBURU PRIVATE SAFARI PACKAGE"
            place="SAMBURU NATIONAL RESERVE"
          />
          <Alltrip
            img={samburu2}
            title="3 Day Customized Private Adventure Safari"
            place=" Samburu National Reserve, Kenya"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <Alltrip
            img={nakuru}
            title="2days L. Nakuru & Amboseli National park Safari Nairobi"
            place=" Nakuru"
          />
          <Alltrip
            img={nakuru1}
            title="Full-Day Lake Nakuru National Park Tour from Nairobi"
            place="Nakuru"
          />
          <Alltrip
            img={nakuru2}
            title="Lake Nakuru national park day trip from Nairobi"
            place="Nakuru"
          />
        </div>
      </div>
    </div>
  );
}
export default Alltrips;
