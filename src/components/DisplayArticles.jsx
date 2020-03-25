import React, { Component } from "react";
import { connect } from 'react-redux';

class DisplayArticles extends Component {

  render() {
    let articleDisplay = this.props.articles.map(article => {
      return (
        <div id={'article-' + article.id} >
          <h4 id="title" key={article.id}>{article.title}</h4>
          <h5 id="snippet">{article.snippet}</h5>
        </div>
      )
    })
    return (
      <>
        {articleDisplay}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(DisplayArticles);
