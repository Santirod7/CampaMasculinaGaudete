import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-32 h-32" }) => {
  return (
    <div className={`animate-logo-zoom-in ${className}`}>
        <svg 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xl w-full h-full"
        >
            {/* Hexagon Border */}
            <path 
                d="M100 10 L185 55 V145 L100 190 L15 145 V55 L100 10Z" 
                stroke="#2C4A52" 
                strokeWidth="8"
                fill="white"
            />

            {/* Background Sky/Flame area */}
            <mask id="mountainMask">
                <path d="M100 10 L185 55 V145 L100 190 L15 145 V55 L100 10Z" fill="white"/>
            </mask>

            <g mask="url(#mountainMask)">
                {/* Flame / Sun glow Background */}
                <path 
                    d="M30 150 C30 100 60 50 100 40 C140 30 170 50 170 80 L180 150 H20 Z" 
                    fill="#FFB81C"
                    fillOpacity="0.2"
                />
                
                {/* The Sun */}
                <circle cx="100" cy="80" r="25" fill="#FFB81C" />
                <path d="M100 45 V65 M100 95 V115 M65 80 H85 M115 80 H135 M75 55 L90 70 M110 90 L125 105 M75 105 L90 90 M110 70 L125 55" stroke="white" strokeWidth="3" strokeLinecap="round"/>

                {/* Mountains */}
                <path 
                    d="M15 140 L50 100 L80 120 L100 90 L130 110 L160 85 L185 140 V190 H15 V140Z" 
                    fill="#2C4A52"
                />
                
                {/* The Path/River */}
                <path 
                    d="M100 190 C100 190 90 170 100 160 C110 150 110 140 100 125 C95 118 95 110 100 100" 
                    stroke="white" 
                    strokeWidth="4" 
                    fill="none"
                />
                
                {/* The Cross */}
                <path 
                    d="M100 85 V105 M92 92 H108" 
                    stroke="white" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                />
                
                {/* The Flame Shape on top left/right stylized */}
                 <path 
                    d="M100 40 Q130 10 140 30 Q150 60 130 70" 
                    stroke="#F58220" 
                    strokeWidth="0" 
                    fill="#F58220"
                    opacity="0.8"
                />
            </g>
        </svg>
    </div>
  );
};

export default Logo;