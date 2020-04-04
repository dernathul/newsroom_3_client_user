import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleArticle } from "../state/actions/articleAction";
import { useTranslation } from 'react-i18next';

const DisplayArticles = props => {
  const { t } = useTranslation()
  const showArticle = articleId => {
    props.fetchSingleArticle(articleId);
  };
  let articles;
  if (props.selectedCategory) {
    articles = props.articles.filter(article => {
      return article.category === props.selectedCategory && article;
    });
  } else {
    articles = props.articles;
  }

  let articleDisplay = articles.map(article => {
    return (
      <div id={`article-${article.id}`} key={article.id}>
        <img src={article.image} alt={`${article.title}-image`} />
        <h4 id="title">{article.title}</h4>
        <h5 id="snippet">{article.snippet}</h5>
        <button
          id="open-article"
          onClick={() => showArticle(article.id)}
          key={article.id}
        > {t('Read more')}
        </button>
      </div>
    );
  });
  return <div id="article-list">{articleDisplay}</div>;
};

const mapStateToProps = state => {
  return {
    articles: state.articles,
    selectedCategory: state.selectedCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
