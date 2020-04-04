import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import FullContent from "./FullContent";
import RestrictedContent from "./RestrictedContent";
import { useTranslation } from 'react-i18next';

const DisplaySingleArticle = props => {
  const { t } = useTranslation()
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
<<<<<<< HEAD
      <img src={article.image} alt={`${article.title}-image`} />
      <h3 key={article.title}>{article.title}</h3>
      <h5 key={article.snippet}>{article.snippet}</h5>
      {showContent}
      <button
        id="home-button"
        onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
      >
        {t('Back')}
      </button>
=======
      <div className="ui main container">
     
      <div id="single-article" class="ui centered card">
            <div class="ui placeholder">
              <div class="square image"></div>
            </div>
     
          <div class="content">
            <h1 class="header" key={article.title}>
              {article.title}
            </h1>
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
>>>>>>> 4cee0e19ed2e4b9c0ea42d92194ffb8fb7db7052
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
