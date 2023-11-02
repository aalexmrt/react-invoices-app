import { Button } from '@nextui-org/react'
import { Link, Outlet } from 'react-router-dom'

import { Invoices } from '@components/invoices/invoices-table'
import useInvoices from '@hooks/useInvoices'
import MainLayout from '@components/layout/main-layout'

export default function DashboardPage() {
  const { invoices, removeInvoice } = useInvoices()
  const { loading, error, data } = invoices

  return (
    <MainLayout>
      <Link to="/invoices/add">
        <div className="w-full flex">
          <Button color="primary">Add invoice</Button>
        </div>
      </Link>
      <div>
        <Invoices
          invoices={data}
          loading={loading}
          error={error}
          removeInvoice={removeInvoice}
        />
      </div>
      <Outlet />
    </MainLayout>
  )
}
