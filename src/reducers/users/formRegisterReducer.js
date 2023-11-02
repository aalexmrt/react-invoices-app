// formRegisterReducer.js
import { COMMON_FORM_INITIAL_STATE } from '@reducers/formCommonReducer'

const REGISTER_INITIAL_STATE = {
  ...COMMON_FORM_INITIAL_STATE,
  data: {
    username: '',
    password: '',
    email: '',
    name: '',
  },
}

export { REGISTER_INITIAL_STATE }
