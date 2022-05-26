import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "../Dashboard/CheckoutForm";
import Loading from "../Shared/Loading";
const stripePromise = loadStripe("pk_test_51L3Dg3D2lre9ret5x1I9FHxdWbadlGVFE1fAmQ2N9oVO2EppCtq9BLqFtHfSuut3WWZZON3exSiRCqhumz7h4BYV00sRK9OkYC");

const Payment = () => {
  const { payid } = useParams();
  const url = ` http://localhost:5000/payment/${payid}`;
  const { data: booking, isLoading , isFetching } = useQuery(["payment", payid], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  
  );
 
  if (isLoading || isFetching) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl text-purpole">Payment {payid}</h2>

      <div className="card w-50 max-w-md  bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p>Hello {booking?.name}</p>
          <h2 className="text-1xl">
            Your Orderd Product Is{" "}
            <span className="font-bold text-orange-300">
              {booking?.item?.name}
            </span>
          </h2>

          <p>
            Please Pay :{" "}
            <span className="font-bold text-orange-300">
              ${booking?.item?.perproduct}
            </span>
          </p>
        </div>
      </div>
       <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                {/* <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div> */}
            </div>
      
    </div>
  );
};

export default Payment;
