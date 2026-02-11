import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  shape: "square" | "circle" | "star";
}

interface ConfettiProps {
  count?: number;
  originX?: number;
  originY?: number;
}

const Confetti = ({ count = 50, originX, originY }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  const colors = [
    "#ff6b6b", "#4ecdc4", "#ffe66d", "#ff9ff3", 
    "#54a0ff", "#5f27cd", "#ff9f43", "#10ac84"
  ];

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < count; i++) {
      newPieces.push({
        id: i,
        x: originX !== undefined ? originX : 50 + (Math.random() - 0.5) * 20,
        y: originY !== undefined ? originY : -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 12,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        shape: ["square", "circle", "star"][Math.floor(Math.random() * 3)] as "square" | "circle" | "star",
      });
    }
    
    setPieces(newPieces);
  }, [count, originX, originY]);

  const renderShape = (piece: ConfettiPiece) => {
    if (piece.shape === "circle") {
      return (
        <div 
          className="confetti-circle"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
        />
      );
    }
    if (piece.shape === "star") {
      return (
        <div 
          className="confetti-star"
          style={{
            fontSize: piece.size,
            color: piece.color,
          }}
        >
          ★
        </div>
      );
    }
    return (
      <div 
        className="confetti-square"
        style={{
          width: piece.size,
          height: piece.size * 0.4,
          backgroundColor: piece.color,
        }}
      />
    );
  };

  return (
    <div className="confetti-container">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {renderShape(piece)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
