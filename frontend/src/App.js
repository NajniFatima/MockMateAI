

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import MockInterview from './components/MockInterview/MockInterview';
import Permissions from './components/Permissions/Permissions';
import InterviewPanel from './components/InterviewPanel/InterviewPanel';

import Header from './components/header/header';
import Practice from './components/practice/Practice';
import PracticeCore from './components/practiceCore/PracticeCore';
import PracticeDSA from './components/practiceDSA/PracticeDSA';


function App() {
    return (
        <Router>
             <Header /> 
            <Routes>
                <Route path="/" element={<MockInterview />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/interview" element={<InterviewPanel />} />
                <Route path='/practice' element={<Practice /> } />
                <Route path='/practiceCore' element={<PracticeCore /> } />
                <Route path='/practiceDSA' element={<PracticeDSA /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

