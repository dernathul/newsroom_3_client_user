import axios from 'axios'

const apiURL = 'http://localhost:3000/api/v1/articles'

const fetchArticles = () => {
  return async dispatch => {
    let response = await axios.get(apiURL)
    return dispatch(dispatchArticleAction(response.data))
  }
}

const dispatchArticleAction = json => {
  return { type: 'GET_ARTICLE_DATA', payload: json }
}

export { fetchArticles }