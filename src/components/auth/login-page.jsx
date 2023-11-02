import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useLoginForm } from '@hooks/users/usersForms'
import usePasswordVisibility from '@hooks/users/usePasswordVisibility'
import PasswordEyeToggleButton from '@components/auth/password-eye-toggle-button'

export default function LoginForm() {
  const { formState, submitForm } = useLoginForm()
  const { state, changeInput } = formState
  const { passwordIsVisible, passwordInputType, togglePasswordVisibility } =
    usePasswordVisibility()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    changeInput({ name, value })
  }

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = state.data
    const user = {
      username,
      password,
    }
    const json = await submitForm(user)
    if (!state.error) {
      localStorage.setItem('token', json.token)
      navigate('/invoices')
      console.log('login success')
    }
    console.log(state.error)
  }

  const inputTypes = {
    username: 'text',
    password: passwordInputType,
  }

  return (
    <form className="flex flex-col gap-4">
      {Object.keys(state.data).map((key) => (
        <Input
          key={key}
          name={key}
          variant="bordered"
          value={state.data[key]}
          onChange={handleChange}
          type={inputTypes[key]}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          placeholder={`Enter your ${key}`}
          labelPlacement="outside"
          endContent={
            key === 'password' ? (
              <PasswordEyeToggleButton
                isVisible={passwordIsVisible}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            ) : null
          }
        />
      ))}

      <Button onClick={handleLoginSubmit} color="primary">
        Login
      </Button>
    </form>
  )
}
