// formCommonReducer.js
import { COMMON_FORMS_ACTIONS } from './actions'

const COMMON_FORM_INITIAL_STATE = {
  loading: false,
  error: null,
}

const commonHandlers = {
  [COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_LOADING]: (state) => ({
    ...state,
    loading: true,
    error: '',
  }),
  [COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_SUCCESS]: (state, action) =>
    console.log(action),
  // [COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_SUCCESS]: (state, action) => ({
  //   ...state,
  //   loading: false,
  //   error: '',
  //   data: action.payload,
  // }),
  [COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [COMMON_FORMS_ACTIONS.SUBMIT_FORM_LOADING]: (state) => ({
    ...state,
    loading: true,
    error: '',
  }),
  [COMMON_FORMS_ACTIONS.SUBMIT_FORM_SUCCESS]: (state) => ({
    ...state,
    loading: false,
    error: '',
  }),
  [COMMON_FORMS_ACTIONS.SUBMIT_FORM_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [COMMON_FORMS_ACTIONS.CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload

    return { ...state, data: { ...state.data, [name]: value } }
  },
}

function formCommonReducer(state = COMMON_FORM_INITIAL_STATE, action) {
  const handler = commonHandlers[action.type]
  return handler ? handler(state, action) : state
}

export { COMMON_FORM_INITIAL_STATE, commonHandlers }
export default formCommonReducer
