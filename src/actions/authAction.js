import {
  SET_TOKEN,
  LOG_OUT
} from './actionTypes'

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token
  }
}
export const logout = () => {
  return {
    type: LOG_OUT,
  }
}
