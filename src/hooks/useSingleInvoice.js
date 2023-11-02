import { useState, useEffect } from 'react'
import useInvoices from './useInvoices'

export default function useSingleInvoice({ id = null }) {
  const {
    invoices: { data: _invoices = {} },
  } = useInvoices()
  console.log(_invoices)
  const [singleInvoice, setSingleInvoice] = useState({})

  const invoiceFromCache = () =>
    _invoices.find((singleInvoice) => singleInvoice.id === id)

  useEffect(() => {
    setSingleInvoice(invoiceFromCache())
  }, [id, invoiceFromCache])
  // const getSingleInvoice = async () => {
  //   if (singleInvoice == {}) {
  //     const newSingleInvoice = await getInvoiceByIdFromDB(id)
  //     setSingleInvoice(newSingleInvoice)
  //     return newSingleInvoice
  //   }
  //   return singleInvoice
  // }

  return { singleInvoice }
}
