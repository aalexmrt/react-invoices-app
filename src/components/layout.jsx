import { Outlet } from 'react-router-dom'
import MainLayout from '@components/layout/main-layout'

export default function Layout({ children }) {
  return (
    <MainLayout className="min-h-[100vh] mx-[5rem] flex items-center justify-center ">
      <Outlet />
    </MainLayout>
  )
}
