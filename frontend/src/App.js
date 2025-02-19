import React,{useState} from 'react';
import Header from './components/header';
import InterviewPanel from './components/interviewPanel';

import MockInterview from "./components/MockInterview";
import Permissions from "./components/Permissions";

function App() {
    const [page, setPage] = useState("mock");

    return (
        <div className="App">
            <Header />

            {page === "mock" && <MockInterview setPage={setPage} />}
            {page === "permissions" && <Permissions setPage={setPage} />}

            <InterviewPanel />
        </div>
    );
}

export default App;
