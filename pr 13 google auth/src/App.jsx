import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './App.css';

const App = () => {
  const [user, setUser] = useState(null);

  const responseGoogle = (response) => {
    console.log(response);
    setUser(response.profileObj);
  };

  return (
    <div className="App">
      <h1>Google Authentication</h1>
      {user ? (
        <div className="card">
          <h2>Welcome, {user.name}!</h2>
          <img src={user.imageUrl} alt={user.name} className="logo" />
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <GoogleLogin
          clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default App;
