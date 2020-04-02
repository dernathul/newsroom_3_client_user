import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { connect } from "react-redux";

const LoginForm = props => {
  const onLogin = async e => {
    e.preventDefault();
    try {
      let response = await auth.signIn(
        e.target.elements.email.value,
        e.target.elements.password.value
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
  };debugger

  const onLogout = () => {
    auth.signOut();
  };
  
  let login;
  if (props.authenticated) {
    let  cutEmail = props.currentUser.email.substring(0, props.currentUser.email.indexOf('@'))
    login = (
      <>
        <p id="logged-in-message" class="success-message">Hi, {cutEmail}!</p>
        {onLogout}
      </>
    )
  } else {
    login = (
      <form id="login-form" onSubmit={onLogin}>
        <input id="email" name="email" placeholder="Email" />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        <button id="submit-button" type="submit">
          Sign in{" "}
        </button>
      </form>
    );
  }

  return <div>{login}</div>;
};

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(LoginForm);
