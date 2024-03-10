import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Login from './Components/Login';
import Home from './Components/Home';
import Employees from './Components/Employees';

function App() {
  const [user, setUser] = useState({ name: '' });

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <header>Welcome {user ? user.name : ''}</header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route index path="/login" element={<Login updateUser={updateUser}/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/employees" element={<Employees/>} />
        </Routes>
      </BrowserRouter>
      <footer>
          <p>Copyright © 2024. All rights reserved.</p>
      </footer>
    </div>

  );
}

export default App;
