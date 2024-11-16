import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './View.css'; 

export default function View() {
  const [records, setRecords] = useState([]);
  const [filteredRecord, setFilteredRecord] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
    setFilteredRecord(storedRecords);
  }, []);

  const handleDelete = (index) => {
    const updatedRecords = records.filter((_, i) => i !== index);
    setRecords(updatedRecords);
    setFilteredRecord(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const handleToggleStatus = (index) => {
    const updatedRecords = records.map((record, i) =>
      i === index ? { ...record, status: record.status === 'Active' ? 'Deactive' : 'Active' } : record
    );
    setRecords(updatedRecords);
    setFilteredRecord(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const filterData = (status) => {
    const updatedRecords = records.filter((val) => val.status === status);
    setFilteredRecord(status === 'All' ? records : updatedRecords);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = records.filter((val) => val.name.toLowerCase().includes(value));
    setFilteredRecord(filtered);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    const sortedRecords = sortRecords([...filteredRecord], value);
    setFilteredRecord(sortedRecords);
  };

  const sortRecords = (records, order) => {
    if (order === 'az') {
      return [...records].sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'za') {
      return [...records].sort((a, b) => b.name.localeCompare(a.name));
    }
    return records;
  };

  return (
    <div className="view-container">
      <div className="header">
        <h2>Manage Records</h2>
        <Link to="/Add" className="btn btn-primary">Add Record</Link>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
          className="search-bar"
        />
        <select onChange={(e) => filterData(e.target.value)} className="filter-dropdown">
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
        <select onChange={handleSort} value={sortOrder} className="filter-dropdown">
          <option value="">Sort by</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
        </select>
      </div>

      {filteredRecord.length > 0 ? (
        <table className="record-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecord.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.email}</td>
                <td>{record.date}</td>
                <td>{record.gender}</td>
                <td>{record.course}</td>
                <td>
                  <button
                    onClick={() => handleToggleStatus(index)}
                    className={`status-btn ${record.status === 'Active' ? 'active' : 'inactive'}`}
                  >
                    {record.status}
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)} className="action-btn delete-btn">
                    Delete
                  </button>
                  <button
                    onClick={() => navigate('/Edit', { state: { record, index } })}
                    className="action-btn edit-btn"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-records">No records available.</p>
      )}
    </div>
  );
}
