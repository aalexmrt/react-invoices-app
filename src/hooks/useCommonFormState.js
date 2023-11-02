// useCommonFormState.js
import { useReducer } from 'react'
import { createAction, COMMON_FORMS_ACTIONS } from '@reducers/actions'
import formCommonReducer, {
  COMMON_FORM_INITIAL_STATE,
} from '@reducers/formCommonReducer'

function useCommonFormState(initialState = COMMON_FORM_INITIAL_STATE) {
  const [state, dispatch] = useReducer(formCommonReducer, initialState)
  console.log(state, 'from useCommonFormState')
  const changeInput = ({ name, value }) => {
    return dispatch(
      createAction(COMMON_FORMS_ACTIONS.CHANGE_INPUT, {
        payload: { name, value },
      })
    )
  }
  const submitFormLoading = () =>
    dispatch(createAction(COMMON_FORMS_ACTIONS.SUBMIT_FORM_LOADING))
  const submitFormSuccess = () =>
    dispatch(createAction(COMMON_FORMS_ACTIONS.SUBMIT_FORM_SUCCESS))
  const submitFormError = (error) =>
    dispatch(
      createAction(COMMON_FORMS_ACTIONS.SUBMIT_FORM_ERROR, { payload: error })
    )
  const setStateFromDataLoading = () =>
    dispatch(createAction(COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_LOADING))
  const setStateFromDataSuccess = (data) =>
    dispatch(
      createAction(COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_SUCCESS, {
        payload: data,
      })
    )
  const setStateFromDataError = (error) =>
    dispatch(
      createAction(COMMON_FORMS_ACTIONS.SET_STATE_FROM_DATA_ERROR, {
        payload: error,
      })
    )

  return {
    state,
    changeInput,
    submitFormError,
    submitFormLoading,
    submitFormSuccess,
    setStateFromDataError,
    setStateFromDataLoading,
    setStateFromDataSuccess,
  }
}

export default useCommonFormState
