

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MockInterview from './components/MockInterview/MockInterview';
import Permissions from './components/Permissions/Permissions';
import InterviewPanel from './components/InterviewPanel/InterviewPanel';

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<MockInterview />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/interview" element={<InterviewPanel />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

