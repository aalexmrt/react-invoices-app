// useInvoiceForm.js
import { useEffect } from 'react'
import useInvoiceFormState from '@hooks/invoices/useInvoiceFormState'
import { INVOICE_INITIAL_STATE } from '@reducers/formInvoiceReducer'
import { getInvoice } from '@services/invoices'

function useInvoiceForm({ id } = { id: null }) {
  const invoiceFormState = useInvoiceFormState(INVOICE_INITIAL_STATE)

  useEffect(() => {
    const _getInvoice = async () => {
      if (!id) return

      invoiceFormState.setStateFromDataLoading()
      try {
        const invoice = await getInvoice(id)
        invoiceFormState.setStateFromDataSuccess(invoice)
      } catch (error) {
        invoiceFormState.setStateFromDataError(error)
      }
    }

    _getInvoice()
  }, [id])
  return invoiceFormState
}

export default useInvoiceForm
