export const INITIAL_STATE = {
  number: '',
  date: '',
  customer: '',
  products: [{ name: '', price: 0, quantity: 0, total: 0 }],
  loadingInvoice: false,
  errorInvoice: false,
  loadingCustomer: false,
  errorCustomer: false,
}

export function createInitialState(formData) {
  return formData
}

export function formReducer(state, action) {
  const { type } = action

  if (type === 'RESET_FORM') return INITIAL_STATE

  if (type === 'LOAD_FORM_DATA') {
    const { number, date, customer, products } = action.payload
    return { ...state, number, date, customer, products }
  }

  if (type === 'CHANGE_INPUT') {
    const { name, value } = action.payload
    return { ...state, [name]: value }
  }

  if (type === 'CHANGE_INPUT_PRODUCT') {
    const { name, value, index } = action.payload
    const newProduct = { ...state.products[index], [name]: value }
    const { price, quantity } = newProduct
    newProduct.total = price * quantity

    return {
      ...state,
      products: state.products.map((product, i) =>
        i === index ? newProduct : product
      ),
    }
  }

  if (type === 'ADD_NEW_PRODUCT') {
    return {
      ...state,
      products: [
        ...state.products,
        { name: '', price: 0, quantity: 0, total: 0 },
      ],
    }
  }

  throw new Error(`Unhandled action type: ${type}`)
}
