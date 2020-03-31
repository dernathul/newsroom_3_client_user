import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import {connect} from "react-redux"

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
        payload: {authenticated: true, currentUser: response.data.email}
      })
    } catch (error) {
      console.log(error);
    }
  };
  let login
  if (props.authenticated) {
    login = (
      <>
      <p>Welcome {props.currentUser}</p>
      </>
    )
  } else {
    login = (
      <form onSubmit={onLogin}>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Sign in </button>
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
