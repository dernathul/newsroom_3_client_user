import React from "react";
import { connect } from "react-redux";
import {SHOW_SUBSCRIPTION_FORM} from "../state/actions/actionTypes"

const RestrictedContent = props => {
  let article = props.singleArticle;

  let shortContent = article.content.substring(0, 20) + "...";
  return (
    <>
      <p id="content">{shortContent}</p>
      <button onClick = {() => props.dispatch({type: SHOW_SUBSCRIPTION_FORM, payload: {showForm: true}})} >Buy Subscription</button></>
  );
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(RestrictedContent);
