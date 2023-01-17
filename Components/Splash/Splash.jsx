import React from 'react';

const Splash = () => {
    return (
        <div className='splash'>
            <svg viewBox="0 0 100 100">
                <g className="shadow">
                    <ellipse cx="50" cy="100" rx="50" ry="5" />
                </g>
                <g className="core">
                    <circle cx="50" cy="50" r="10" />
                    <circle cx="50" cy="50" r="10" />
                </g>
                <g>
                    <g className="ring" transform="rotate(-30, 50, 50)">
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />

                    </g>
                    <g className="ring" transform="rotate(30, 50, 50)">
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                    </g>
                    <g className="ring" transform="rotate(90, 50, 50)">
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                        <ellipse cx="50" cy="50" rx="20" ry="50" />
                    </g>
                </g>
                <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" />
                </filter>
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style="stop-color:#00ddfd;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#2d6a82;stop-opacity:1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default Splash