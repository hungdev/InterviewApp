import * as actionTypes from '../actions/actionTypes'

const initialAuthState = {
  password: 'Nexus@123',
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_PASSWORD:
      return { ...state, password: action.pass }

    default:
      return state
  }
}