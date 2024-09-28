const API_BASE_URL = 'https://your-fastapi-url.com/api'

export async function fetchData(endpoint) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// Add more API functions as needed