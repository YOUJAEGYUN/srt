// src/App.jsx
import React from 'react';
import { BrowserRoute, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/LoginPage';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
