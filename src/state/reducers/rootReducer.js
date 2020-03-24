import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
      case 'GET_ARTICLE_DATA':
        return {
          ...state,
          ...action.payload
        }

  default:
  // debugger
    return state
    }

    // return {
  //   ...state,
  //   message: action.payload || initialState.message
  // }
}
export default rootReducer