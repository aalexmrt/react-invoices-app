import { useCallback, useState, useEffect } from 'react'
import useInvoiceFormState from './invoices/useInvoiceFormState'
import useCommonFormState from './useCommonFormState'
import { INVOICE_INITIAL_STATE } from '@reducers/formInvoiceReducer'
import { COMMON_FORM_INITIAL_STATE } from '@reducers/formCommonReducer'
function createFormHook(useFormState, service) {
  return function useCustomForm(params) {
    const [rootReducer, setRootReducer] = useState({
      state: { ...COMMON_FORM_INITIAL_STATE, ...INVOICE_INITIAL_STATE },
      reducer: {},
    })

    const commonFormState = useCommonFormState(rootReducer.state)
    const invoiceFormState = useInvoiceFormState(rootReducer.state)

    useEffect(() => {
      setRootReducer((prevState) => ({
        ...prevState,
        state: { ...commonFormState.state, ...invoiceFormState.state },
        reducer: { ...commonFormState, ...invoiceFormState },
      }))
    }, [])

    const submitForm = useCallback(async (data) => {
      try {
        rootReducer.reducer.submitFormLoading()
        const response = await service(data)
        rootReducer.submitFormSuccess()
        return response
      } catch (error) {
        rootReducer.submitFormError(error)
      }
    }, [])

    return {
      rootReducer,
      submitForm,
    }
  }
}

export default createFormHook
