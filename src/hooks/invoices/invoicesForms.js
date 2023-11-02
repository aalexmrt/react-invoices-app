// usersForms.js
import createFormHook from '@hooks/createFormHook'
import useInvoiceForm from '@hooks/invoices/useInvoiceForm'
import { addInvoice, editInvoice } from '@services/invoices.js'

export const useAddForm = createFormHook(useInvoiceForm, addInvoice)
export const useEditForm = createFormHook(useInvoiceForm, editInvoice)
