import React, { useState, useEffect } from 'react';
import './home-page.css';

const HomePage = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('active');
  const [deadline, setDeadline] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (task && status && deadline) {
      const newTasks = [...tasks];
      if (editIndex >= 0) {
        newTasks[editIndex] = { task, status, deadline };
        setEditIndex(-1);
      } else {
        newTasks.push({ task, status, deadline });
      }
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      resetForm();
    } else {
      alert('Please fill in all fields');
    }
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit.task);
    setStatus(taskToEdit.status);
    setDeadline(taskToEdit.deadline);
    setEditIndex(index);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const resetForm = () => {
    setTask('');
    setStatus('active');
    setDeadline('');
  };

  return (
    <div className="home-page">
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value)} 
        >
          <option value="active">Active</option>
          <option value="deactive">Deactive</option>
        </select>
        <input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
        />
        <button onClick={addTask}>{editIndex >= 0 ? 'Update Task' : 'Add Task'}</button>
      </div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <strong>Task:</strong> {t.task} | <strong>Status:</strong> {t.status} | <strong>Deadline:</strong> {t.deadline}
            <div style={{ float: 'right' }}>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
