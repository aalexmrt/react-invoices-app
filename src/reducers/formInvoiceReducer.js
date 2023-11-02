// formInvoiceReducer.js
import { FORM_INVOICE_ACTIONS } from './actions'

const INVOICE_INITIAL_STATE = {
  data: {
    date: '',
    number: 0,
    customer: '',
    products: [{ name: '', price: 0, quantity: 0, total: 0 }],
  },
  initialDataCopy: {},
}

const formInvoiceHandlers = {
  [FORM_INVOICE_ACTIONS.CHANGE_INPUT_PRODUCT]: (state, action) => {
    const { name, value, index } = action.payload
    const newProductsList = [...state.data.products]
    const newProduct = newProductsList[index]
    newProduct[name] = value
    newProduct.total = newProduct.price * newProduct.quantity

    return {
      ...state,
      data: { ...state.data, products: newProductsList },
    }
  },
  [FORM_INVOICE_ACTIONS.ADD_PRODUCT_LINE]: (state) => {
    const { products } = state.data

    return {
      ...state,
      data: {
        ...state.data,
        products: [
          ...state.data.products,
          { name: '', price: 0, quantity: 0, total: 0 },
        ],
      },
    }
  },

  [FORM_INVOICE_ACTIONS.LOAD_FORM_DATA_LOADING]: (state) => ({
    ...state,
    loading: true,
    error: '',
  }),
  [FORM_INVOICE_ACTIONS.LOAD_FORM_DATA_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
    error: '',
  }),
  [FORM_INVOICE_ACTIONS.LOAD_FORM_DATA_ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
  [FORM_INVOICE_ACTIONS.SET_DATA_DEEP_CLONE]: (state, action) => ({
    ...state,
    dataDeepClone: action.payload,
  }),
}

function formInvoiceReducer(state, action) {
  console.log(state, action)
  const handler = formInvoiceHandlers[action.type]
  const test = handler ? handler(state, action) : state
  console.log(test, 'this is test')
  return handler ? handler(state, action) : state
}

export { INVOICE_INITIAL_STATE }
export default formInvoiceReducer
