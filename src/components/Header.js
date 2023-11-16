import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <img src="ShapeShiftLogo.png" alt="ShapeShift Logo" />
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/business">Business</a>
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
            </nav>

            <div className="action-buttons">
                <button className="free-trial-button">Free Trial</button>
                <button className="sign-in-button">Sign In</button>
            </div>
        </header>
    );
}

export default Header;
