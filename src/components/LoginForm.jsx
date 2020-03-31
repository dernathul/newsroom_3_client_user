import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { connect } from "react-redux"

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
        payload: { currentUser: { email: response.data.email, role: response.data.role } }
      })
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    auth.signOut()
    props.dispatch({
      type: AUTHENTICATE,
      payload: { authenticated: false }
    })
  }

  let login
  if (props.authenticated) {
    login = (
      <>
          <p id="logged-in-message">Hi! {props.currentUser.email}</p>
          <button onClick={onLogout} >log out</button>
      </>
    )
  } else {
    login = (
      <form id="login-form" onSubmit={onLogin}>
        <input id="email" name="email" placeholder="Email" />
        <input id="password" name="password" type="password" placeholder="Password" />
        <button id="submit-button" type="submit">Sign in </button>
      </form>
    )
  }

  return <div>{login}</div>
};

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(LoginForm);
