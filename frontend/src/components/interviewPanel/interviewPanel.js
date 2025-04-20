import React from 'react';
import AIMessage from '../aiMessage/aiMessage';
import VideoFeed from '../videoFeed/videoFeed';
import './interviewPanel.css';
import axios from "axios";

function InterviewPanel() {
    const handleEndInterview = async () => {
        const response = await axios.post('http://localhost:5100/api/evaluate', {
            question: "What is a closure in JavaScript?",
            answer: "A closure is when you have a function inside another function.",
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
        console.log("ans :", response);
    }
    return (
        <div className="interview-panel">
            <div className="ai-message">
                <AIMessage />
            </div>
            <div className="video-feed">
                <VideoFeed />
            </div>
            <div className="end-interview">
                <button className="end-btn" onClick={handleEndInterview}>End Interview</button>
            </div>
        </div>
    );
}

export default InterviewPanel;
