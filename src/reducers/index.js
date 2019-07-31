// reducers/index.js

import { combineReducers } from 'redux'
import auth from './authReducer'
import late from './lateReducer'

const rootReducer = combineReducers({
  auth,
  late
})

export default rootReducer
