// import React, { Component } from 'react';
// import axios from 'axios'

// class ArticlesList extends Component {

//   state = {
//     articlesIndex: []
//   }

//   componentDidMount() {
//     axios.get('/articles').then(response => {
//       this.setState({
//         articlesIndex: response.data.articles
//       })
//     })
//   }

//   render() {
//     const articlesIndex = this.state.articlesIndex
//     let showArticles
//     if (articlesIndex !== []) {
//       showArticles = articlesIndex.map(article => {
//         return (        
//           <div id={'article-' + article.id} key={article.id}>
//             <h3 id="title">{article.title}</h3>
//             <p id="snippet">{article.snippet}</p>
//             <p id="snippet">{article.content}</p>
//           </div>
//         )
       
//       })
//     }
//     return (
//       <div>{showArticles}</div>
//     )
//   }
// }

// export default ArticlesList
