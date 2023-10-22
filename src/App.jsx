import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashboardPage from './pages/dashboard-page'
import FormPage from './pages/form-page'
import { useState, useEffect } from 'react'

import {
  addNewInvoiceToDB,
  editInvoiceFromDB,
  getInvoiceByIdFromDB,
  getInvoicesFromDB,
  removeInvoiceFromDB,
} from './services/invoices'

function useInvoices() {
  const [invoices, setInvoices] = useState([])
  const [loading, setLoading] = useState(true)

  const getInvoices = async () => {
    try {
      setLoading(true)
      const newInvoices = await getInvoicesFromDB()
      setInvoices(newInvoices)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getInvoiceById = async (id) => {
    try {
      setLoading(true)
      const invoice = await getInvoiceByIdFromDB(id)
      return invoice
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const removeInvoice = async (id) => {
    try {
      setLoading(true)
      const removedInvoice = await removeInvoiceFromDB(id)
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoice) => invoice.id !== removedInvoice.id)
      )
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const addNewInvoice = async (invoice) => {
    try {
      setLoading(true)
      const newInvoice = await addNewInvoiceToDB(invoice)
      setInvoices((prevInvoices) => [...prevInvoices, newInvoice])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const editInvoice = async (invoice) => {
    try {
      setLoading(true)
      const newInvoice = await editInvoiceFromDB(invoice)
      setInvoices((prevInvoices) => [...prevInvoices, newInvoice])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    invoices,
    loading,
    addNewInvoice,
    editInvoice,
    getInvoiceById,
    getInvoices,
    getInvoiceByIdFromDB,
    removeInvoice,
  }
}

export default function App() {
  const {
    invoices,
    updateInvoice,
    addNewInvoice,
    editInvoice,
    getInvoiceById,
    getInvoices,
    removeInvoice,
  } = useInvoices()

  useEffect(() => {
    getInvoices()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage invoices={invoices} removeInvoice={removeInvoice} />
          }
        />
        <Route
          path="/add"
          element={<FormPage updateInvoice={updateInvoice} />}
        />
        <Route
          path="/edit/:id"
          element={
            <FormPage
              addNewInvoice={addNewInvoice}
              editInvoice={editInvoice}
              getInvoiceById={getInvoiceById}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
