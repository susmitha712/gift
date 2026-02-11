import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  hasInteracted: boolean;
}

const AudioPlayer = ({ hasInteracted }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element
  useEffect(() => {
    // Using a royalty-free birthday music URL
    // In production, replace with your own audio file
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    // Using a simple melody that's likely to work
    // You can replace this with an actual birthday song URL
    audioRef.current.src = "src/assets/song2.mpeg";
    
    setIsLoaded(true);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Auto-play when user has interacted
  useEffect(() => {
    if (hasInteracted && audioRef.current && !isPlaying) {
      // Don't auto-play, let user control
    }
  }, [hasInteracted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio playback failed:", error);
    }
  };

  if (!isLoaded) return null;

  return (
    <button
      className={`audio-player ${isPlaying ? "playing" : ""}`}
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <div className="audio-icon">
        {isPlaying ? (
          <div className="sound-waves">
            <span />
            <span />
            <span />
          </div>
        ) : (
          <span className="play-icon">🎵</span>
        )}
      </div>
      <span className="audio-label">{isPlaying ? "Playing" : "Music"}</span>
    </button>
  );
};

export default AudioPlayer;
