import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../Styles/Login.css'; 
import { login } from './../Services/apiService';

const Login = ({ updateUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      const { data } = response;
      
      if (response.status === 200) {
        // Update username and redirect to Home if login successful
        updateUser({ name: username });
        navigate('/home');
      } else {
        // Show alert for invalid credentials
        setError('Invalid username or password');
      }
    } catch (error) {
      // Show alert for API error
      setError('Error logging in. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field" 
      />
       <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field" 
      />
       <br />
      <button onClick={handleLogin} className="login-button">Login</button >
    </div>
  );
}

export default Login;