import { useState } from 'react'

export default function usePasswordVisibility() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordIsVisible(!passwordIsVisible)
  }

  const passwordInputType = passwordIsVisible ? 'text' : 'password'

  return { passwordIsVisible, passwordInputType, togglePasswordVisibility }
}
