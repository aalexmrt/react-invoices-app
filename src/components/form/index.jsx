import { useState, useEffect, useReducer } from 'react'
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import {
  formReducer,
  INITIAL_STATE,
  createInitialState,
} from '../../store/invoice-form.js'

import { useParams } from 'react-router-dom'

function useCustomers() {
  const [customers, setCustomers] = useState([])

  const getCustomers = async () => {
    const response = await fetch('http://localhost:3000/customers')
    const json = await response.json()
    setCustomers(json)
  }
  useEffect(() => {
    getCustomers()
  }, [])
  return { customers }
}

function InvoiceForm({ addNewInvoice, editInvoice, getInvoiceById }) {
  const params = useParams()
  const { customers } = useCustomers()

  const [state, dispatch] = useReducer(
    formReducer,
    INITIAL_STATE,
    createInitialState
  )
  useEffect(() => {
    if (!params.id) return

    const updateInvoice = async () => {
      const invoice = await getInvoiceById(params.id)
      dispatch({ type: 'LOAD_FORM_DATA', payload: invoice })
    }

    updateInvoice()
  })

  // const { customers } = useCustomers()

  const handleChange = (e) => {
    const { name, value } = e.target
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name, value },
    })
  }

  const handleChangeProduct = (event, index) => {
    const { name, value } = event.target
    dispatch({
      type: 'CHANGE_INPUT_PRODUCT',
      payload: { name, value, index },
    })
  }

  const handleAddProduct = () => {
    dispatch({
      type: 'ADD_NEW_PRODUCT',
    })
  }

  const submitForm = async (data) => {
    // Edit invoice
    if (params.id) {
      return editInvoice(params.id, data)
    }

    return addNewInvoice(data)
  }
  const handleSubmit = (e) => {
    submitForm(state)
  }
  console.log(state)
  return (
    <form className="grid mb-6 md:mb-0 gap-10" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <Input
          name="number"
          value={state.number}
          onChange={handleChange}
          type="text"
          label="Invoice number"
          placeholder="INV-0001"
          labelPlacement="outside"
        />

        <Input
          name="date"
          value={state.date}
          onChange={handleChange}
          type="text"
          label="Date"
          placeholder="5/11/23"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center"></div>
          }
        />

        <Select
          label="Customer"
          placeholder="Customer"
          className="max-w-xs"
          onChange={handleChange}
          name="customer"
          // defaultSelectedKeys={
          //   selectedCustomer !== '' ? [selectedCustomer] : []
          // }
          // value={selectedCustomer}
          labelPlacement="outside"
        >
          {customers.map((customer) => (
            <SelectItem key={customer.id} value={customer.id}>
              {customer.name}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="products">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold pb-4">Products</h2>
          <Button onClick={handleAddProduct} color="primary" variant="solid">
            Add
          </Button>
        </div>
        <div className="flex flex-col flex-wrap md:flex-nowrap gap-4 gap-y-8">
          {state.products.map((product, index) => (
            <div className="flex flex-wrap md:flex-nowrap gap-4" key={index}>
              <Input
                name="name"
                value={product.name}
                onChange={(event) => handleChangeProduct(event, index)}
                type="text"
                label="Name"
                placeholder="Product name"
                labelPlacement="outside"
              />
              <Input
                name="price"
                value={product.price}
                onChange={(event) => handleChangeProduct(event, index)}
                type="number"
                label="Price"
                placeholder="0.00"
                labelPlacement="outside"
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
              />
              <Input
                name="quantity"
                value={product.quantity}
                onChange={(event) => handleChangeProduct(event, index)}
                type="number"
                label="Quantity"
                placeholder="0"
                labelPlacement="outside"
              />
              <Input
                isReadOnly
                name="total"
                value={product.total}
                onChange={(event) => handleChangeProduct(event, index)}
                type="number"
                label="Total"
                placeholder="0"
                labelPlacement="outside"
              />
            </div>
          ))}
        </div>
      </div>

      <Button color="primary" variant="solid" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  )
}

export { InvoiceForm }
