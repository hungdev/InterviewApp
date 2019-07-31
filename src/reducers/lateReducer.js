import * as actionTypes from '../actions/actionTypes'
import uuidv4 from 'uuid/v4'
import _ from 'lodash'

const initialAuthState = {
  channel: {},
  lateMessages: [
    { id: 1, time: '15', mess: 'Due to personal issue, I will be 15 mins late and work compensate later. Please be informed!' },
    { id: 2, time: '20', mess: 'Due to personal issue, I will be 20 mins late and work compensate later. Please be informed!' },
    { id: 3, time: '30', mess: 'Due to personal issue, I will be 30 mins late and work compensate later. Please be informed!' },
    { id: 4, time: '40', mess: 'Due to personal issue, I will be 40 mins late and work compensate later. Please be informed!' },
  ],
  remoteMess: [
    { id: 1, time: 'Morning', mess: 'Due to personal issue, I would like to remote this morning. Please be informed!' },
    { id: 2, time: 'Afternoon', mess: 'Due to personal issue, I would like to remote this afternoon. Please be informed!' },
    { id: 3, time: 'Tomorrow', mess: 'Due to personal issue, I would like to remote tomorrow. Please be informed!' },
    { id: 4, time: 'Morning Tomorrow', mess: 'Due to personal issue, I would like to remote morning tomorrow. Please be informed!' },
  ],
}

export default (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LATE_MESS:
      return { ...state, lateMessages: [{ id: uuidv4(), mess: action.mess }, ...state.lateMessages] }

    case actionTypes.CHANGE_MESS:
      return {
        ...state,
        lateMessages: _.map(state.lateMessages, item => {
          if (item.id === action.data.id) {
            item.mess = action.data.mess
          }
          return item
        })
      }

    case actionTypes.CHANGE_MESS_REMOTE:
      return {
        ...state,
        remoteMess: _.map(state.remoteMess, item => {
          if (item.id === action.data.id) {
            item.mess = action.data.mess
          }
          return item
        })
      }

    case actionTypes.SET_CHANNEL:
      return { ...state, channel: action.channel }

    case actionTypes.LOG_OUT:
      return initialAuthState
    default:
      return state
  }
}