import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DATA:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.GET_SINGLE_ARTICLE_DATA:
      return {
        ...state,
        singleArticle: action.payload,
        articleList: false,
        showForm: false
      };

    case actionTypes.BACK_TO_ARTICLES_LIST:
      return {
        ...state,
        singleArticle: undefined,
        articleList: true
      };

    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory,
        activeItem: action.payload,
        singleArticle: undefined,
        articleList: true
      }
    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        ...action.payload
      }

    case actionTypes.SHOW_SUBSCRIPTION_FORM:
      return {
        ...state,
        ...action.payload,
        articleList: false,
      }
    default:
      return state;
  }
};

export default rootReducer;
