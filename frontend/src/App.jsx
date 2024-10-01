import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CrewsPage from './pages/CrewsPage';
import PiratesPage from './pages/PiratesPage'

function App() {
  
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-yellow-600 to-yellow-400'>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/crews" element={<CrewsPage />} />
        <Route path="/pirates" element={<PiratesPage />} />
      </Routes>
    </div>
  )
};

export default App
