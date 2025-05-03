import React from 'react';
import axios from 'axios';
import Header from './components/header/header';
import InterviewPanel from './components/interviewPanel/interviewPanel';
import Practice from './components/practice/Practice';
import PracticeCore from './components/practiceCore/PracticeCore';
import PracticeDSA from './components/practiceDSA/PracticeDSA';
import Home from './components/home/Home';
import Login from './components/login/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

function App() {
    return (
        <Router>
          <ToastContainer />
           {/* <Header /> */}
           <Navbar/>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path="/login" element={<Login />} />
                <Route path='/interviewPanel' element={<InterviewPanel /> } />
                <Route path='/practice' element={<Practice /> } />
                <Route path='/practiceCore' element={<PracticeCore /> } />
                <Route path='/practiceDSA' element={<PracticeDSA /> } />
            </Routes>
        </Router>
    );
}

export default App;
