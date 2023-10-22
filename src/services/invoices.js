const API_URL = 'http://localhost:3000/invoices'

export async function getInvoicesFromDB() {
  const response = await fetch(API_URL)
  const json = await response.json()

  return json
}

export async function getInvoiceByIdFromDB(id) {
  const response = await fetch(`${API_URL}/${id}`)
  const json = await response.json()
  return json
}

export async function addNewInvoiceToDB(invoice) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invoice),
  })
  const json = await response.json()
  return json
}

export async function editInvoiceFromDB(id, invoice) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(invoice),
  })
  const json = await response.json()
  return json
}

export async function downloadInvoiceFromDB(id) {
  const response = await fetch(`${API_URL}/${id}/download`)
  const blob = await response.blob()
  return blob
}

export async function removeInvoiceFromDB(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
  const json = await response.json()
  return json
}
