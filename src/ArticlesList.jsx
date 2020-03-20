import React, { Component } from 'react';
import axios from 'axios'

export class ArticlesList extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    debugger
    axios.get('/articles').then((response) => {
      this.setState({ articles: response.data.articles })
    })


  }
  render() {
    let showArticles
    showArticles = this.state.articles.map((article) => {
      return(
        <div id = "title" key={article.id}>
          <h1 >{article.title}</h1>
        </div>
      )
    }
    )
    return (
      <div>
        {showArticles}
      </div>
    )
  }
}

export default ArticlesList
