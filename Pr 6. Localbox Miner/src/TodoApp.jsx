import React, { useState } from 'react';
import './TodoApp.css'

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'study', date: '2022-04-20', description: 'Learn JavaScript' },
    { id: 2, title: 'workout', date: '2022-04-28', description: 'Go to gym' }
  ]);

  const [newTask, setNewTask] = useState({ title: '', date: '', description: '' });
  const [editingTask, setEditingTask] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingTask(prev => ({ ...prev, [name]: value }));
  };

  const addTask = () => {
    if (newTask.title && newTask.date && newTask.description) {
      setTasks(prev => [...prev, { ...newTask, id: Date.now() }]);
      setNewTask({ title: '', date: '', description: '' });
    }
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  const updateTask = () => {
    if (editingTask.title && editingTask.date && editingTask.description) {
      setTasks(prev => prev.map(task => 
        task.id === editingTask.id ? editingTask : task
      ));
      setEditingTask(null);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      
      <div className="task-input">
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="mb-2 p-1 border rounded"
        />
        <input
          type="date"
          name="date"
          value={newTask.date}
          onChange={handleInputChange}
          className="mb-2 p-1 border rounded"
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="mb-2 p-1 border rounded"
        />
        <button onClick={addTask} className="bg-green-500 text-white p-2 rounded">Add New Task</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Tasks</h2>
      
      {tasks.map(task => (
        <div key={task.id} className="task">
          {editingTask && editingTask.id === task.id ? (
            <>
              <input
                type="text"
                name="title"
                value={editingTask.title}
                onChange={handleEditChange}
                className="mb-2 p-1 border rounded w-full"
              />
              <input
                type="date"
                name="date"
                value={editingTask.date}
                onChange={handleEditChange}
                className="mb-2 p-1 border rounded w-full"
              />
              <input
                type="text"
                name="description"
                value={editingTask.description}
                onChange={handleEditChange}
                className="mb-2 p-1 border rounded w-full"
              />
              <div className="edit-buttons">
                <button onClick={updateTask} className="mr-2 px-2 py-1 bg-blue-500 text-white rounded">✓</button>
                <button onClick={cancelEditing} className="px-2 py-1 bg-red-500 text-white rounded">✗</button>
              </div>
            </>
          ) : (
            <>
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.date}</p>
              <p>{task.description}</p>
              <div className="mt-2 flex justify-end">
                <button onClick={() => startEditing(task)} className="mr-2 px-2 py-1 bg-yellow-500 text-white rounded">Edit</button>
                <button onClick={() => deleteTask(task.id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoApp;