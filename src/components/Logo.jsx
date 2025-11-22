export function Logo({ className = '', size = 'default', showText = true }) {
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    default: { icon: 32, text: 'text-xl' },
    large: { icon: 48, text: 'text-2xl' },
    xl: { icon: 64, text: 'text-3xl' },
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo SVG - Compass with Paw Print */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer Green Arc - Lower Left */}
        <path
          d="M 20 80 Q 30 50, 50 50"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Outer Green Arrow - Upper Right */}
        <path
          d="M 50 50 Q 70 30, 80 20"
          stroke="#10B981"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#10B981" />
          </marker>
        </defs>

        {/* Inner Network Circle */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        
        {/* Network Dots */}
        <circle cx="50" cy="30" r="2" fill="#3B82F6" opacity="0.6" />
        <circle cx="70" cy="50" r="2" fill="#3B82F6" opacity="0.6" />
        <circle cx="50" cy="70" r="2" fill="#3B82F6" opacity="0.6" />
        <circle cx="30" cy="50" r="2" fill="#3B82F6" opacity="0.6" />
        
        {/* Network Lines */}
        <line x1="50" y1="30" x2="70" y2="50" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
        <line x1="70" y1="50" x2="50" y2="70" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
        <line x1="50" y1="70" x2="30" y2="50" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />
        <line x1="30" y1="50" x2="50" y2="30" stroke="#3B82F6" strokeWidth="1" opacity="0.4" />

        {/* Compass Rose - 8 Points */}
        <g stroke="#1E40AF" strokeWidth="2" fill="none">
          {/* Cardinal Directions - Longer */}
          <line x1="50" y1="20" x2="50" y2="35" />
          <line x1="80" y1="50" x2="65" y2="50" />
          <line x1="50" y1="80" x2="50" y2="65" />
          <line x1="20" y1="50" x2="35" y2="50" />
          
          {/* Diagonal Directions - Shorter */}
          <line x1="65" y1="35" x2="58" y2="42" />
          <line x1="65" y1="65" x2="58" y2="58" />
          <line x1="35" y1="65" x2="42" y2="58" />
          <line x1="35" y1="35" x2="42" y2="42" />
        </g>

        {/* North Indicator */}
        <text
          x="50"
          y="18"
          textAnchor="middle"
          fill="#3B82F6"
          fontSize="12"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          N
        </text>

        {/* Paw Print in Center */}
        <g transform="translate(50, 50)">
          {/* Main pad */}
          <ellipse cx="0" cy="5" rx="4" ry="5" fill="#60A5FA" />
          {/* Top pads */}
          <circle cx="-3" cy="-2" r="2" fill="#60A5FA" />
          <circle cx="3" cy="-2" r="2" fill="#60A5FA" />
          <circle cx="0" cy="-4" r="1.5" fill="#60A5FA" />
        </g>
      </svg>

      {/* Text */}
      {showText && (
        <div className={`font-bold ${currentSize.text}`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <span className="text-[#1E40AF] dark:text-blue-400">Campus</span>
          <span className="text-[#10B981] dark:text-emerald-400">Tracker</span>
        </div>
      )}
    </div>
  );
}

