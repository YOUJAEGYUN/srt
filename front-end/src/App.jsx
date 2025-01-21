// src/App.jsx
import React from 'react';
import { BrowserRoute, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/LoginPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
