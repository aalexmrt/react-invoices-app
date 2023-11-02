// usersForms.js
import createFormHook from '@hooks/createFormHook'
import useLoginFormState from '@hooks/users/useLoginFormState'
import useRegisterFormState from '@hooks/users/useRegisterFormState'
import { loginUser, registerUser } from '@services/users.js'

export const useLoginForm = createFormHook(useLoginFormState, loginUser)
export const useRegisterForm = createFormHook(
  useRegisterFormState,
  registerUser
)
