import { useLocation } from "react-router-dom";

function SingletripData() {
  const { state } = useLocation();

  const { img, title, place } = state;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div>
          <img src={img} alt="" />
          <h2>{title}</h2>
          <p>{place}</p>
        </div>
        <p>
          About the event
          <br />
          Namanga Take over🔥
          <br />
          𝑵𝑨𝑴𝑨𝑵𝑮𝑨 𝑩𝑶𝑹𝑫𝑬𝑹 𝐑𝐎𝐀𝐃 𝐓𝐑𝐈𝐏 V
          <br />
          𝑫𝒂𝒕𝒆: 28TH April, 2024
          <br />
          𝑪𝒉𝒂𝒓𝒈𝒆𝒔: 𝑲𝒔𝒉 3,000
        </p>
        <p>Cost inclusive of;</p>
        <br />
        ✓Transport to & from in a tour bus.
        <br />
        ✓Namanga Border Visit.
        <br />
        ✓Entrance Fee.
        <br />
        ✓Lunch.
        <br />
        ✓Water.
        <br />
        ✓Swimming.
        <br />
        ✓Photography.
        <br />
        ✓Team building/ Networking.
        <br />✓ Hiking at Mt. Ol Donyo Orok.
        <p>EXCLUDED</p>
        <p>✓ what's not mentioned above.</p>
        Get a slot -pay Deposit of ksh 1500 We accept lipa pole pole option
      </div>
      <button className="bg-[linear-gradient(90deg,#000000,#737373)] text-white py-2 px-[4em] ml-[6em]">
        BOOK-NOW
      </button>
    </div>
  );
}
export default SingletripData;
