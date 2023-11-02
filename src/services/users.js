const API_URL = 'http://localhost:3000/api/v1/users'

export async function registerUser(user) {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const json = await response.json()
  return json
}

export async function loginUser(user) {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  const json = await response.json()
  return json
}
