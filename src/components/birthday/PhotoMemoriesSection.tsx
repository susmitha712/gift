import { useEffect, useRef, useState } from "react";

interface PhotoMemoriesSectionProps {
  onImageClick: (src: string) => void;
}

// Placeholder images - replace with actual photos
const photos = [
  { id: 1, src: "assets/img1.jpeg", caption: "Thank you so much for coming into my life🫂" },


  { id: 2, src: "/public/assets/img2.jpeg", caption:"No matter where life takes us,this friendship will always be one my constants😊"},
  { id: 3, src: "/public/assets/img9.jpeg", caption:"Let's be happy as long as we're together❤️" },
 
  { id: 5, src: "/public/assets/img5.jpeg", caption:"Thank you for being egoless and loyal towards me💗"},
  { id: 7, src: "/public/assets/img11.jpeg", caption: "may be we're not close in distance but we're close by bond💞" },
  { id: 8, src: "/public/assets/img12.jpeg", caption: "Thank you for staying even when I hurt you❤️‍🩹" },
  
  { id: 4, src: "/public/assets/img10.jpeg", caption:"hope we will meet and create memories soon🤗" },
  { id: 6, src: "/public/assets/img8.jpeg", caption: "Finally I'm definetly gonna hug you for being always there for me🫂" },
  
];

const PhotoMemoriesSection = ({ onImageClick }: PhotoMemoriesSectionProps) => {
  const [visiblePhotos, setVisiblePhotos] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const photoId = Number(entry.target.getAttribute("data-photo-id"));
            setVisiblePhotos((prev) => new Set([...prev, photoId]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const photoElements = containerRef.current?.querySelectorAll(".photo-card");
    photoElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="photo-section" ref={containerRef}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="sparkle-icon">📸</span>
          Your Moments
          <span className="sparkle-icon">💫</span>
        </h2>
        <p className="section-subtitle">Tap on any photo to view </p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`photo-card ${visiblePhotos.has(photo.id) ? "visible" : ""}`}
            data-photo-id={photo.id}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => onImageClick(photo.src.replace("w=400&h=400", "w=1200&h=1200"))}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onImageClick(photo.src.replace("w=400&h=400", "w=1200&h=1200"));
              }
            }}
          >
            <div className="photo-wrapper">
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <div className="photo-overlay">
                <span className="view-icon"></span>
                <span className="photo-caption">{photo.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoMemoriesSection;
