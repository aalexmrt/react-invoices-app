import { useState, useEffect } from 'react'
import { getCustomersFromDB } from '@services/customers'

export function useCustomers() {
  const [customersList, setCustomersList] = useState([])
  const [loading, setLoading] = useState(false)

  const getCustomers = async () => {
    try {
      setLoading(true)
      const json = await getCustomersFromDB()
      setCustomersList(json)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return { customersList, loadingCustomers: loading }
}
