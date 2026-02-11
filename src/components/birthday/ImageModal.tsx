import { useEffect, useRef, useState } from "react";

interface ImageModalProps {
  src: string;
  onClose: () => void;
}

const ImageModal = ({ src, onClose }: ImageModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const startYRef = useRef<number | null>(null);
  const currentYRef = useRef<number>(0);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  // Touch handlers for swipe-to-close
  const handleTouchStart = (e: React.TouchEvent) => {
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startYRef.current === null) return;
    
    currentYRef.current = e.touches[0].clientY - startYRef.current;
    
    if (imageRef.current) {
      const opacity = Math.max(0, 1 - Math.abs(currentYRef.current) / 300);
      imageRef.current.style.transform = `translateY(${currentYRef.current}px)`;
      imageRef.current.style.opacity = String(opacity);
    }
  };

  const handleTouchEnd = () => {
    if (Math.abs(currentYRef.current) > 100) {
      handleClose();
    } else if (imageRef.current) {
      imageRef.current.style.transform = "";
      imageRef.current.style.opacity = "";
    }
    startYRef.current = null;
    currentYRef.current = 0;
  };

  return (
    <div
      className={`image-modal ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <button className="modal-close" onClick={handleClose} aria-label="Close modal">
        ✕
      </button>
      
      <div className="modal-hint">Swipe up/down to close</div>
      
      <div
        ref={imageRef}
        className="modal-image-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt="Memory" className="modal-image" />
      </div>
    </div>
  );
};

export default ImageModal;
