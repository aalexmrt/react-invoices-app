import { useParams } from 'react-router-dom'
import InvoiceDetailTable from '@components/invoices/invoice-detail/InvoiceDetail'
import useSingleInvoice from '@hooks/useSingleInvoice'

const issuerData = {
  name: 'Sparksuite, Inc.',
  address: '12345 Sunny Road',
  city: 'Sunnyville, TX 12345',
  legalId: 'C23452344',
}

export default function InvoiceDetail() {
  const { id } = useParams()

  const { singleInvoice, isLoading, isError } = useSingleInvoice({ id })
  if (singleInvoice === undefined) return

  return (
    <main className="min-h-[100vh] mx-[10rem] flex flex-col gap-2 pt-8">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {!isLoading && !isError && !singleInvoice && <p>Invoice not found</p>}
      {!isLoading && !isError && singleInvoice && (
        <InvoiceDetailTable invoice={singleInvoice} issuer={issuerData} />
      )}
    </main>
  )
}
