import * as actionTypes from '../actions/actionTypes'

export const setInfoDoExam = (data) => {
  return {
    type: actionTypes.SET_INFO_DO_EXAM,
    data
  }
}
export const removeInfoDoExam = () => {
  return {
    type: actionTypes.REMOVE_INFO_DO_EXAM
  }
}