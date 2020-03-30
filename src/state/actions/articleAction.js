import axios from "axios";
import { GET_ARTICLE_DATA, GET_SINGLE_ARTICLE_DATA } from "./actionTypes";

const apiURL = "https://newsroom3api.herokuapp.com/api/v1/articles";

const fetchArticles = () => {
  return async dispatch => {
    let response = await axios.get(apiURL);
    return dispatch(dispatchArticleAction(response.data));
  };
};

const fetchSingleArticle = articleId => {
  return async dispatch => {
    let response = await axios.get(`/articles/${articleId}`);
    return dispatch(dispatchSingleArticleAction(response.data));
  };
};

const dispatchArticleAction = json => {
  return { type: GET_ARTICLE_DATA, payload: json };
};

const dispatchSingleArticleAction = json => {
  return { type: GET_SINGLE_ARTICLE_DATA, payload: json.article };
};

export { fetchArticles, fetchSingleArticle };
