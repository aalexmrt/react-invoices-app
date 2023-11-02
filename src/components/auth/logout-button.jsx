export default function LogoutButton() {
  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => console.log('logout')}
    >
      Log Out
    </button>
  )
}
