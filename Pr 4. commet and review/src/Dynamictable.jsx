import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import './style.css'

const Dynamictable = () => {
  const [formInput, setFormInput] = useState([
    {
      id: Math.floor(Math.random() * 10000),
      name: '',
      email: '',
      phone: ''
    }
  ]);

  const addField = () => {
    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: '',
      email: '',
      phone: ''
    };
    setFormInput([...formInput, obj]);
  };

  const removeField = (id) => {
    let updatedFields = formInput.filter(val => val.id !== id);
    setFormInput(updatedFields);
  };

  const handleChange = (id, field, value) => {
    const updatedFormInput = formInput.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    );
    setFormInput(updatedFormInput);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dynamic Table</h1>
      <table className="table table-bordered table-striped table-hover">
      <thead>
          <tr>
            <th className="text-center">Full Name</th>
            <th className="text-center">Email Address</th>
            <th className="text-center">Phone</th>
            <th className="text-center">
              <button className="btn btn-primary" onClick={addField}>Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {formInput.map((val, index) => (
            <tr key={val.id}>
              <td>
                <input type="text" className="form-control" value={val.name} onChange={(e) => handleChange(val.id, 'name', e.target.value)}/>
              </td>
              <td>
                <input type="text" className="form-control" value={val.email} onChange={(e) => handleChange(val.id, 'email', e.target.value)}/>
              </td>
              <td>
                <input type="text" className="form-control" value={val.phone} onChange={(e) => handleChange(val.id, 'phone', e.target.value)}/>
              </td>
              <td className="text-center">
                {index !== 0 && (<button className="btn btn-danger" onClick={() => removeField(val.id)}>Remove</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dynamictable;
