import React from 'react';
import { connect } from 'react-redux';
import DisplayArticles from './components/DisplayArticles';
import { fetchArticles } from './state/actions/articleAction';
import { bindActionCreators } from 'redux'

const App = props => {
  props.fetchArticles()

  return (
    <>
      <h1>The Mars Times</h1>
      <DisplayArticles />
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App)