import * as actionTypes from '../actions/actionTypes'

export const setLateMess = (mess) => {
  return {
    type: actionTypes.SET_LATE_MESS,
    mess
  }
}
export const setChannel = (channel) => {
  return {
    type: actionTypes.SET_CHANNEL,
    channel
  }
}

// mess late
export const changeMessage = (data) => {
  return {
    type: actionTypes.CHANGE_MESS,
    data
  }
}

//mess remote
export const changeMessageRemote = (data) => {
  return {
    type: actionTypes.CHANGE_MESS_REMOTE,
    data
  }
}
