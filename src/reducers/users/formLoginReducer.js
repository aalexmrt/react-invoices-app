// formLoginReducer.js
import { COMMON_FORM_INITIAL_STATE } from '@reducers/formCommonReducer'

const LOGIN_INITIAL_STATE = {
  ...COMMON_FORM_INITIAL_STATE,
  data: {
    username: '',
    password: '',
  },
}

export { LOGIN_INITIAL_STATE }
