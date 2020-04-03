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
