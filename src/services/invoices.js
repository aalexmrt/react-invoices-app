const API_URL = 'http://localhost:3000/api/v1/invoices'

export async function getInvoices({ token }) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const json = await response.json()

  return json
}

export async function getInvoice({ id, token }) {
  const response = await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const json = await response.json()
  return json
}

export async function addInvoice({ invoice, token }) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(invoice),
  })
  const json = await response.json()

  return json
}

export async function editInvoice(id, invoice) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
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
