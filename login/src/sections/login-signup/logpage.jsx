import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logpage.css'; // Importing CSS for blur effect
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons

const LogPage = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to control password visibility
    const [showError, setShowError] = useState(false); // State to control error message visibility
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false); // Reset error visibility

        if (email === '' || password === '') {
            setShowError(true); // Show error if fields are empty
            return;
        }

        // Check if the email and password match any stored user
        const users = Object.keys(localStorage).map(userId => JSON.parse(localStorage.getItem(userId)));
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            console.log('Email:', email);
            console.log('Password:', password);
            setIsLoggedIn(true);
            navigate('/home'); // Navigate to home page after successful login
        } else {
            setShowError(true); // Show error if email or password is incorrect
        }
    };

    const handleSignUpRedirect = () => {
        navigate('/signup'); // Redirect to signup page
    };

    return (
        <div className={`login-container ${showError ? 'hidden' : ''} custom-login-container`}>
            <div className="blur-background custom-blur-background" />
            <div className="login-form custom-login-form">
                <h2 className="text-center custom-title">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4 custom-form">
                    <div className="mb-3 custom-input-group">
                        <label htmlFor="email" className="form-label custom-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control custom-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 custom-input-group">
                        <label htmlFor="password" className="form-label custom-label">Password:</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="form-control custom-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary custom-button">Login</button>
                </form>
                {showError && (
                    <div className="alert alert-danger mt-3 custom-alert" role="alert">
                        Email or password is incorrect. Please try again.
                    </div>
                )}
                <button onClick={handleSignUpRedirect} className="btn btn-secondary mt-3 custom-button">Go to Sign Up</button>
            </div>
        </div>
    );
};

export default LogPage;
