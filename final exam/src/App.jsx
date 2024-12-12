import { useState, useEffect } from 'react';
import './App.css';
import Login from './login.jsx'; // Importing the Login component

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [hobby, setHobby] = useState([]); // New state for hobbies
  const [imageUrl, setImageUrl] = useState(''); // New state for image URL
  const [editMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state to track login status

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const handleAddTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      email,
      password,
      city,
      hobby, // Include hobby in the new task
      imageUrl // Include image URL in the new task
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setName('');
    setEmail('');
    setPassword('');
    setCity('');
    setHobby([]); // Reset hobby
    setImageUrl(''); // Reset image URL
  };

  const handleEditTask = () => {
    const updatedTasks = tasks.map(t =>
      t.id === editTaskId ? { ...t, name, email, password, city, hobby, imageUrl } : t // Include image URL in edit
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setName('');
    setEmail('');
    setPassword('');
    setCity('');
    setHobby([]); // Reset hobby
    setImageUrl(''); // Reset image URL
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
    setName(task.name);
    setEmail(task.email);
    setPassword(task.password);
    setCity(task.city);
    setHobby(task.hobby || []); // Set hobby for editing
    setImageUrl(task.imageUrl || ''); // Set image URL for editing
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditTaskId(null);
    setName('');
    setEmail('');
    setPassword('');
    setCity('');
    setHobby([]); // Reset hobby
    setImageUrl(''); // Reset image URL
  };

  const isFormValid = name && email && password && city;

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  return (
    <div className="app-container" style={{ textAlign: 'center' }}>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} /> // Pass login success handler
      ) : (
        <>
          <div className="form-container">
            <h2>{editMode ? 'Edit Task' : 'Add New Task'}</h2>
            <form onSubmit={handleSubmit} className="task-form">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <input
                type="url"
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="input-field"
              />
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input-field"
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
              </select>
              <div className="hobby-container">
                <label>
                  <input
                    type="checkbox"
                    value="Reading"
                    checked={hobby.includes('Reading')}
                    onChange={(e) => {
                      const newHobby = e.target.checked
                        ? [...hobby, e.target.value]
                        : hobby.filter(h => h !== e.target.value);
                      setHobby(newHobby);
                    }}
                  />
                  Reading
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Traveling"
                    checked={hobby.includes('Traveling')}
                    onChange={(e) => {
                      const newHobby = e.target.checked
                        ? [...hobby, e.target.value]
                        : hobby.filter(h => h !== e.target.value);
                      setHobby(newHobby);
                    }}
                  />
                  Traveling
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Cooking"
                    checked={hobby.includes('Cooking')}
                    onChange={(e) => {
                      const newHobby = e.target.checked
                        ? [...hobby, e.target.value]
                        : hobby.filter(h => h !== e.target.value);
                      setHobby(newHobby);
                    }}
                  />
                  Cooking
                </label>
              </div>
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Hobby</th> {/* New column for hobbies */}
                  <th>Image</th> {/* New column for image */}
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>{task.email}</td>
                    <td>{task.city}</td>
                    <td>{task.hobby.join(', ')}</td> {/* Display hobbies */}
                    <td><img src={task.imageUrl} alt={task.name} style={{ width: '50px', height: '50px' }} /></td> {/* Display image */}
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
        </>
      )}
    </div>
  );
}

export default App;
