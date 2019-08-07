import * as actionTypes from '../actions/actionTypes'
// import uuidv4 from 'uuid/v4'
import _ from 'lodash'

const initialAuthState = {
  infoDoExam: []
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.SET_INFO_DO_EXAM:
      return { ...state, infoDoExam: [action.data, ...state.infoDoExam] }
    case actionTypes.REMOVE_INFO_DO_EXAM:
      return { ...state, infoDoExam: [] }

    default:
      return state
  }
}