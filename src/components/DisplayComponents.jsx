import React from "react";
import { connect } from "react-redux";
import DisplayArticles from "./DisplayArticles";
import DisplaySingleArticle from "./DisplaySingleArticle";
import { fetchArticles } from "../state/actions/articleAction";
import { bindActionCreators } from "redux";
import SubscriptionForm from "./SubscriptionForm";
import { Elements } from "react-stripe-elements";

const DisplayComponents = props => {
  props.fetchArticles();

  return (
    <>
      <h1>The Mars Times</h1>
      {props.articleList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      {props.showForm && <Elements><SubscriptionForm /></Elements>}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
    articleList: state.articleList,
    showForm: state.showForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponents);
