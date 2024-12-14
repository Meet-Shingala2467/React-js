import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogPage from './sections/login-signup/logpage.jsx';
import SignUpPage from './sections/login-signup/signup.jsx';
import HomePage from './sections/home/home-page.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <HomePage />
      <Routes>
        <Route path="/" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<LogPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUpPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
