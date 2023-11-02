const API_URL = 'http://localhost:3000/api/v1/customers'

export async function getCustomersFromDB() {
  const response = await fetch(API_URL)
  const json = await response.json()

  return json
}
