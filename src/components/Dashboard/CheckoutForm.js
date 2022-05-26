import { async } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";


const CheckoutForm = ({booking}) => {
     console.log(booking.item.perproduct);
   
    const price = booking.item.perproduct
     const stripe = useStripe()
     const elements = useElements();
     const [cardError , setCardError] = useState('')
     const [clientSecret ,setClientSecret ] = useState('')
     console.log(clientSecret);
     useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent' ,{
             method:'POST',
             headers:{
               'Content-Type': 'application/json' ,
               'authorization':` Bearer ${localStorage.getItem('accessToken')}`
             },
             body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data=>{
          if(data?.clientSecret){
               setClientSecret(data.clientSecret)
          }
        })
               
     },[price])
     const handleSubmit = async (e) =>{
          e.preventDefault()
          if(!stripe || !elements){
               return
          }
          const card = elements.getElement(CardElement);
          if(card == null){
               return 
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
               type: 'card',
               card,
             });
             
                 setCardError(error?.message || '')
             
     }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn mt-10 btn-success btn-xs" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
         cardError && <p className="text-red-500">{cardError}</p>  
      }
    </>
  );
};

export default CheckoutForm;
