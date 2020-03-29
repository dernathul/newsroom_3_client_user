import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";

const SubscriptionForm = props => {
    const confirmSubscription = async (event) => {
      event.preventDefault()
      let stripeResponse = await props.stripe.createToken()
      let token = stripeResponse.token.id 
      let paymentStatus = await axios.post("http://localhost:3000/api/v1/subscriptions", {stripeToken: token})
      if (paymentStatus.data.status === "paid") {
        debugger
      }
      
    }
  
  return (
    <form id="subscription-form">
      <h1>"I'm the subscription form"</h1>
      <label>Card Number</label>
      <CardNumberElement />
      <label>Card Expiration Date</label>
      <CardExpiryElement />
      <label>Card CVC</label>
      <CardCVCElement />
      <button onClick={(event)=> confirmSubscription(event)}>Confirm Subscription</button>
    </form>
    
  );
};

export default injectStripe(SubscriptionForm);
