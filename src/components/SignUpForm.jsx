import React from "react";
import auth from "../modules/auth";
import { connect } from "react-redux";
import { AUTHENTICATE } from "../state/actions/actionTypes";


const SignUpForm = props => {
  const onSignup = async e => {
    e.preventDefault();

    try {
      let response = await auth.signUp(
        e.target.elements.email.value,
        e.target.elements.password.value,
        e.targert.element.password_confirmation.value
      );
      props.dispatch({
        type: AUTHENTICATE,
        payload: {
          currentUser: { email: response.data.email, role: response.data.role }
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
      
        <p id="sign-up-message"> {props.currentUser.email} Account created!</p>
      </>
    );
  } else {
    signup = (
     
        <form id="sign-up-form" onSubmit={onSignup}>
          <input id="email" type="email" placeholder="Email" />
          <input id="password" type="password" placeholder="Password" />
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
          />
          <button id="signup-button" type="signup">
            Sign Up
          </button>
        </form>
        
   
    );
  }
  return <div>{signup}</div>;
};
const mapStateToProps = state => {
  return {
    showSignUpForm: state.showSignUpForm,
    authenticated: state.authenticated
  };
};

export default connect(mapStateToProps)(SignUpForm);
