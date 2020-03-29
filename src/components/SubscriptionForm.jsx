import React from "react";
import {
  CardNumberElement,
  //   CardHolderElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";

const SubscriptionForm = props => {
  return (
    <form id="subscription">
      <h1>"I'm the subscription form"</h1>
      <label>Card Number</label>
      <CardNumberElement />
      {/* <label>Card Holder Name</label>
      <CardHolderElement /> */}
      <label>Card Expiration Date</label>
      <CardExpiryElement />
      <label>Card CVC</label>
      <CardCVCElement />
    </form>
  );
};

export default injectStripe(SubscriptionForm);
