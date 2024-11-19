import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletUser } from '../Redux/Action/curdActions';

function View() {
  const user = useSelector(state => state.curd.userData)
  const dispatch = useDispatch()

  const deleteData = (id) => {
    dispatch(deletUser(id))
  }

  return (
    <div className="view-container">
      <h2>User List</h2>
      
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((val) => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                <td>
                  <button className="delete-button" onClick={() => deleteData(val.id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
      <Link to="/Add" className="add-link">
        <button className="add-button">Add +</button>
      </Link>

      <style jsx>{`
        .view-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .user-table th, .user-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .user-table th {
          background-color: #007bff;
          color: white;
        }

        .user-table td {
          background-color: #fff;
        }

        .delete-button {
          background-color: #f44336; /* Red color */
          color: white;
          border: none;
          padding: 6px 12px;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .delete-button:hover {
          background-color: #e53935;
        }

        .add-link {
          display: block;
          text-align: center;
          margin-top: 20px;
        }

        .add-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s;
        }

        .add-button:hover {
          background-color: #45a049;
        }

        @media (max-width: 768px) {
          .view-container {
            padding: 16px;
          }

          .user-table th, .user-table td {
            padding: 10px;
          }

          .add-button {
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default View
