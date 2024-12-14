import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './logpage.css'; // Importing CSS for blur effect
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icons
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import eye icons

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showError, setShowError] = useState(false); // State to control error message visibility
    const [passwordMismatch, setPasswordMismatch] = useState(false); // State to control password mismatch error visibility
    const [passwordRequirementsError, setPasswordRequirementsError] = useState(false); // State to control password requirements error visibility
    const [showPassword, setShowPassword] = useState(false); // State to control password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to control confirm password visibility
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false); // Reset error visibility
        setPasswordMismatch(false); // Reset password mismatch visibility
        setPasswordRequirementsError(false); // Reset password requirements error visibility

        if (email === '' || password === '' || confirmPassword === '') {
            setShowError(true); // Show error if fields are empty
            return;
        }
        if (password !== confirmPassword) {
            setPasswordMismatch(true); // Show error if passwords do not match
            return;
        }
        if (password.length < 4 || !/[!@#$%^&*]/.test(password) || !/\d/.test(password)) {
            setPasswordRequirementsError(true); // Show error if password does not meet requirements
            return;
        }

        // Generate a random ID for the user
        const userId = Math.random().toString(36).substr(2, 9);
        
        // Save email and password in local storage
        localStorage.setItem(userId, JSON.stringify({ email, password }));

        console.log('Email:', email);
        console.log('Password:', password);
        setIsSignedUp(true);
    };

    useEffect(() => {
        if (isSignedUp) {
            console.log('User signed up successfully');
            navigate('/login'); // Redirect to login page after successful signup
        }
    }, [isSignedUp, navigate]);

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className={`login-container ${isSignedUp ? 'hidden' : ''} custom-login-container`}>
            <div className="blur-background custom-blur-background" />
            <div className="login-form custom-login-form">
                <h2 className="text-center custom-title">Sign Up</h2>
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
                    <div className="mb-3 custom-input-group">
                        <label htmlFor="confirmPassword" className="form-label custom-label">Confirm Password:</label>
                        <div className="input-group">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                className="form-control custom-input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <span className="input-group-text" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary custom-button">Sign Up</button>
                </form>
                {showError && (
                    <div className="alert alert-danger mt-3 custom-alert" role="alert">
                        Please fill in all fields to proceed.
                    </div>
                )}
                {passwordMismatch && (
                    <div className="alert alert-danger mt-3 custom-alert" role="alert">
                        Passwords do not match. Please try again.
                    </div>
                )}
                {passwordRequirementsError && (
                    <div className="alert alert-danger mt-3 custom-alert" role="alert">
                        Password must be at least 4 characters long and include at least one symbol and one number.
                    </div>
                )}
                <button onClick={handleLoginRedirect} className="btn btn-secondary mt-3 custom-button">Go to Login</button>
            </div>
        </div>
    );
};

export default SignUpPage;
