import initialState from '../store/initialState'
import { GET_ARTICLE_DATA } from '../actions/actionTypes'


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLE_DATA:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default rootReducer