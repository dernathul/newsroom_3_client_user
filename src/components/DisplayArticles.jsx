import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleArticle } from '../state/actions/articleAction'

const DisplayArticles = props => {
  const showArticle = articleId => {
    props.fetchSingleArticle(articleId)
  }
  
    let articleDisplay = this.props.articles.map(article => {
      return (
        <div id={"article-" + article.id}>
          <h4 id="title" key={article.id}>
            {article.title}
          </h4>
          <h5 id="snippet">{article.snippet}</h5>
          <button
            id="open-article"
            onClick={() => showArticle(article.id)}
            key={article.id}
          >
            Read more
          </button>
        </div>
      );
    });
    return <>{articleDisplay}</>;
  }

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};
  const mapDispatchToProps = dispatch => {
    return {
      fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
