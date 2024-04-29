function Addtrips() {
  return (
    <div className="">
      <form action="" className="">
        <div className="bg-[linear-gradient(90deg,#000000,#737373)] p-[3em]">
          {" "}
          <h2 className="text-white text-center">Add a Trip</h2>
          <div className="flex flex-col justify-between gap-5">
            <input type="file"/>
            <input type="text" placeholder="Name" className="border-2 py-2 pr-[3em] pl-2 outline-none"/>

            <input type="text" placeholder="Place" className="border-2 py-2 pr-[3em] pl-2  outline-none"/>
            <input type="text" placeholder="Date" className="border-2 py-2 pr-[3em] pl-2  outline-none"/>
        <textarea className="pl-2 py-2 outline-none" placeholder="Add Details and Activities" name="Details" id="" cols="30" rows="10"></textarea>          
          </div>
        </div>
      </form>
    </div>
  );
}
export default Addtrips;
