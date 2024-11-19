import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes')
      if (!response.ok) {
        throw new Error('Failed to fetch recipes')
      }
      const json = await response.json()
      setData(json.recipes)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <table style={{ border: '1px solid black', borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Cuisine</th>
          </tr>
        </thead>
        <tbody>
          {data.map((recipe) => (
            <tr key={recipe.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{recipe.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{recipe.cuisine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
