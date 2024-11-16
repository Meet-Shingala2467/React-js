import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Edit.css'; // Ensure CSS is properly linked

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { record, index } = location.state;

  const [formData, setFormData] = useState(record);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      return 'Valid email is required.';
    if (!formData.date) return 'Date of birth is required.';
    if (!formData.gender) return 'Gender is required.';
    if (!formData.course.trim()) return 'Course is required.';
    return '';
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    storedRecords[index] = formData;
    localStorage.setItem('records', JSON.stringify(storedRecords));
    navigate('/'); // Navigate back to the main view
  };

  const handleCancel = () => {
    if (JSON.stringify(formData) !== JSON.stringify(record)) {
      if (!window.confirm('You have unsaved changes. Do you really want to cancel?')) {
        return;
      }
    }
    navigate('/');
  };

  return (
    <div className="edit-container">
      <div className="edit-card">
        <h2>Edit Record</h2>
        <form onSubmit={handleSave}>
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter your course"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn save-btn">
              Save
            </button>
            <button
              onClick={handleCancel}
              type="button"
              className="btn cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}
