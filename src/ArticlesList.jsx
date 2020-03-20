import React, { Component } from 'react';
import axios from "axios";

class ArticlesList extends Component {
  state = {
    articles_list: []
  };


  componentDidMount() { axios.get('/articles')
      .then(response => {
        this.setState({
          articles_list: response.data.articles
        })
      })
  }
  render() {
    return (
      <div>
   dkdkdk
      </div>
    )
  }}


export default ArticlesList
