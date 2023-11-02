// invoice-form.jsx
import { Input, Button, Select, SelectItem } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { PlusIcon } from '@components/icons'

function InvoiceForm({
  customersList,
  invoiceFormData,
  initialFormData,
  addProductLine,
  changeInput,
  changeInputProduct,
  submitForm,
  compareFormData,
}) {
  const { number, date, products, customer } = invoiceFormData
  const [selectedCustomer, setSelectedCustomer] = useState([])
  console.log(date)
  useEffect(() => {
    if (customer === '') return
    const newSelectedCustomer = new Set([customer])
    setSelectedCustomer(newSelectedCustomer)
  }, [customer])

  const handleSelectedCustomer = (e) => {
    const newCustomer = e.currentKey
    const newSelectedCustomer = [...selectedCustomer, newCustomer]
    setSelectedCustomer(newSelectedCustomer)
    changeInput({ name: 'customer', value: newCustomer })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    changeInput({ name, value })
  }

  const handleChangeProduct = (e, index) => {
    const { name, value } = e.target
    changeInputProduct({ name, value, index })
  }

  const handleAddProductLine = () => {
    addProductLine()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedKeys = compareFormData(initialFormData, invoiceFormData)
    const invoiceDataToSubmit = {}
    for (const [key, value] of Object.entries(invoiceFormData)) {
      if (updatedKeys.includes(key)) {
        invoiceDataToSubmit[key] = value
      }
    }

    submitForm(invoiceDataToSubmit)
  }

  return (
    <form className="grid mb-6 md:mb-0 gap-10" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <Input
          name="number"
          value={number}
          onChange={handleChange}
          type="text"
          label="Invoice number"
          placeholder="INV-0001"
          labelPlacement="outside"
        />

        <Input
          name="date"
          value={date}
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
          // items={customersList}
          label="Customer"
          placeholder="Customer"
          className="max-w-xs"
          onSelectionChange={handleSelectedCustomer}
          name="customer"
          selectedKeys={selectedCustomer}
          labelPlacement="outside"
          // onSelectionChange={handleChange}
        >
          {customersList.map((customer) => {
            return (
              <SelectItem key={customer.id} value={customer.id}>
                {customer.name}
              </SelectItem>
            )
          })}
        </Select>
      </div>

      <div className="products">
        <div className="flex gap-4 align-middle pb-4">
          <h2 className="text-lg font-bold">Products</h2>
          <div>
            <Button
              isIconOnly
              onClick={handleAddProductLine}
              color="primary"
              variant="ghost"
              size="sm"
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-nowrap gap-4 gap-y-8">
          {products.map((product, index) => (
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
                type="number"
                label="Total"
                placeholder="0"
                labelPlacement="outside"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex place-self-end">
        <Button color="primary" variant="solid" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  )
}

export { InvoiceForm }
