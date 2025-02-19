import React from "react";
import "./MockInterview.css";

const MockInterview = ({ setPage }) => {
    return (
        <div className="mock-container">
            <h2>Mock Interview</h2>
            <div className="company-logos">
                <img src="/images/google.png" alt="Google" />
                <img src="/images/amazon.png" alt="Amazon" />
                <img src="/images/microsoft.png" alt="Microsoft" />
                <img src="/images/atlassian.png" alt="Atlassian" />
                <img src="/images/accenture.png" alt="Accenture" />
                <img src="/images/tcs.png" alt="TCS" />
                <img src="/images/capgemini.png" alt="Capgemini" />
            </div>
            <button className="start-mock-btn" onClick={() => setPage("permissions")}>Start Mock</button>
        </div>
    );
};

export default MockInterview;
