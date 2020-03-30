import React from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
import { FLASH_MESSAGE, BACK_TO_ARTICLES_LIST } from '../state/actions/actionTypes';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'semantic-ui-react'

const SubscriptionForm = props => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser)
  const confirmSubscription = async (event) => {
    event.preventDefault()
    let stripeResponse = await props.stripe.createToken()
    let token = stripeResponse.token.id
    let paymentStatus = await axios.post("https://newsroom3api.herokuapp.com/api/v1/subscriptions", { stripeToken: token, email: currentUser.email })
    if (paymentStatus.data.status === "paid") {
      dispatch({
        type: FLASH_MESSAGE, payload: {
          flashMessage: "Thank you for your purchase!",
          showForm: false,
          currentUser: { email: "karlmarx@mail.com", role: "subscriber" }
        }
      })
      dispatch({ type: BACK_TO_ARTICLES_LIST })
    }
  }

  return (
    <Modal open={true}>
      <form id="subscription-form">
        <h1>Subscribe to become Premium Member!</h1>
        <h3>Read all our content with a yearly subscription for 499 kr</h3>
        <label>Card Number</label>
        <CardNumberElement />
        <label>Card Expiration Date</label>
        <CardExpiryElement />
        <label>Card CVC</label>
        <CardCVCElement />
        <button onClick={event => confirmSubscription(event)}>
          Purchase Subscription
        </button>
      </form>
    </Modal>
  );
};

export default injectStripe(SubscriptionForm);
