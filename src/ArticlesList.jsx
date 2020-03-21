import React, { Component } from 'react';
import axios from 'axios'

class ArticlesList extends Component {

  state = {
    articlesIndex: []
  }

  componentDidMount() {
    debugger
    axios.get('/articles').then(response => {
      debugger
      this.setState({
        articlesIndex: response.data.articles
      })
    })
  }

  render (){
    const articlesIndex = this.state.articlesIndex
    let showArticles

    if (articlesIndex.length > 0) {
      showArticles = articlesIndex.map(article => {
        return (
          <>
            <div key={article.id} className='article'>
              <div className=".article-title">{article.title}</div>
              <div className=".article-content">{article.content}</div>
            </div>
          </>
        )
      })
    }
    return (
      <div>
        <div id="title">{showArticles}</div>
      </div>
    )
  }
}

export default ArticlesList
