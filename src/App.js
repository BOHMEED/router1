import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  const [index, setindex] = useState(0);
  
  return (
    <div className="App">
      {/* ------------------create routes---------------- */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
