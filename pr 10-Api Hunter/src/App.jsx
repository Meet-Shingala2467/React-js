import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

function App() {
  const [recipes, setRecipes] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch recipes
        const recipesResponse = await fetch('https://dummyjson.com/recipes')
        if (!recipesResponse.ok) {
          throw new Error('Network response was not ok')
        }
        const recipesData = await recipesResponse.json()
        setRecipes(recipesData.recipes)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }

      try {
        // Fetch products using axios
        const productsResponse = await axios.get('https://dummyjson.com/products')
        setProducts(productsResponse.data.products)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchData()
  }, [])

  if (loading) return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Error: {error}
    </div>
  )

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5">API Hunter</h1>
      <div className="border border-2 p-4 mb-5">
        <h1 className="text-center mb-4">Recipes</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {recipes.map(recipe => (
            <div key={recipe.id} className="col">
              <div className="card h-100 shadow-sm">
                <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <div className="card-text">
                    <p className="mb-1">
                      <span className="badge bg-info me-2">Cuisine: {recipe.cuisine}</span>
                    </p>
                    <p className="mb-0">
                      <i className="bi bi-clock"></i> {recipe.cookTimeMinutes} minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-2 p-4">
        <h1 className="text-center mb-4">Products</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map(product => (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="card-text">
                    <p className="mb-1">
                      <span className="badge bg-success me-2">${product.price}</span>
                      <span className="badge bg-info">Rating: {product.rating}</span>
                    </p>
                    <p className="mb-0">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
