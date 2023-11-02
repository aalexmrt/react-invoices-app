// rootReducer.js
import { combineReducers } from 'redux'
import formCommonReducer from '@reducers/formCommonReducer'

const rootReducer = combineReducers({
  form: formCommonReducer,
})

export default rootReducer
