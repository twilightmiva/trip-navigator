// import { auth,db } from "../firebase";
// import {collection,addDoc} from "firebase/firestore"
// import React from 'react';

function Book() {
  const handlePayment = () => {
    const paymentData = {
      amount: 100,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    firestore
      .collection("payments")
      .add(paymentData)
      .then(() => {
        console.log("Payment information stored successfully.");
      })
      .catch((error) => {
        console.error("Error storing payment information:", error);
      });
  };
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  };


  return (
    <>
      <h2 className="text-center text-2xl">Payment Form</h2>
      <div className="flex justify-center  shadow-lg  py-8">
        <div>
          <div id="paypal-container-EHCCMNK4LLQAJ"></div>

          <div style={buttonContainerStyle}></div>
        </div>
      </div>
    </>
  );
}
export default Book;
