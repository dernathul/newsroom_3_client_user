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
      });debugger;
      props.dispatch({
        type: AUTHENTICATE,
        payload: {
          currentUser: { email: response.data.data.email, role: response.data.data.role }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  let signup;
  if (props.authenticated) {
    signup = (
      <>
        <p id="signed-up-message">Hi! {props.currentUser.email}</p>
      </>
    );
   
  } else {
    signup = (
      <form id="sign-up-form" onSubmit={onSignup}>
        <input id="email" name="email" type="email" placeholder="Email" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          id="passwordconfirmation"
          name="passwordconfirmation"
          type="password"
          placeholder="Confirm Password"
        />
        <button id="signup-button" type="signup">
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
