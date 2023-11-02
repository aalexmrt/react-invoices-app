export const INVOICES_INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
}

export const INVOICES_ACTIONS = {
  ADD_INVOICE: 'ADD_INVOICE',
  DELETE_INVOICE: 'DELETE_INVOICE',
  LOAD_INVOICES_LOADING: 'LOAD_INVOICES',
  LOAD_INVOICES_SUCCESS: 'LOAD_INVOICES_SUCCESS',
  LOAD_INVOICES_ERROR: 'LOAD_INVOICES_ERROR',
}

export function invoicesReducer(state, action) {
  const { type } = action

  switch (type) {
    case INVOICES_ACTIONS.ADD_INVOICE:
      return [...state, action.payload]
    case INVOICES_ACTIONS.DELETE_INVOICE:
      return {
        ...state,
        data: state.data.filter((invoice) => invoice.id !== action.payload.id),
      }
    case INVOICES_ACTIONS.LOAD_INVOICES_LOADING:
      return { ...state, loading: true, error: '' }
    case INVOICES_ACTIONS.LOAD_INVOICES_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: '' }
    case INVOICES_ACTIONS.LOAD_INVOICES_ERROR:
      return { ...state, loading: false, error: action.payload }

    default:
  }
}
