import React from 'react';
import { connect } from 'react-redux'
// import ArticlesList from './components/ArticlesList';
import DisplayArticles from './components/DisplayArticles'

const App = props => {

  
    return (
      <>
        <h1>The Mars Times</h1>
        <DisplayArticles />
        {/* <ArticlesList /> */}
      </>
    )
}

export default App





