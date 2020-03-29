import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";

const SubscriptionForm = props => {
    const confirmSubscription = (event) => {

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
