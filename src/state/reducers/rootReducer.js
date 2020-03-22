import initialState from '../store/initialState'
const rootReducer = (state = initialState, action) => {
    // debugger
    return {
        ...state,
        message: action.payload || initialState.message
    }
}
export default rootReducer