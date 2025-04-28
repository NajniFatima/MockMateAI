import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home/Home.js';
import Login from './components/login/Login.js';


// Axios config
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
