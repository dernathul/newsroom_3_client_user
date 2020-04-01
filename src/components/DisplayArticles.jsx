import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleArticle } from "../state/actions/articleAction";

const DisplayArticles = props => {
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
      <div className="ui main container">
        <div class="ui three doubling stackable cards">
          <div id="card" class="ui centered card">
            <div class="ui placeholder">
              <div class="square image"></div>
            </div>
            <div class="content">
              <div id={`article-${article.id}`} key={article.id}>
                <h3 class="header" id="title">
                  {article.title}
                </h3>
                <div class="meta">
                  <span class="price" id="snippet">
                    {article.snippet}
                  </span>
                </div>
                <button
                  class="ui primary button"
                  id="open-article"
                  onClick={() => showArticle(article.id)}
                  key={article.id}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
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
