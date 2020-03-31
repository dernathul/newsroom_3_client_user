import React from "react";
import { connect } from "react-redux";
import { SHOW_SUBSCRIPTION_FORM } from "../state/actions/actionTypes";
import { SHOW_LOGIN_FORM } from "../state/actions/actionTypes";
const RestrictedContent = props => {
  let article = props.singleArticle;

  let shortContent = article.content.substring(0, 20) + "...";
  let currentUser = props.currentUser;

  let switchLoginAndSubscribe =
    currentUser.role === "reg_user" ? (
      <>
      <p>This is premium article. If you want to continue reading, you need to subscribe.</p>
      <button
        onClick={() =>
          props.dispatch({
            type: SHOW_SUBSCRIPTION_FORM,
            payload: { showForm: true }
          })
        }
      >
        Buy Subscription
      </button>
      </>
    ) : (
      <>
      <p>This is premium article. If you want to subscribe, you need to be a registered user</p>
      <button id = "login-button"
      onClick = {() => props.dispatch({type: SHOW_LOGIN_FORM, payload: {showLoginForm: true}})}>Login</button>
    </>
    );

  return (
    <>
      <p id="content">{shortContent}</p>
      {switchLoginAndSubscribe}
    </>
  );
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(RestrictedContent);
