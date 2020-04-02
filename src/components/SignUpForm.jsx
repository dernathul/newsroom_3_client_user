import React from "react";
import auth from "../modules/auth";
import { connect } from "react-redux";
import { AUTHENTICATE } from "../state/actions/actionTypes";

const SignUpForm = props => {
  const onSignup = async e => {
    e.preventDefault();

    try {
      let response = await auth.signUp({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        password_confirmation: e.target.elements.passwordconfirmation.value
      });
      props.dispatch({
        type: AUTHENTICATE,
        payload: {
          currentUser: {
            email: response.data.data.email,
            role: response.data.data.role
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
    debugger;
  };
  let signup;

  if (props.authenticated) {
    let cutEmail = props.currentUser.email.substring(
      0,
      props.currentUser.email.indexOf("@")
    );
    signup = (
      <>
        <p id="signed-up-message" class="success-message">
          Hi, {cutEmail}!
        </p>
      </>
    );
  } else {
    signup = (
      <form class="ui form" id="sign-up-form" onSubmit={onSignup}>
        <div class="field">
        <label>Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div class="field">
        <label>Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        </div>
        <div class="field">
        <label>Confirm Password</label>
        <input
          id="passwordconfirmation"
          name="passwordconfirmation"
          type="password"
          placeholder="Confirm Password"
        />
        </div>
        <button class="ui button" id="signup-button" type="signup">
          Sign Up
        </button>
      </form>
    );
  }
  debugger;

  return <div>{signup}</div>;
};
const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(SignUpForm);
