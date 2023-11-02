import LogoutButton from '@components/auth/logout-button'
export default function NavBar() {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          {/* <MainNav /> */}
          <LogoutButton />
        </div>
      </nav>
    </div>
  )
}
