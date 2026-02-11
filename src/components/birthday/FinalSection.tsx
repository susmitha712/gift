import { useEffect, useRef, useState } from "react";
import Balloon from "./Balloon";

const FinalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`final-section ${isVisible ? "visible" : ""}`} ref={sectionRef}>
      {/* Continuous Balloons */}
      <div className="final-balloons">
        {[...Array(8)].map((_, i) => (
          <Balloon
            key={i}
            color={["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9ff3", "#54a0ff", "#5f27cd", "#ff9f43", "#10ac84"][i]}
            delay={i * 1.5}
            left={5 + i * 12}
          />
        ))}
      </div>

      {/* Continuous Hearts */}
      <div className="final-hearts">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="final-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 3}s`,
              fontSize: `${1.5 + Math.random() * 2}rem`,
            }}
          >
            {["❤️", "💕", "💖", "💗", "🧡", "💛"][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="final-content">
        <div className="glow-text-container">
          <h2 className="final-title glow-text">
            Happy Birthday!
          </h2>
          <p className="final-subtitle">
            🎉 Have an amazing year ahead! 🎉
          </p>
        </div>

        <div className="final-wishes">
          <div className="wish-item">
            <span className="wish-emoji">❓</span>
            <span>Do you have anything to ask me??</span>
          </div>
          <div className="wish-item">
            <span className="wish-emoji">🤔</span>
            <span>Do i have to change anything for you that u didn't like??</span>
          </div>
          <div className="wish-item">
            <span className="wish-emoji">✨</span>
            <span>Is there anything that i have to do something for you??</span>
          </div>
       <div className="wish-item">
            <span className="wish-emoji">🙂</span>
            <span>Are you happy with me??</span>
          </div>
        </div>
        <span>Answer all these in my chat😌😉</span>
        <br></br>
        <br></br>
        <div className="final-signature">
          <div className="signature-line" />
          <p className="signature-text">Made with ❤️ for you</p>
          <div className="signature-line" />
        </div>

        {/* Sparkles */}
        <div className="sparkles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalSection;
