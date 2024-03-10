import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../Styles/Login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO add mock api
    if (username === 'admin' && password === 'Adm1nP@ssw0rd') {
      navigate('/home');
    } else {
        alert('Invalid username or password');
      }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
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