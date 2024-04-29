<<<<<<< HEAD
import Latest from "./Latest";
import namanga from "../assets/images/namanga.jpg";
import naivasha from "../assets/images/offroadnaivasha.avif";
import samburu from "../assets/images/samburu.avif";
function Latesttrip() {
  return (
    <div>
      <h1 className="text-center mt-3 text-[2em] text-[white]">LATEST TRIPS</h1>
      <div className="flex justify-between">
        <Latest img={namanga} title="Namanga Takover" />
        <Latest img={naivasha} title="Off Road Adventure Naivasha" />
        <Latest img={samburu} title="Samburu & buffalo Camping Getaway" />
      </div>
      <div className="flex justify-center items-center my-[3em]">
        <div>
          <h1 className="text-[2em] flex justify-center underline">
            Get the experience of a lifetime
          </h1>
=======
import Latest from "./Latest"
import namanga from "../assets/images/namanga.jpg"
import naivasha from "../assets/images/offroadnaivasha.avif"
import samburu from "../assets/images/samburu.avif"
function Latesttrip(){
    return(
        <div className="mt-[270px]">
>>>>>>> 41aeb05c3fb401c00779219464bef4956effb16d

          <img
            src="src/assets/images/Safari-Link-Fleet-10-1000x246.png"
            alt=""
            className="shadow-lg"
          />
          {/* <video src="src/assets/video/Black Orange Modern Aesthetic Documentary Film Title Typographic Youtube Video Intro (2).mp4"></video> */}
          <div className="flex justify-center items-center my-[2em]">
            <video loop autoPlay className="w-[500px] ">
              <source src="src/assets/video/black.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container mx-[auto] flex justify-evenly ">
        <div className="border shadow-lg bg-[linear-gradient(90deg,#000000,#737373)] p-[2em]">
          <h1>hey</h1>
        </div>
        <div className="border shadow-lg bg-[linear-gradient(90deg,#000000,#737373)] p-[2em]">
          {" "}
          <h1>hey</h1>
        </div>
        <div className="border shadow-lg bg-[linear-gradient(90deg,#000000,#737373)] p-[2em]">
          {" "}
          <h1>hey</h1>
        </div>
      </div>
    </div>
  );
}
export default Latesttrip;
