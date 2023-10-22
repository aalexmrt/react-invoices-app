import { InvoiceForm } from '../components/form'
export default function FormPage({
  addNewInvoice,
  editInvoice,
  getInvoiceById,
}) {
  return (
    <main className="min-h-[100vh] mx-[10rem] flex items-center justify-center ">
      <InvoiceForm
        addNewInvoice={addNewInvoice}
        editInvoice={editInvoice}
        getInvoiceById={getInvoiceById}
      />
    </main>
  )
}
