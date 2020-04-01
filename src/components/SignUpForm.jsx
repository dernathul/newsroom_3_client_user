import React from "react";
import { connect } from "react-redux";

const SignUp = props => {
  onSignUp = e => {
    e.preventDefault();

    debugger;
  };

  let SigningUpForm = (
    <form id="sign-up-form" onSubmit={this.onSignUp}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="signup">Sign Up</button>
    </form>
  );

  return { SigningUpForm };
};
const mapStateToProps = state => {
  return {
    SignUpForm: state.SignUpForm 
  }
}

export default connect(mapStateToProps)(SignUp);
