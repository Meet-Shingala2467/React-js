import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const handleAddTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      title,
      description
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTitle('');
    setDescription('');
  };

  const handleEditTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === editTaskId ? { ...t, title, description } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTitle('');
    setDescription('');
    setEditMode(false);
    setEditTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(t => t.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      handleEditTask();
    } else {
      handleAddTask();
    }
  };

  const handleEditClick = (task) => {
    setEditMode(true);
    setEditTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditTaskId(null);
    setTitle('');
    setDescription('');
  };

  const isFormValid = title && description;

  return (
    <div className="app-container" style={{ textAlign: 'center' }}>
      <div className="form-container">
        <h2>{editMode ? 'Edit Task' : 'Add New Task'}</h2>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
         
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
          
          <div className="button-group">
            <button type="submit" className="submit-btn" disabled={!isFormValid}>
              {editMode ? 'Update' : 'Submit'}
            </button>
            {editMode && (
              <button type="button" onClick={handleCancelEdit} className="cancel-btn">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="table-container">
        <h2>Task List</h2>
        <table className="task-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  <button onClick={() => handleEditClick(task)} className="edit-btn">
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
