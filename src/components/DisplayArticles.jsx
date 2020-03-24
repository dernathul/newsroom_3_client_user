import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchArticles} from '../state/actions/articleAction';
import { bindActionCreators } from 'redux'

class DisplayArticles extends Component {

  componentDidMount() {
  this.props.fetchArticles()
  }
  render() {
    let articleDisplay = this.props.articles.map(article => {
      return(
        <>
          <h4>{article.title}</h4>
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
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
