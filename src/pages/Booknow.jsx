// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import moment from "moment";
// import StripeCheckout from "react-stripe-checkout";

// function Bookingnow() {
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);
// const [room, setRoom] = useState({});
// const { roomid, frommonth, tomonth } = useParams();

// const fromDate = moment(frommonth, "MMMM YYYY"); // Convert frommonth to a moment object
// const toDate = moment(tomonth, "MMMM YYYY"); // Convert tomonth to a moment object
// const totalmonths = toDate.diff(fromDate, "months");
// const totalamount = totalmonths * room.rentpermonth;

// useEffect(() => {
// const fetchRoomData = async () => {
// try {
// setLoading(true);
// const response = await axios.get(`/api/rooms/getroomsbyid/${roomid}`);
// setRoom(response.data);
// setLoading(false);
// } catch (error) {
// setError(true);
// setLoading(false);
// }
// };

//     fetchRoomData();

// }, [roomid]);

// async function onToken(token) {
// console.log(token);
// const bookingDetails = {
// room,
// userid: JSON.parse(localStorage.getItem("currentUser"))._id,
// roomid, // Add roomid here
// frommonth,
// tomonth,
// totalmonths,
// totalamount,
// token,
// };

//     try {
//       const result = await axios.post("/api/bookings/bookroom", bookingDetails);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }

// }

// return (
// <div>
// {loading ? (
// <Loader/>
// ) : room ? (
// <div className="m-5">
// <div className="row justify-content-center mt-5 bsw">
// <div className="col-md-6">

// <h1>{room.name}</h1>
// <img />


//             <div className="col-md-6">
//               <div style={{ textAlign: "right" }}>
//                 <h1>Booking Details</h1>
//                 <hr>
//                 <b>
//                   <p>
//                     Name: {JSON.parse(localStorage.getItem("currentUser")).name}{" "}
//                   </p>
//                   <p>Size: {room.size} </p>
//                   <p>Location: {room.location} </p>
//                   <p>From Month : {frommonth}</p>
//                   <p>To Month :{tomonth}</p>
//                 </b>
//               </div>
    
//               <div style={{ textAlign: "right" }}>
//                 <b>
//                   <h1>Amount</h1>
//                   <hr>
//                   <p>No of Months : {totalmonths} </p>
//                   <p>Rent Per Month : {room.rentpermonth} </p>
//                   <p>Total Amount : {totalamount}</p>
//                 </b>
//               </div>
    
//               <div style={{ float: "right" }}>
//                 <StripeCheckout
//                   amount={totalamount * 100}
//                   token={onToken}
//                   currency="INR"
//                   stripeKey="stripekey"
//                 >
//                   <button className="btn btn-primary">Pay Now</button>
//                 </StripeCheckout>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Error />
//       )
//     </div>
// </div>
// )}

// export default Booknow;

function Booknow (){
  return
}
export default Booknow;