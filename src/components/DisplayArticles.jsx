import React, { Component } from "react";
import { connect } from 'react-redux';

class DisplayArticles extends Component {

  render() {
    let articleDisplay = this.props.articles.map(article => {
      return (
        <>
          <h4 key={article.id}>{article.title}</h4>
          <h5>{article.snippet}</h5>
          <p>{article.content}</p>
        </>
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
