// import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuthContext from '@hooks/useAuthContext'

function ProtectedRoute() {
  const isAuthenticated = useAuthContext()
  if (isAuthenticated.token === '') return <Navigate to="/auth/login" />
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />
}

export default ProtectedRoute
