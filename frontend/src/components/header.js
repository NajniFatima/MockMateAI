import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <h1>Mockmate AI</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Company</a>
                <a href="#">Contact</a>
            </nav>
            <div className="profile-icon">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="Profile" />
            </div>
        </header>
    );
}

export default Header;
