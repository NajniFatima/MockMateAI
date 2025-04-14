import React from 'react';
import Header from './components/header/header';
import InterviewPanel from './components/interviewPanel/interviewPanel';
import Practice from './components/practice/Practice';
import PracticeCore from './components/practiceCore/PracticeCore';
import PracticeDSA from './components/practiceDSA/PracticeDSA';
import Home from './components/home/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/interviewPanel' element={<InterviewPanel /> } />
                <Route path='/practice' element={<Practice /> } />
                <Route path='/practiceCore' element={<PracticeCore /> } />
                <Route path='/practiceDSA' element={<PracticeDSA /> } />
            </Routes>
      </Router>
    );
}

export default App;
