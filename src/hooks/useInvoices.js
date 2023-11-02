import { useContext, useEffect, useCallback } from 'react'
import { InvoicesContext } from '@contexts/invoices-context'
import useAuthContext from './useAuthContext'
import { getInvoices, removeInvoiceFromDB } from '@services/invoices'
export default function useInvoices() {
  const context = useContext(InvoicesContext)
  const { token } = useAuthContext()

  if (context === undefined) {
    throw new Error('useInvoices must be used within a InvoicesProvider')
  }

  const _getInvoices = useCallback(async () => {
    const { loadInvoicesLoading, loadInvoicesSuccess, loadInvoicesError } =
      context
    try {
      loadInvoicesLoading()
      const response = await getInvoices({ token })
      loadInvoicesSuccess(response)
    } catch (error) {
      loadInvoicesError(error)
    }
  }, [getInvoices])

  useEffect(() => {
    _getInvoices()
  }, [])

  const removeInvoice = async (id) => {
    const { removeInvoice: _removeInvoice } = context
    const response = await removeInvoiceFromDB(id)
    _removeInvoice(response.invoice)
  }

  return { ...context, removeInvoice }
}
