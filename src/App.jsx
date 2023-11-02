import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import { InvoicesProvider } from '@contexts/invoices-context'
import AuthProvider from '@contexts/auth-context'
import ProtectedRoute from '@components/navigation/protected-route'
import MainLayout from '@components/layout/main-layout'

const DashboardPage = React.lazy(() => import('@pages/invoices/dashboard-page'))
const FormPage = React.lazy(() => import('@pages/invoices/form-page'))
const InvoiceDetail = React.lazy(() => import('@pages/invoices/detail-page'))
const Register = React.lazy(() => import('@pages/auth/register-page'))
const Login = React.lazy(() => import('@pages/auth/login-page'))

function WelcomePage() {
  return (
    <MainLayout>
      <h1 className="text-4xl font-bold">Welcome to Invoices App</h1>
    </MainLayout>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <InvoicesProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="auth">
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="invoices" element={<ProtectedRoute />}>
                <Route path="add" element={<FormPage />} />
                <Route path=":id/edit" element={<FormPage />} />
                <Route path=":id/detail" element={<InvoiceDetail />} />
                <Route index element={<DashboardPage />} />
              </Route>
            </Routes>
          </Suspense>
        </InvoicesProvider>
      </AuthProvider>
    </Provider>
  )
}
