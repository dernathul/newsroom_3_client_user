import React from 'react';
import { connect } from 'react-redux'

const DisplaySingleArticle = props => {
  let articleDetails
  let article = props.singleArticle
  articleDetails = (
    <>
      <h3 key={article.title}>{article.title}</h3>
      <h5 key={article.snippet}>{article.snippet}</h5>
      <p key={article.content}>{article.content}</p>
    </>
  )
  return (
    <div id="single-article">
      {articleDetails}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  }
}


export default connect(mapStateToProps)(DisplaySingleArticle)
