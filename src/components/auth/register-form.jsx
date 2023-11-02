import { Input, Button } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

import { useRegisterForm } from '@hooks/users/usersForms'
import PasswordEyeToggleButton from '@components/auth/password-eye-toggle-button'
import usePasswordVisibility from '@hooks/users/usePasswordVisibility'

export default function RegisterForm() {
  const { formState, submitForm } = useRegisterForm()
  const { state, changeInput } = formState
  const { passwordIsVisible, passwordInputType, togglePasswordVisibility } =
    usePasswordVisibility()
  const { data, error } = state
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    changeInput({ name, value })
  }

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    // Add form validation here
    const { name, email, password, username } = data
    if (!name || !email || !password || !username) {
      // Handle form validation error
      return
    }
    const user = { name, email, password, username }
    await submitForm(user)
    if (!state.error) {
      navigate('/login')
    } else {
      // Display error to user
    }
  }

  const inputTypes = {
    username: 'text',
    password: passwordInputType,
    email: 'email',
    name: 'text',
  }

  return (
    <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
      {Object.keys(data).map((key) => (
        <Input
          key={key}
          name={key}
          variant="bordered"
          value={data[key]}
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
      {error && <div>{error}</div>}
      <Button onClick={handleRegisterSubmit} color="primary">
        Register
      </Button>
    </form>
  )
}
