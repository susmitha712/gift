import { useEffect, useState } from "react";
import Balloon from "./Balloon";
import Confetti from "./Confetti";

const HeroSection = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger text animation after a short delay
    setTimeout(() => setTextVisible(true), 500);
    
    // Stop initial confetti burst after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  return (
    <section className="hero-section">
      {/* Floating Balloons */}
      <div className="balloons-container">
        {[...Array(12)].map((_, i) => (
          <Balloon 
            key={i} 
            color={["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9ff3", "#54a0ff", "#5f27cd"][i % 6]}
            delay={i * 0.5}
            left={5 + (i * 8) % 90}
          />
        ))}
      </div>

      {/* Confetti Burst */}
      {showConfetti && <Confetti count={100} />}

      {/* Hero Content */}
      <div className={`hero-content ${textVisible ? "visible" : ""}`}>
        <div className="hero-sparkle">✨</div>
        <h1 className="hero-title">
          <span className="title-line">Happy</span>
          <span className="title-line birthday-text">Birthday🎉</span>
          <span className="title-line name-text">Chitti❤️</span>
        </h1>
        <p className="hero-subtitle">Wishing you a day filled with love, joy, and happiness</p>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="floating-heart"
            style={{
              left: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.7}s`,
              fontSize: `${1.5 + Math.random() * 1.5}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
