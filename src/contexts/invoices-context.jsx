import { createContext, useReducer } from 'react'
import {
  invoicesReducer,
  INVOICES_INITIAL_STATE,
  INVOICES_ACTIONS,
} from '../reducers/invoicesReducer.js'
import { createInitialState } from '../reducers/common.js'
export const InvoicesContext = createContext()

function useInvoicesReducer() {
  const [state, dispatch] = useReducer(
    invoicesReducer,
    INVOICES_INITIAL_STATE,
    createInitialState
  )

  const removeInvoice = (payload) =>
    dispatch({ type: INVOICES_ACTIONS.DELETE_INVOICE, payload })

  const loadInvoicesLoading = (payload) =>
    dispatch({ type: INVOICES_ACTIONS.LOAD_INVOICES_LOADING, payload })

  const loadInvoicesSuccess = (payload) =>
    dispatch({ type: INVOICES_ACTIONS.LOAD_INVOICES_SUCCESS, payload })

  const loadInvoicesError = (payload) =>
    dispatch({ type: INVOICES_ACTIONS.LOAD_INVOICES_ERROR, payload })

  return {
    state,
    loadInvoicesLoading,
    loadInvoicesSuccess,
    loadInvoicesError,
    removeInvoice,
  }
}

export function InvoicesProvider({ children }) {
  const {
    state,
    loadInvoicesLoading,
    loadInvoicesSuccess,
    loadInvoicesError,
    removeInvoice,
  } = useInvoicesReducer()
  return (
    <InvoicesContext.Provider
      value={{
        invoices: state,
        loadInvoicesLoading,
        loadInvoicesSuccess,
        loadInvoicesError,
        removeInvoice,
      }}
    >
      {children}
    </InvoicesContext.Provider>
  )
}
