// useInvoiceFormState.js
import { useReducer } from 'react'
import formInvoiceReducer, {
  INVOICE_INITIAL_STATE,
} from '@reducers/formInvoiceReducer'
import { createAction, FORM_INVOICE_ACTIONS } from '@reducers/actions'

function useInvoiceFormState(initialState = INVOICE_INITIAL_STATE) {
  const [state, dispatch] = useReducer(formInvoiceReducer, initialState)

  const changeInputProduct = ({ name, value, index }) =>
    dispatch(
      createAction(FORM_INVOICE_ACTIONS.CHANGE_INPUT_PRODUCT, {
        payload: { name, value, index },
      })
    )

  const addProductLine = () =>
    dispatch(createAction(FORM_INVOICE_ACTIONS.ADD_PRODUCT_LINE))

  return {
    state,
    changeInputProduct,
    addProductLine,
  }
}

export default useInvoiceFormState
