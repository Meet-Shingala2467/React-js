import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

// Redux Setup (Actions and Reducer Combined)
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true, user: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};

const store = createStore(authReducer);

// Login Page
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (email === 'user@example.com' && password === 'password') {
      const user = { name: 'John Doe', email };
      dispatch({ type: LOGIN, payload: user });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

// Home Page
const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome, {user.name}!</h1>
      <p>Your email is {user.email}</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', background: '#FF0000', color: '#fff', border: 'none', borderRadius: '5px' }}>
        Logout
      </button>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

// App Component
const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
