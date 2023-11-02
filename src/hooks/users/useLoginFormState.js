// useLoginFormState.js
import useCommonFormState from '@hooks/useCommonFormState'
import { LOGIN_INITIAL_STATE } from '@reducers/users/formLoginReducer'

function useLoginFormState() {
  return useCommonFormState({ initialState: LOGIN_INITIAL_STATE })
}

export default useLoginFormState
