import { useEffect, useRef, useState } from "react";

const MessageSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const message = `On this special day, I want you to know how lucky you are to have a friend like me🫂.
  I think you expected I'm lucky to having you message right😂! but No😁. you should always thank that you have me in your life.
  Hey! Just kidding😅.you know how much i'm missing uh🥲 I'm feeling sad for not being there 
  for your birthday.I made many plans for this day but everything got changed.so, I'm writing this to you and i hope u will feel my presence 
  with this message. now you imagine me as I'm infront of you and speaking this to you.  
  now read the message carefully because I have  framed these words from many days for you.
your friendship is a gift I treasure every single day💗.
you know what Your call always manages to make me laugh, no matter how my day is going. Even on the most boring or stressful days, talking to you lifts my mood🤗. It’s crazy how a simple conversation with you can turn everything around😄.
we may not have a single picture together but our bond and memories are more than enough😊
May this birthday bring you all the happiness your heart can hold, all the success your dreams can imagine✌️.
Have an amazing birthday🎉. Lets be happy as long as we're together❤️`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < message.length) {
        setTypedText(message.slice(0, index + 1));
        index++;
      } else {
        setTypingComplete(true);
        clearInterval(intervalId);
      }
    }, 30);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  return (
    <section className="message-section" ref={sectionRef}>
      {/* Floating Hearts Background */}
      <div className="message-hearts">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="message-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          >
            {["❤️", "💕", "💖", "💗", "💝"][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="message-container">
        <h2 className="message-title">
          <span className="heart-icon">💌</span>
          A Special Message For You
          <span className="heart-icon">💌</span>
        </h2>

        <div className="message-card">
          <div className="message-text">
            {typedText}
            {!typingComplete && <span className="cursor">|</span>}
          </div>
          
          <div className={`message-signature ${typingComplete ? "visible" : ""}`}>
            <span className="signature-heart">❤️</span>
            <span className="signature-text">Your forever annoying friend❤️</span>
            <span className="signature-name">Ishuu</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
