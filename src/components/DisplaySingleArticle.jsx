import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import FreeContent from "./FreeContent";
import PremiumContent from "./PremiumContent";

const DisplaySingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle;
  switch ((user, status)) {
    case currentUser.role === "subscriber" || article.premium === "false":
      return articleDetails;
    case currentUser.role != "subscriber" && article.premium === "true":
      return articleDetails;
  }
  articleDetails = (
    <>
      <h3 key={article.title}>{article.title}</h3>
      <h5 key={article.snippet}>{article.snippet}</h5>
      <p key={article.content}>{article.content}</p>
      <button
        id="home-button"
        onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
      >
        Back
      </button>
    </>
  );
  return <div id="single-article">{articleDetails}</div>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);
