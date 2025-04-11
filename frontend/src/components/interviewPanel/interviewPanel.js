import React from 'react';
import AIMessage from '../aiMessage/aiMessage';
import VideoFeed from '../videoFeed/videoFeed';
import './interviewPanel.css';

function InterviewPanel() {
    return (
        <div className="interview-panel">
            <div className="ai-message">
                <AIMessage />
            </div>
            <div className="video-feed">
                <VideoFeed />
            </div>
            <div className="end-interview">
                <button className="end-btn">End Interview</button>
            </div>
        </div>
    );
}

export default InterviewPanel;
