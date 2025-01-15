import React from 'react';
import './videoFeed.css';

function VideoFeed() {
    return (
        <div className="video-feed-container">
            <div className="interviewer">
                <img src="https://via.placeholder.com/200" alt="Interviewer" />
            </div>
            <div className="interviewee">
                <img src="https://via.placeholder.com/200" alt="Interviewee" />
            </div>
            <div className="mute-button">
                <button>Mute</button>
            </div>
        </div>
    );
}

export default VideoFeed;
