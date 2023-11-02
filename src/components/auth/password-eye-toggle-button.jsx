import { EyeFilledIcon, EyeSlashFilledIcon } from '@components/icons'

export default function PasswordEyeToggleButton({
  passwordIsVisible,
  togglePasswordVisibility,
}) {
  const passwordButtonStyle = 'text-2xl text-default-400 pointer-events-none'

  return (
    <button
      className="focus:outline-none"
      type="button"
      onClick={togglePasswordVisibility}
    >
      {passwordIsVisible ? (
        <EyeSlashFilledIcon className={passwordButtonStyle} />
      ) : (
        <EyeFilledIcon className={passwordButtonStyle} />
      )}
    </button>
  )
}
