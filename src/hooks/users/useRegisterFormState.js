// useRegisterFormState.js
import useCommonFormState from '@hooks/useCommonFormState.js'
import { REGISTER_INITIAL_STATE } from '@reducers/users/formRegisterReducer'

function useRegisterFormState() {
  return useCommonFormState({ initialState: REGISTER_INITIAL_STATE })
}

export default useRegisterFormState
