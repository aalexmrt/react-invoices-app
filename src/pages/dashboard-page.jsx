import { ListOfInvoices } from '../components/invoices/list-of-invoices'

export default function DashboardPage({ invoices, removeInvoice }) {
  return (
    <main className="min-h-[100vh] mx-[10rem] flex items-center">
      <ListOfInvoices invoices={invoices} removeInvoice={removeInvoice} />
    </main>
  )
}
