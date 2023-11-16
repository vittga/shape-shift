import React from 'react';
import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h1>Record...</h1>
                    <h1>And Share!</h1>
                    <p>Our goal is straightforward: to spark your enthusiasm for a fitter, more resilient version of yourself.</p>
                    <button>Explore</button>
                    <p>100K people have joined</p>
                </div>
                <div className="feature-image">
                    <img src="exercise-illustration.png" alt="Exercise Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
