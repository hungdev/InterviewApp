import * as actionTypes from '../actions/actionTypes'

const initialAuthState = {
  userToken: null,
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, userToken: action.token }
    case actionTypes.LOG_OUT:
      return { ...state, userToken: '' }

    default:
      return state
  }
}