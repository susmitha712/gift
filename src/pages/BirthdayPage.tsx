import { useState, useEffect, useRef } from "react";
import HeroSection from "@/components/birthday/HeroSection";
import PhotoMemoriesSection from "@/components/birthday/PhotoMemoriesSection";
import MessageSection from "@/components/birthday/MessageSection";
import CakeSection from "@/components/birthday/CakeSection";
import FinalSection from "@/components/birthday/FinalSection";
import ImageModal from "@/components/birthday/ImageModal";
import AudioPlayer from "@/components/birthday/AudioPlayer";

const BirthdayPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Handle first interaction for audio autoplay policies
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  return (
    <div className="birthday-page">
      {/* Animated Background */}
      <div className="animated-bg" />
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Audio Player */}
      <AudioPlayer hasInteracted={hasInteracted} />

      {/* Main Content */}
      <HeroSection />
      <PhotoMemoriesSection onImageClick={setSelectedImage} />
      <MessageSection />
      <CakeSection />
      <FinalSection />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          src={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
};

export default BirthdayPage;
