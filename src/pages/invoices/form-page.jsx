// form-page.jsx
import { useParams } from 'react-router-dom'

import { InvoiceForm } from '@components/invoices/invoice-form'
import MainLayout from '@components/layout/main-layout'
import { useCustomers } from '@hooks/useCustomers'
import { useAddForm, useEditForm } from '@hooks/invoices/invoicesForms'

export function useForm(id) {
  const addForm = useAddForm()
  const editForm = useEditForm({ id })

  return id ? editForm : addForm
}

export default function FormPage() {
  const { id } = useParams()
  const { rootReducer, submitForm } = useForm(id)

  const { state, reducer } = rootReducer
  const { addProductLine, changeInput, changeInputProduct } = reducer

  const { data } = state

  const { customersList, loadingCustomers } = useCustomers()

  if (loadingCustomers || (id && !data)) return 'Loading...'

  const handleSubmit = async (data) => {
    try {
      await submitForm(data)
      // handle success (e.g. redirect to another page)
    } catch (error) {
      // handle error
    }
  }

  return (
    <MainLayout>
      <h1>asdf</h1>
      <InvoiceForm
        invoiceFormData={data}
        customersList={customersList}
        addProductLine={addProductLine}
        changeInput={changeInput}
        changeInputProduct={changeInputProduct}
        onSubmit={handleSubmit}
      />
    </MainLayout>
  )
}
