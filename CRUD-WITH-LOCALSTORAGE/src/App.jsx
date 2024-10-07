import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState('')
  const [column1, setColumn1] = useState('')
  const [column2, setColumn2] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem('data')
    if (storedData) {
      setData(JSON.parse(storedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, column1, column2 }])
    setId('')
    setColumn1('')
    setColumn2('')
  }

  const handleDeleteRow = (id) => {
    setData(data.filter(row => row.id !== id))
  }

  const handleEditRow = (id, column, value) => {
    setData(data.map(row => row.id === id ? { ...row, [column]: value } : row))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddRow()
  }

  return (
    <>
    <div className="container">
      <h1>Table Data Transfer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">ID</label>
          <input type="text" className="form-control" id="exampleInputEmail1" value={id} onChange={(e) => setId(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">Enter ID</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Column 1</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={column1} onChange={(e) => setColumn1(e.target.value)} />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Column 2</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={column2} onChange={(e) => setColumn2(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                  <td>
                    <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.column1}</td>
                  <td>{row.column2}</td>
                  <td>
                    <button onClick={() => handleDeleteRow(row.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
