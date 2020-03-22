import axios from 'axios'

const apiURL = 'http://localhost:3000/api/v1/articles'

const fetchArticles = () => {
  return dispatch => {
    return axios.get(apiURL)
    .then(
      response => dispatch(
        {type: 'GET_ARTICLE_DATA', payload: response.data}
      )
    )
  }
}

export { fetchArticles }