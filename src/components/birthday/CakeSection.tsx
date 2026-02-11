import { useState, useRef, useEffect } from "react";
import Confetti from "./Confetti";

const CakeSection = () => {
  const [wishMade, setWishMade] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
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

  const handleMakeWish = () => {
    setWishMade(true);
    setCandlesBlown(true);
    
    // Show celebration after candles blow out
    setTimeout(() => {
      setShowCelebration(true);
    }, 800);

    // Reset after celebration
    setTimeout(() => {
      setShowCelebration(false);
      setTimeout(() => {
        setCandlesBlown(false);
        setWishMade(false);
      }, 500);
    }, 5000);
  };

  return (
    <section className={`cake-section ${isVisible ? "visible" : ""}`} ref={sectionRef}>
      {/* Celebration Effects */}
      {showCelebration && (
        <>
          <Confetti count={150} originX={50} originY={30} />
          <div className="fireworks-container">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="firework"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${10 + Math.random() * 40}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
          <div className="hearts-explosion">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="explosion-heart"
                style={{
                  left: "50%",
                  top: "40%",
                  animationDelay: `${i * 0.1}s`,
                  "--angle": `${(i / 20) * 360}deg`,
                } as React.CSSProperties}
              >
                ❤️
              </div>
            ))}
          </div>
        </>
      )}

      <div className="cake-container">
        <h2 className="cake-title">
          <span className="cake-emoji">🎂</span>
          Make a Wish!
          <span className="cake-emoji">🎂</span>
        </h2>

        {/* Animated Birthday Cake */}
        <div className="birthday-cake">
          {/* Candles */}
          <div className="candles">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="candle" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="candle-body" />
                <div className={`flame ${candlesBlown ? "blown" : ""}`}>
                  <div className="flame-inner" />
                </div>
                <div className={`smoke ${candlesBlown ? "visible" : ""}`} />
              </div>
            ))}
          </div>

          {/* Cake Layers */}
          <div className="cake-layer cake-top">
            <div className="frosting frosting-top" />
            <div className="sprinkles">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="sprinkle"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    backgroundColor: ["#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9ff3"][i % 4],
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="cake-layer cake-middle">
            <div className="frosting frosting-middle" />
          </div>
          
          <div className="cake-layer cake-bottom">
            <div className="frosting frosting-bottom" />
          </div>

          {/* Cake Plate */}
          <div className="cake-plate" />
        </div>

        {/* Make a Wish Button */}
        <button
          className={`wish-button ${wishMade ? "wished" : ""}`}
          onClick={handleMakeWish}
          disabled={wishMade}
        >
          {wishMade ? (
            <>
              <span className="wish-star">⭐</span>
              Wish Made!
              <span className="wish-star">⭐</span>
            </>
          ) : (
            <>
              <span className="wish-icon">🎂</span>
              Make a Wish
              <span className="wish-icon">✨</span>
            </>
          )}
        </button>

        {showCelebration && (
          <p className="wish-message">
            🌟 May all your wishes come true! 🌟
          </p>
        )}
      </div>
    </section>
  );
};

export default CakeSection;
