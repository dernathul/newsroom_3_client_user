import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import FullContent from "./FullContent";
import RestrictedContent from "./RestrictedContent";

const DisplaySingleArticle = props => {
  let articleDetails;
  let currentUser = props.currentUser;
  let article = props.singleArticle;

  let showContent =
    currentUser.role === "subscriber" || article.premium === false ? (
      <FullContent />
    ) : (
      <RestrictedContent />
    );

  articleDetails = (
    <>
      <div class="ui items">
        <div class="item">
          <a class="ui small image">
            <div class="ui placeholder">
              <div class="image"></div>
            </div>
          </a>
          <div class="content">
            <h2 class="header" key={article.title}>
              {article.title}
            </h2>
            <div class="description">
              <h5 key={article.snippet}>{article.snippet}</h5>
              {showContent}
              <button
                id="home-button"
                onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return <div id="single-article">{articleDetails}</div>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);
