import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { useTranslation } from 'react-i18next';

const LoginForm = props => {
  const { t } = useTranslation()
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
  };

  const onLogout = () => {
    auth.signOut();
  };

  let login;
  if (props.authenticated) {
    let cutEmail = props.currentUser.email.substring(
      0,
      props.currentUser.email.indexOf("@")
    );
    login = (
      <>
        <p id="logged-in-message" class="success-message">
          {t('Hi')}, {cutEmail}!
        </p>
        {onLogout}
      </>
    );
  } else {
    login = (
      <form class="ui form" id="login-form" onSubmit={onLogin}>
         <div class="field">
         <label>Email</label>
        <input id="email" name="email" placeholder="Email" />
        </div>
        <div class="field">
        <label>{t('Password')}</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
        </div>
        <button  class="ui button" id="submit-button" type="submit">
          {t('Sign in')}{" "}
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
