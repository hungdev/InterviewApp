// reducers/index.js

import { combineReducers } from 'redux'
import auth from './authReducer'
import question from './questionReducer'

const rootReducer = combineReducers({
  auth,
  question
})

export default rootReducer
