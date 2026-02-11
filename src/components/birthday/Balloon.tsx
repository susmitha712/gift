interface BalloonProps {
  color: string;
  delay: number;
  left: number;
}

const Balloon = ({ color, delay, left }: BalloonProps) => {
  return (
    <div 
      className="balloon"
      style={{
        left: `${left}%`,
        animationDelay: `${delay}s`,
      }}
    >
      {/* Balloon SVG */}
      <svg 
        viewBox="0 0 100 150" 
        className="balloon-svg"
      >
        {/* Balloon Body */}
        <defs>
          <radialGradient id={`balloonGrad-${left}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} />
          </radialGradient>
        </defs>
        <ellipse 
          cx="50" 
          cy="45" 
          rx="40" 
          ry="45" 
          fill={`url(#balloonGrad-${left})`}
          className="balloon-body"
        />
        {/* Balloon Knot */}
        <polygon 
          points="45,88 55,88 50,95" 
          fill={color}
        />
        {/* Balloon String */}
        <path 
          d="M50,95 Q55,110 48,125 Q52,140 50,150" 
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          className="balloon-string"
        />
        {/* Shine Effect */}
        <ellipse 
          cx="35" 
          cy="30" 
          rx="10" 
          ry="15" 
          fill="#ffffff"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export default Balloon;
